"""Import or verify the immutable YAML catalog release used by the app."""
from __future__ import annotations

import argparse
import hashlib
import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SNAPSHOT = ROOT / "lib/catalog.snapshot.json"
LOCK = ROOT / "catalog.lock.json"
SOURCE_PATH = "app/data/catalog.json"


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path, help="Local know-your-agent-open checkout")
    parser.add_argument("--revision", default="HEAD", help="Committed source revision to import")
    parser.add_argument("--update", action="store_true", help="Import a committed source release")
    parser.add_argument("--check", action="store_true", help="Verify without writing (default)")
    args = parser.parse_args()
    if args.update:
        if args.check or args.source is None:
            parser.error("--update requires --source and cannot be combined with --check")
        source = args.source.resolve()
        def git(*command: str) -> str:
            return subprocess.run(
                ["git", "-C", str(source), *command], check=True,
                capture_output=True, text=True,
            ).stdout.strip()
        commit = git("rev-parse", "--verify", f"{args.revision}^{{commit}}")
        source_content = subprocess.run(
            ["git", "-C", str(source), "show", f"{commit}:{SOURCE_PATH}"],
            check=True, capture_output=True,
        ).stdout
        catalog = json.loads(source_content)
        # The source repository is private. Export only the eight already
        # public encyclopedia profiles, not the private advisor dataset.
        content = json.dumps({
            "version": catalog["version"],
            "ansichten": {"enzyklopaedie": catalog["ansichten"]["enzyklopaedie"]},
        }, ensure_ascii=False, indent=2).encode() + b"\n"
        lock = {
            "repository": "endvater/know-your-agent-open",
            "commit": commit,
            "path": SOURCE_PATH,
            "version": catalog["version"],
            "sha256": hashlib.sha256(content).hexdigest(),
            "source_sha256": hashlib.sha256(source_content).hexdigest(),
            "content_license": "CC-BY-SA-4.0",
        }
        SNAPSHOT.write_bytes(content)
        LOCK.write_text(json.dumps(lock, ensure_ascii=False, indent=2) + "\n")
    lock = json.loads(LOCK.read_text())
    if lock["repository"] != "endvater/know-your-agent-open" or len(lock["commit"]) != 40:
        raise SystemExit("Invalid source identity")
    content = SNAPSHOT.read_bytes()
    if hashlib.sha256(content).hexdigest() != lock["sha256"]:
        raise SystemExit("Catalog snapshot differs from the pinned release")
    catalog = json.loads(content)
    profiles = catalog["ansichten"]["enzyklopaedie"]
    if catalog["version"] != lock["version"] or not profiles:
        raise SystemExit("Catalog version or encyclopedia view is invalid")
    if len({profile["slug"] for profile in profiles}) != len(profiles):
        raise SystemExit("Duplicate profile slugs")
    if args.source and not args.update:
        source_content = (args.source / lock["path"]).read_bytes()
        if hashlib.sha256(source_content).hexdigest() != lock["source_sha256"]:
            raise SystemExit("New upstream catalog; import a validated source release")
    print(f"Catalog {lock['version']} verified: {len(profiles)} profiles, {lock['commit'][:12]}")


if __name__ == "__main__":
    main()
