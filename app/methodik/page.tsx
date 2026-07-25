import type { Metadata } from "next";
import { scaleDescriptions } from "@/lib/agents";

export const metadata: Metadata = {
  title: "Methodik",
  description:
    "Definitionen, Bewertungslogik und Reifegradmodelle der offenen Agenten-Enzyklopädie.",
};

const scaleGroups = [
  ["Autonomie", "A", scaleDescriptions.autonomy],
  ["Marktreife", "R", scaleDescriptions.maturity],
  ["Etablierung", "G", scaleDescriptions.establishment],
  ["Plattformreife", "P", scaleDescriptions.platform],
  ["Betreuungsintensität", "BI", scaleDescriptions.care],
  ["Evidenz", "E", scaleDescriptions.evidence],
] as const;

export default function MethodikPage() {
  return (
    <div className="shell content-page">
      <header className="content-hero">
        <p className="eyebrow">Offene Methodik / Version 0.1</p>
        <h1>Was wir unter einem Agenten verstehen.</h1>
        <p>
          Die Enzyklopädie trennt Aufgabe, technische Bauform und zulässige
          Autonomie. Dadurch bleibt sichtbar, wann ein LLM nützlich ist – und
          wann ein Workflow, DMN, RPA oder klassisches Machine Learning genügt.
        </p>
      </header>

      <section className="method-section">
        <p className="eyebrow">Arbeitsdefinition</p>
        <h2>Ziel, Zustand, Auswahl, Handlung, Rückkopplung.</h2>
        <p>
          Ein Agent verfolgt ein fachliches Ziel über Zeit, verarbeitet Signale
          aus seiner Umgebung, wählt innerhalb eines erlaubten Handlungsraums
          einen nächsten Schritt und beobachtet das Ergebnis. Sprachmodelle
          können dabei planen oder unstrukturierte Inhalte interpretieren. Sie
          sind aber keine notwendige Bedingung.
        </p>
      </section>

      <section className="method-section">
        <p className="eyebrow">Entscheidungsregel</p>
        <h2>Die einfachste tragfähige Bauform gewinnt.</h2>
        <div className="decision-table">
          <div>
            <strong>Stabiler Ablauf</strong>
            <span>Workflow / BPMN / Case Management</span>
          </div>
          <div>
            <strong>Vollständig ausdrückbare Entscheidung</strong>
            <span>Regeln / DMN</span>
          </div>
          <div>
            <strong>Dokumente erkennen, danach feste Logik</strong>
            <span>Kognitiver Bot</span>
          </div>
          <div>
            <strong>Muster prognostizieren</strong>
            <span>Predictive ML</span>
          </div>
          <div>
            <strong>Unstrukturierte Wissensarbeit ohne Aktion</strong>
            <span>LLM-Assistent</span>
          </div>
          <div>
            <strong>Variable Werkzeugwahl unter harten Grenzen</strong>
            <span>Kontrollierter Agent</span>
          </div>
        </div>
      </section>

      <section className="method-section">
        <p className="eyebrow">Sechs getrennte Skalen</p>
        <h2>Reife ist nicht Autonomie. Verbreitung ist nicht Evidenz.</h2>
        <div className="scale-grid">
          {scaleGroups.map(([title, prefix, values]) => (
            <article key={title} className="scale-card">
              <p>{prefix}</p>
              <h3>{title}</h3>
              <dl>
                {Object.entries(values).map(([key, value]) => (
                  <div key={key}>
                    <dt>{key}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="method-section">
        <p className="eyebrow">Kostenlogik</p>
        <h2>Dreijahres-TCO statt Tokenpreis.</h2>
        <p>
          Die Bandbreiten umfassen den initialen Aufbau, Prozess- und
          Datenintegration, Plattform, Modelle oder Rechenleistung,
          Qualitätssicherung, Governance, Change, Fachbetreuung und Betrieb.
          Sie sind redaktionelle Hypothesen, bis belastbare Implementierungen
          sie bestätigen.
        </p>
      </section>
    </div>
  );
}
