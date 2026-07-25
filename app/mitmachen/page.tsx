import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mitmachen",
  description:
    "Agentenprofil zur offenen Enzyklopädie beitragen oder ein bestehendes Profil verbessern.",
};

export default function ContributePage() {
  return (
    <div className="shell content-page">
      <header className="content-hero">
        <p className="eyebrow">Open Source / Apache-2.0</p>
        <h1>Eine Enzyklopädie wächst durch Widerspruch.</h1>
        <p>
          Reiche ein neues Agentenprofil ein, korrigiere Kostenannahmen oder
          ergänze belegte Implementierungen. Der Beitrag bleibt als Pull Request
          nachvollziehbar.
        </p>
        <a
          className="button button-primary"
          href="https://github.com/endvater/know-your-agent"
        >
          Repository auf GitHub öffnen ↗
        </a>
      </header>

      <section className="contribution-steps">
        <article>
          <span>01</span>
          <h2>Profil wählen</h2>
          <p>
            Ergänze einen vorhandenen Steckbrief oder kopiere die
            Profilvorlage für einen neuen Agententyp.
          </p>
        </article>
        <article>
          <span>02</span>
          <h2>Annahmen markieren</h2>
          <p>
            Trenne Schätzung, Pilotbeobachtung und Produktionsbeleg. Gib für
            externe Aussagen Primärquellen an.
          </p>
        </article>
        <article>
          <span>03</span>
          <h2>Review ermöglichen</h2>
          <p>
            Erkläre Wertmechanismus, Kostenbasis, Kontrollgrenzen und die
            einfachere nicht-agentische Alternative.
          </p>
        </article>
      </section>

      <section className="contribution-rules">
        <div>
          <p className="eyebrow">Gesucht</p>
          <h2>Beobachtbare Praxis</h2>
          <ul className="detail-list">
            <li>Messwerte aus Pilot oder Produktion</li>
            <li>Lessons Learned aus Betrieb und Governance</li>
            <li>Agenten ohne LLM und hybride Architekturen</li>
            <li>Camunda-, Pega- und Case-Management-Integrationen</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Nicht gesucht</p>
          <h2>Unbelegte Superlative</h2>
          <ul className="detail-list">
            <li>Vendor-Texte ohne fachliche Einordnung</li>
            <li>ROI-Zahlen ohne Annahmen und Basis</li>
            <li>Agent Washing von Chatbots oder festen Skripten</li>
            <li>Vertrauliche Kunden- oder Betriebsdaten</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
