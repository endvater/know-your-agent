# Know Your Agent

Die offene Enzyklopädie der arbeitenden Agenten: nach Branche, beruflicher
Disziplin, technischer Bauform, Wertbeitrag, Investition, Governance und
Dreijahresbetrieb.

Die Leitfrage lautet nicht „Welches LLM nehmen wir?“, sondern:

> Welches ist die einfachste kontrollierbare Bauform, die den größten
> belegbaren Hebel erzeugt?

Deshalb dokumentiert das Projekt auch Regelagenten, kognitive Bots,
Predictive-ML-Systeme, BPMN-/Case-Hybride und Lösungen ohne LLM.

## Was bereits funktioniert

- Suche und Filter nach Branche, Disziplin und Bauform
- standardisierte Agentensteckbriefe
- Wertbeitrag und größter Hebel
- einmaliger Invest, laufende Kosten und Dreijahres-TCO
- Autonomie-, Reife-, Etablierungs-, Plattform-, Betreuungs- und Evidenzskalen
- Eingangsvoraussetzungen, Governance, erlaubte und verbotene Aktionen
- Camunda-/Pega-orientiertes Integrationsmuster
- responsive, barrierearme Weboberfläche

Die enthaltenen Kostenbandbreiten und Reifegrade sind redaktionelle
Orientierungshypothesen. Sie werden erst durch belegte Beiträge zu belastbaren
Benchmarks.

## Lokale Entwicklung

Voraussetzung: Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Danach läuft die App auf `http://localhost:3000`.

Prüfen:

```bash
npm test
npm run lint
```

## Ein Profil beitragen

1. Repository forken und einen Arbeitsbranch erstellen.
2. Ein Daten-Issue mit Quellen vorschlagen oder mit Maintainer-Zugang die
   kanonischen YAML-Profile verbessern.
3. Annahmen, Beobachtungen und externe Belege klar trennen.
4. Build, Tests und Lint ausführen.
5. Pull Request mit der Profil-Checkliste eröffnen.

Die ausführlichen Regeln stehen in [CONTRIBUTING.md](CONTRIBUTING.md).

## Inspiration und Eigenständigkeit

Die Produktidee adaptiert ein öffentlich sichtbares Muster von
[Naven](https://naven.ai/): strukturierter Dialog, systemische Diagnose,
Priorisierung und eine Empfehlung für den kleinsten wirksamen Hebel.

Know Your Agent ist eine unabhängige Open-Source-Umsetzung mit einem anderen
Gegenstand: technische und betriebliche Agentenarchitekturen. Es verwendet
keinen Naven-Code, keine Naven-Texte, keine Naven-Daten und kein Naven-Branding.
Es besteht keine Verbindung oder Partnerschaft mit Naven.

## Roadmap

- Profile aus weiteren Branchen und Disziplinen
- dateibasierte Profile mit JSON-Schema
- Quellen- und Verifikationsworkflow
- Vergleichsansicht
- geführte Design-Thinking-/EventStorming-Session
- Export als Markdown und JSON
- optionaler Beitrag über ein moderiertes Webformular

## Lizenz

Code und Projektstruktur stehen unter der [Apache License 2.0](LICENSE).
Beiträge dürfen nur Inhalte enthalten, die unter dieser Lizenz veröffentlicht
werden dürfen.

## Katalogquelle und reproduzierbarer Build

Die App verwendet einen eingecheckten Export aus dem privaten kanonischen
Datenrepo `endvater/know-your-agent-open`. Redaktionelle Änderungen werden dort
in `daten/ansichten/enzyklopaedie.yaml` gepflegt. `lib/agents.ts` enthält nur
Typen, Skalen und Zugriffsfunktionen. Die acht bisherigen Profile bleiben
inhaltlich erhalten. Der private Berater-Datensatz wird nicht veröffentlicht.

`catalog.lock.json` pinnt den Quellcommit, die Katalogversion und SHA-256.
Ein normaler Build braucht weder GitHub-Token noch Zugriff auf das Datenrepo:

```bash
python tools/sync_catalog.py --check
npm test
```

Maintainer importieren einen geprüften, committeten Quellstand mit
`python tools/sync_catalog.py --source ../know-your-agent-open --update`.
Externe Beiträge können weiterhin über Issues im öffentlichen App-Repo
vorgeschlagen werden. Code: Apache-2.0; generierte Kataloginhalte: CC BY-SA 4.0
mit Namensnennung Jürgen Schiller García / Fincrime Watchdog.
