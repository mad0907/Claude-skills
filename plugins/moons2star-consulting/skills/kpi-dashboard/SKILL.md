---
name: kpi-dashboard
description: "Designs an executive or board KPI dashboard that drives decisions: audience and decisions served, 8-15 metrics balanced across outcomes and leading indicators drawn from the driver tree, precise metric definitions and data lineage, targets and red-amber-green thresholds with tolerance logic, chart choice per metric, one-screen layout with exceptions first, commentary and action ownership, data quality and refresh, and the meeting rhythm that uses it. Can produce a mock-up. Use for management, board or programme reporting, or to replace bloated packs nobody reads."
---

# KPI Dashboard

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a one-page dashboard leaders actually use. It shows what's on track, what isn't and why, and what is being done about it, with definitions precise enough that nobody argues about the numbers.

## The senior standard
1. **Decisions, not data.** Start from the 3-5 decisions the audience takes with it; every metric must inform one.
2. **Few metrics, well defined.** 8-15 at the top level. Each has a formula, source, owner, frequency and a definition that's signed off.
3. **Balance lag and lead.** Outcomes (revenue, EBITDA, NPS) plus leading drivers (pipeline, utilisation, defect rate) that predict them.
4. **Thresholds trigger action.** Green, amber and red are defined in advance, linked to tolerances and escalation, not set by mood.
5. **Exceptions first.** The eye should land on what needs attention, not on 30 green tiles.
6. **Narrative and ownership.** Each red or amber has a "why" and an owner with an action and a date.
7. **Trustworthy data.** Lineage, refresh time and data-quality flags are visible. A dashboard nobody trusts is worse than none.

## Before you start: diagnose
- Audience (board, ExCo, business unit, programme SteerCo), frequency, and the meeting where it's used.
- The decisions and questions they repeatedly ask.
- The existing reports and their pain (too long, late, contradictory).
- Data sources, latency and quality; tool constraints.
- The driver tree or strategy objectives to link to.

## Method
1. **Decisions and questions:** list them; map each to candidate metrics.
2. **Select metrics** using the driver tree:
   - 3-5 outcomes;
   - 4-8 leading drivers;
   - 1-3 health or risk indicators (e.g. safety, compliance, cyber);
   - a stakeholder metric if relevant (customers, people).
   Drop anything that doesn't inform a decision.
3. **Define each metric:** name, business definition, formula (numerator / denominator, inclusions and exclusions), unit, source system, refresh frequency and latency, owner, data steward, and known caveats.
4. **Targets and thresholds:**
   - target from the plan;
   - green within tolerance;
   - amber when outside tolerance but recoverable;
   - red when breached or the trend is off-track.
   Consider trend-based rules (e.g. 3 consecutive declines = amber).
5. **Visual choice per metric:**
   - bullet chart (actual vs target);
   - line with target band for trends;
   - sparkline in tiles;
   - sorted bar for comparisons across units;
   - small multiples for many units.
   Avoid gauges, 3D, pie charts with many slices, and dual axes unless essential.
6. **Layout:**
   - **Top:** headline status and exceptions.
   - **Middle:** outcomes with trends.
   - **Bottom:** drivers by theme.
   - **Side:** commentary (what changed, why, action, owner, date).
   - One screen or page; drill-downs elsewhere.
7. **Data and governance:** lineage map; data-quality checks; "as of" timestamp; a change process for definitions; access controls.
8. **Rhythm:** who reviews which tiles, when, and how actions are tracked to closure. Retire metrics that never drive action.
9. **Mock-up:** produce a layout sketch or, if tools allow, a working prototype with sample data clearly marked.

## Judgement calls
- **Board vs management.** Boards need fewer, more strategic and risk-oriented metrics, with trends and peer context. Management needs operational drivers at higher frequency.
- **Targets can distort.** Pair metrics that can be gamed (e.g. handling time with quality; sales volume with margin).
- **Normalise for comparability:** per unit, per FTE, per ₹ revenue; adjust for seasonality when comparing months.
- **Red is useful.** If everything is always green, the thresholds are too loose or the metrics are wrong.
- **Show uncertainty** for forecasts (ranges), not just point estimates.

## Red flags
- 40+ metrics; no definitions; numbers differ from finance reports.
- Thresholds missing, or changed after the fact.
- No commentary or owners for reds.
- Gauges and traffic lights without trends.
- Data refreshed manually days late, with no timestamp.

## Variants by context
- **Board:** strategy KPIs, financial headline, risk-appetite metrics, people and culture, ESG, major programme status. Quarterly, with a trend over 5-8 quarters.
- **ExCo / monthly business review:** P&L bridge, drivers, forecast vs plan, top risks, initiatives.
- **Operations:** daily or shift metrics: throughput, quality, safety, backlog.
- **Programme / transformation:** milestones, benefits realised vs plan, adoption, risks, budget.
- **AI programme:** value realised, adoption, model performance and drift, incidents, cost per transaction.

## Output format

```markdown
## KPI Dashboard: [audience], [frequency]
**Decisions supported:** 1. ... 2. ...

| Metric | Definition / formula | Source | Owner | Frequency | Target | Green / Amber / Red rule | Visual | Lead/Lag |
|---|---|---|---|---|---|---|---|---|

**Layout sketch:**
[Row 1: status summary + top 3 exceptions]
[Row 2: outcome tiles with trend and target band]
[Row 3: driver tiles grouped by theme]
[Right: commentary - what changed, why, action, owner, date]

**Data lineage and quality:** ...
**Review rhythm and action tracking:** ...
**Metrics retired from the old pack (and why):** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Each metric maps to a decision; 8-15 metrics at the top level.
- [ ] Precise definitions with formulas, sources and owners.
- [ ] Thresholds defined in advance, with gaming-prone metrics paired.
- [ ] Lead and lag balance; links to the driver tree.
- [ ] The layout puts exceptions first; chart types fit the data.
- [ ] Data lineage, timestamp and review rhythm included.

## House rules
- Never invent facts, figures, quotes or sources. Label estimates "(est.)" and list assumptions openly.
- If key inputs are missing, ask up to 3 short questions, or proceed with clearly stated assumptions if the user wants speed.
- Answer first, then support. Plain English; define any jargon.
- Use the user's currency, units, terminology and context (e.g. ₹ and lakh/crore for Indian users).
- Do calculations with code or a spreadsheet when available, not mental arithmetic.
- For legal, regulatory, tax or accounting specifics, flag them for verification against current official sources and qualified advisers.
- Remind users not to paste confidential or personal data they are not permitted to share; suggest anonymising.

## Limitations and disclaimer
- **Decision support, not professional advice.** This skill provides a structured method and general information. It is not legal, financial, investment, tax, accounting, regulatory, medical or other professional advice. It does not replace qualified advisers or your organisation's own review and approval processes.
- **AI can be wrong.** Claude can produce confident but incorrect facts, numbers, citations or legal references. Check anything you will rely on, sign or publish.
- **Point-in-time content.** Frameworks, laws, thresholds and dates referenced reflect the author's research as of November 2026 and may since have changed. Confirm against current official sources.
- **Only as good as the inputs.** Claude knows only what you share in the conversation; missing or inaccurate context leads to weaker output.
- **Your data, your responsibility.** Do not share confidential, personal or price-sensitive information unless your organisation's policies and applicable law allow it.
- **No warranty, no adviser relationship.** Provided "as is" under CC BY 4.0, without warranty of any kind. Using it creates no adviser-client relationship with the author, who accepts no liability for decisions made using it.
- **Skill-specific:** Not investment, tax, valuation or accounting advice. Models and calculations are unaudited; have material numbers independently checked before decisions or disclosure.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `kpi-driver-tree`: Break a top metric into the drivers people can act on, with owners and targets.
- `chart-selection`: Pick the right chart for the message, and avoid charts that confuse or mislead.
- `exhibit-builder`: Design a complete, board-ready exhibit: title, chart, callouts, source, and the code to draw it.
- `steerco-update`: Write a crisp steering committee update: status, decisions needed, risks, and next steps.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
