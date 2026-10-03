import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-title">Know Your Agent</p>
          <p className="footer-copy">
            Eine offene, redaktionell kuratierte Enzyklopädie für
            verantwortbare Agentensysteme.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/methodik">Skalen &amp; Bewertungslogik</Link>
          <Link href="/mitmachen">Profil beitragen</Link>
          <a href="https://github.com/endvater/know-your-agent">
            Quellcode auf GitHub
          </a>
        </div>
        <p className="footer-license">
          Open Source unter Apache-2.0. Profile: CC BY-SA 4.0, Jürgen Schiller García / Fincrime Watchdog. Profile sind Arbeitsstände, keine
          Produkt- oder Rechtsberatung.
        </p>
      </div>
    </footer>
  );
}
