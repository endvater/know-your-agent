import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Know Your Agent – Startseite">
          <span className="wordmark-kicker">WATCHDOG / DOSSIER</span>
          <span className="wordmark-title">Know Your Agent</span>
        </Link>
        <nav className="main-nav" aria-label="Hauptnavigation">
          <Link href="/">Agenten</Link>
          <Link href="/methodik">Methodik</Link>
          <Link href="/mitmachen">Mitmachen</Link>
          <a
            className="github-link"
            href="https://github.com/endvater/know-your-agent"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
