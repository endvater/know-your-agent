import catalog from "./catalog.snapshot.json";

export type AgentProfile = {
  slug: string;
  title: string;
  tagline: string;
  industries: string[];
  disciplines: string[];
  kind:
    | "Regelagent"
    | "Kognitiver Bot"
    | "Predictive-ML-Agent"
    | "LLM-Assistent"
    | "Kontrollierter Agent"
    | "Hybrider Agent";
  engine: string;
  modelStrategy: string;
  topology: string;
  autonomy: "A0" | "A1" | "A2" | "A3" | "A4" | "A5";
  maturity: "R0" | "R1" | "R2" | "R3" | "R4" | "R5";
  establishment: "G0" | "G1" | "G2" | "G3" | "G4" | "G5";
  platformMaturity: "P0" | "P1" | "P2" | "P3" | "P4" | "P5";
  careIntensity: "BI0" | "BI1" | "BI2" | "BI3" | "BI4";
  evidence: "E0" | "E1" | "E2" | "E3" | "E4";
  investment: string;
  annualRunCost: string;
  tco: string;
  value: string;
  leverage: string;
  summary: string;
  whyAgent: string;
  nonAgentAlternative: string;
  entryRequirements: string[];
  governance: string[];
  threeYearOutlook: string[];
  workflow: string[];
  allowedActions: string[];
  prohibitedActions: string[];
  risks: string[];
  metrics: string[];
  status: "Referenzprofil" | "In Recherche" | "Pilotprofil";
  updatedAt: string;
};

export const scaleDescriptions = {
  autonomy: {
    A0: "Keine autonome Aktion",
    A1: "Vorschlag ohne Ausführung",
    A2: "Vorbereitung mit Freigabe",
    A3: "Begrenzte Aktion mit Kontrolle",
    A4: "Weitgehend autonom",
    A5: "Vollautonom",
  },
  maturity: {
    R0: "Hypothese",
    R1: "Experiment",
    R2: "Pilot",
    R3: "Produktionsfähig",
    R4: "Skaliert",
    R5: "Standardisiert",
  },
  establishment: {
    G0: "Nicht etabliert",
    G1: "Einzelversuche",
    G2: "Erste Wiederholungen",
    G3: "Etablierte Praxis",
    G4: "Breit industrialisiert",
    G5: "Branchenstandard",
  },
  platform: {
    P0: "Keine Plattform",
    P1: "Sandbox",
    P2: "Inkubationsplattform",
    P3: "Produktionsplattform",
    P4: "Skalierte Plattform",
    P5: "Föderiertes Ökosystem",
  },
  care: {
    BI0: "Nahezu wartungsfrei",
    BI1: "Gering",
    BI2: "Regelmäßig",
    BI3: "Hoch",
    BI4: "Dauerhafte Fach- und Technikbetreuung",
  },
  evidence: {
    E0: "Redaktionelle Hypothese",
    E1: "Plausibilisiert",
    E2: "Pilotbeleg",
    E3: "Produktionsbeleg",
    E4: "Mehrfach unabhängig belegt",
  },
} as const;

// Generierter Export aus know-your-agent-open; redaktionelle Änderungen dort.
export const agents: AgentProfile[] = catalog.ansichten.enzyklopaedie as AgentProfile[];

export function getAgent(slug: string) {
  return agents.find((agent) => agent.slug === slug);
}

export function uniqueValues(
  key: "industries" | "disciplines" | "kind",
): string[] {
  const values =
    key === "kind"
      ? agents.map((agent) => agent.kind)
      : agents.flatMap((agent) => agent[key]);

  return [...new Set(values)].sort((a, b) => a.localeCompare(b, "de"));
}
