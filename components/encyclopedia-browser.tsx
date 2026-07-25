"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { AgentProfile } from "@/lib/agents";

type Props = {
  agents: AgentProfile[];
  industries: string[];
  disciplines: string[];
  kinds: string[];
};

export function EncyclopediaBrowser({
  agents,
  industries,
  disciplines,
  kinds,
}: Props) {
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState("Alle Branchen");
  const [discipline, setDiscipline] = useState("Alle Disziplinen");
  const [kind, setKind] = useState("Alle Bauformen");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("de");
    return agents.filter((agent) => {
      const haystack = [
        agent.title,
        agent.tagline,
        agent.kind,
        agent.engine,
        agent.leverage,
        ...agent.industries,
        ...agent.disciplines,
      ]
        .join(" ")
        .toLocaleLowerCase("de");

      return (
        (!normalized || haystack.includes(normalized)) &&
        (industry === "Alle Branchen" ||
          agent.industries.includes(industry)) &&
        (discipline === "Alle Disziplinen" ||
          agent.disciplines.includes(discipline)) &&
        (kind === "Alle Bauformen" || agent.kind === kind)
      );
    });
  }, [agents, discipline, industry, kind, query]);

  const reset = () => {
    setQuery("");
    setIndustry("Alle Branchen");
    setDiscipline("Alle Disziplinen");
    setKind("Alle Bauformen");
  };

  return (
    <section className="catalogue" aria-labelledby="catalogue-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Enzyklopädie / Ausgabe 01</p>
          <h2 id="catalogue-title">Agenten nach Aufgabe durchsuchen</h2>
        </div>
        <p className="result-count" aria-live="polite">
          {filtered.length} von {agents.length} Profilen
        </p>
      </div>

      <div className="filter-panel">
        <label className="search-field">
          <span>Suche</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="z. B. KYC, Dokumente, Camunda"
          />
        </label>
        <label>
          <span>Branche</span>
          <select
            value={industry}
            onChange={(event) => setIndustry(event.target.value)}
          >
            <option>Alle Branchen</option>
            {industries.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Disziplin</span>
          <select
            value={discipline}
            onChange={(event) => setDiscipline(event.target.value)}
          >
            <option>Alle Disziplinen</option>
            {disciplines.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Bauform</span>
          <select value={kind} onChange={(event) => setKind(event.target.value)}>
            <option>Alle Bauformen</option>
            {kinds.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
      </div>

      {filtered.length > 0 ? (
        <div className="agent-grid">
          {filtered.map((agent, index) => (
            <article className="agent-card" key={agent.slug}>
              <div className="card-index">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className={`status status-${agent.status.toLowerCase().replaceAll(" ", "-")}`}>
                  {agent.status}
                </span>
              </div>
              <p className="agent-kind">{agent.kind}</p>
              <h3>
                <Link href={`/agenten/${agent.slug}`}>{agent.title}</Link>
              </h3>
              <p className="agent-tagline">{agent.tagline}</p>
              <div className="card-rule" />
              <dl className="card-facts">
                <div>
                  <dt>Größter Hebel</dt>
                  <dd>{agent.leverage}</dd>
                </div>
                <div>
                  <dt>3-Jahres-TCO</dt>
                  <dd>{agent.tco}</dd>
                </div>
                <div>
                  <dt>Reife / Autonomie</dt>
                  <dd>
                    {agent.maturity} · {agent.autonomy}
                  </dd>
                </div>
                <div>
                  <dt>Betreuung</dt>
                  <dd>{agent.careIntensity}</dd>
                </div>
              </dl>
              <Link className="card-link" href={`/agenten/${agent.slug}`}>
                Vollständigen Steckbrief lesen <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="eyebrow">Keine Treffer</p>
          <h3>Diese Kombination ist noch nicht dokumentiert.</h3>
          <p>
            Filter zurücksetzen oder das fehlende Profil als Open-Source-Beitrag
            vorschlagen.
          </p>
          <button type="button" onClick={reset}>
            Filter zurücksetzen
          </button>
        </div>
      )}
    </section>
  );
}
