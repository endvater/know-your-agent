import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { agents, getAgent, scaleDescriptions } from "@/lib/agents";

export function generateStaticParams() {
  return agents.map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgent(slug);
  if (!agent) return {};

  return {
    title: agent.title,
    description: agent.tagline,
  };
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="detail-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default async function AgentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agent = getAgent(slug);
  if (!agent) notFound();

  return (
    <article className="profile">
      <header className="profile-hero">
        <div className="shell">
          <Link className="back-link" href="/#agenten">
            ← Alle Agenten
          </Link>
          <div className="profile-heading">
            <div>
              <p className="eyebrow">
                {agent.kind} / {agent.status}
              </p>
              <h1>{agent.title}</h1>
              <p className="profile-deck">{agent.tagline}</p>
            </div>
            <div className="profile-stamp">
              <span>Stand</span>
              <strong>{agent.updatedAt}</strong>
              <span>{agent.evidence}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="shell profile-layout">
        <aside className="profile-facts">
          <p className="eyebrow">Kurzprofil</p>
          <dl>
            <div>
              <dt>Branche</dt>
              <dd>{agent.industries.join(", ")}</dd>
            </div>
            <div>
              <dt>Disziplin</dt>
              <dd>{agent.disciplines.join(", ")}</dd>
            </div>
            <div>
              <dt>Decision Engine</dt>
              <dd>{agent.engine}</dd>
            </div>
            <div>
              <dt>Modellstrategie</dt>
              <dd>{agent.modelStrategy}</dd>
            </div>
            <div>
              <dt>Topologie</dt>
              <dd>{agent.topology}</dd>
            </div>
          </dl>
        </aside>

        <div className="profile-body">
          <section className="executive-take">
            <p className="eyebrow">Executive Take</p>
            <p>{agent.summary}</p>
          </section>

          <section className="metric-strip" aria-label="Bewertung">
            <div>
              <span>Autonomie</span>
              <strong>{agent.autonomy}</strong>
              <small>{scaleDescriptions.autonomy[agent.autonomy]}</small>
            </div>
            <div>
              <span>Reife</span>
              <strong>{agent.maturity}</strong>
              <small>{scaleDescriptions.maturity[agent.maturity]}</small>
            </div>
            <div>
              <span>Etablierung</span>
              <strong>{agent.establishment}</strong>
              <small>
                {scaleDescriptions.establishment[agent.establishment]}
              </small>
            </div>
            <div>
              <span>Plattform</span>
              <strong>{agent.platformMaturity}</strong>
              <small>
                {scaleDescriptions.platform[agent.platformMaturity]}
              </small>
            </div>
            <div>
              <span>Betreuung</span>
              <strong>{agent.careIntensity}</strong>
              <small>{scaleDescriptions.care[agent.careIntensity]}</small>
            </div>
          </section>

          <section className="profile-section">
            <span className="section-number">01</span>
            <div>
              <h2>Wertbeitrag und größter Hebel</h2>
              <p>{agent.value}</p>
              <blockquote>{agent.leverage}</blockquote>
            </div>
          </section>

          <section className="profile-section">
            <span className="section-number">02</span>
            <div>
              <h2>Investition und Dreijahreskosten</h2>
              <div className="economics-grid">
                <div>
                  <span>Einmaliger Invest</span>
                  <strong>{agent.investment}</strong>
                </div>
                <div>
                  <span>Laufende Kosten / Jahr</span>
                  <strong>{agent.annualRunCost}</strong>
                </div>
                <div>
                  <span>Dreijahres-TCO</span>
                  <strong>{agent.tco}</strong>
                </div>
              </div>
              <p className="method-note">
                Redaktionelle Orientierungsbandbreite, kein Angebot. Enthalten
                sind typischerweise Aufbau, Integration, Betrieb, Modell- oder
                Infrastrukturkosten, Evaluation und fachliche Betreuung.
              </p>
            </div>
          </section>

          <section className="profile-section">
            <span className="section-number">03</span>
            <div>
              <h2>Warum ein Agent?</h2>
              <p>{agent.whyAgent}</p>
              <h3>Einfachere Alternative</h3>
              <p>{agent.nonAgentAlternative}</p>
            </div>
          </section>

          <section className="profile-section">
            <span className="section-number">04</span>
            <div>
              <h2>Eingangsvoraussetzungen</h2>
              <List items={agent.entryRequirements} />
            </div>
          </section>

          <section className="profile-section">
            <span className="section-number">05</span>
            <div>
              <h2>Governance und Kontrolle</h2>
              <List items={agent.governance} />
            </div>
          </section>

          <section className="profile-section">
            <span className="section-number">06</span>
            <div>
              <h2>Integration und Ablauf</h2>
              <ol className="workflow-list">
                {agent.workflow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className="permission-grid">
                <div>
                  <h3>Darf</h3>
                  <List items={agent.allowedActions} />
                </div>
                <div>
                  <h3>Darf nicht</h3>
                  <List items={agent.prohibitedActions} />
                </div>
              </div>
            </div>
          </section>

          <section className="profile-section">
            <span className="section-number">07</span>
            <div>
              <h2>Dreijahresperspektive</h2>
              <List items={agent.threeYearOutlook} />
            </div>
          </section>

          <section className="profile-section">
            <span className="section-number">08</span>
            <div>
              <h2>Risiken und Messgrößen</h2>
              <div className="permission-grid">
                <div>
                  <h3>Zentrale Risiken</h3>
                  <List items={agent.risks} />
                </div>
                <div>
                  <h3>Betriebskennzahlen</h3>
                  <List items={agent.metrics} />
                </div>
              </div>
            </div>
          </section>

          <div className="profile-contribute">
            <p>
              Kennst du eine belastbare Implementierung oder bessere
              Kostenannahmen für dieses Profil?
            </p>
            <Link href="/mitmachen">Profil auf GitHub verbessern →</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
