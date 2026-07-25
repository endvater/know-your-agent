import Link from "next/link";
import { EncyclopediaBrowser } from "@/components/encyclopedia-browser";
import { agents, uniqueValues } from "@/lib/agents";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Open-Source-Dossier / Stand 25.07.2026</p>
            <h1>
              Die Enzyklopädie der <em>arbeitenden</em> Agenten.
            </h1>
            <p className="hero-deck">
              Nicht nach Hype sortiert, sondern nach Aufgabe, Wertbeitrag,
              Investition, Governance und dem Aufwand der nächsten drei
              Betriebsjahre.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#agenten">
                Profile entdecken
              </a>
              <Link className="button button-secondary" href="/mitmachen">
                Profil beitragen
              </Link>
            </div>
          </div>
          <aside className="hero-note" aria-label="Redaktionelle Leitfrage">
            <span className="note-number">01</span>
            <p className="note-label">Die Leitfrage</p>
            <blockquote>
              Welches ist die einfachste kontrollierbare Bauform, die den
              größten belegbaren Hebel erzeugt?
            </blockquote>
            <p className="note-copy">
              Die Antwort kann ein LLM-Agent sein. Oder ein Workflow, ein
              Regelagent, ein kognitiver Bot oder klassisches Machine Learning.
            </p>
          </aside>
        </div>
      </section>

      <section className="principles">
        <div className="shell principles-grid">
          <p className="principles-intro">
            Ein Agent ist hier ein System, das Ziele über Zustände verfolgt,
            Signale verarbeitet und innerhalb definierter Grenzen Handlungen
            auswählt. Ein LLM ist optional.
          </p>
          <div className="principle">
            <span>01</span>
            <h2>Wert vor Technik</h2>
            <p>Jedes Profil benennt Nutzenmechanismus und größten Hebel.</p>
          </div>
          <div className="principle">
            <span>02</span>
            <h2>Betrieb vor Demo</h2>
            <p>TCO, Governance und Betreuungsintensität gehören zum Entwurf.</p>
          </div>
          <div className="principle">
            <span>03</span>
            <h2>Evidenz vor Behauptung</h2>
            <p>Reife und Beleglage werden getrennt und sichtbar bewertet.</p>
          </div>
        </div>
      </section>

      <div className="shell" id="agenten">
        <EncyclopediaBrowser
          agents={agents}
          industries={uniqueValues("industries")}
          disciplines={uniqueValues("disciplines")}
          kinds={uniqueValues("kind")}
        />
      </div>

      <section className="closing-callout">
        <div className="shell closing-grid">
          <div>
            <p className="eyebrow">Steigende Abdeckung</p>
            <h2>Die Lücken sind Teil des Produkts.</h2>
          </div>
          <div>
            <p>
              Fehlende Branchen, unklare Kostenannahmen und ungeprüfte
              Reifegrade werden nicht kaschiert. Sie werden als offene
              Recherche- und Beitragsaufträge sichtbar.
            </p>
            <Link className="text-link" href="/mitmachen">
              So wächst die Enzyklopädie →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
