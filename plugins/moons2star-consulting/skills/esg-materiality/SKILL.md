---
name: esg-materiality
description: "Runs a double materiality assessment the way assurance providers and sophisticated investors expect: value-chain-wide topic universe from sector standards (ISSB/SASB, GRI sector standards, ESRS topical lists), impacts, risks and opportunities (IROs) identified per topic, impact materiality scored on scale, scope, irremediability and likelihood, financial materiality scored on effect on cash flows, access to finance and cost of capital over short, medium and long term, thresholds set and justified, stakeholder engagement evidenced, and results linked to strategy, targets, BRSR, ISSB or CSRD disclosures and the board's oversight. Use for sustainability strategy, reporting readiness, board ESG oversight or export-customer requirements."
---

# ESG Double Materiality Assessment

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a defensible, documented list of the sustainability matters that genuinely matter to the business and to people and planet. It shows why each one matters, how strongly, over what horizon, and what the organisation will do and disclose about it. The process is built to survive an auditor's or investor's scrutiny.

## Core concepts
- **Impact materiality (inside-out):** the organisation's actual or potential, positive or negative impacts on people and the environment, across its own operations **and value chain**.
- **Financial materiality (outside-in):** sustainability matters that could reasonably be expected to affect the organisation's cash flows, access to finance or cost of capital, over the short, medium or long term. This is the ISSB (IFRS S1) lens.
- **Double materiality:** a matter is material if it is material on **either** lens (ESRS/CSRD approach; GRI covers the impact lens).
- **IROs:** for each topic, identify specific **Impacts, Risks and Opportunities**. Assess IROs, not vague topic labels.
- **Dependencies:** on natural resources, workers, communities and suppliers often link impact to financial risk. Water scarcity is a classic example.

Which lens leads depends on the reporting regime:
- **ISSB / IFRS S1-S2:** financial materiality (investor-focused).
- **ESRS / CSRD (EU):** double materiality, mandatory for in-scope companies. Verify current scope after the 2025-26 Omnibus simplifications.
- **GRI:** impact materiality.
- **BRSR (India):** principle-based disclosures, with a material responsible-business-conduct issues section (Section A). Double materiality is good practice.

## Method
1. **Scope and context.**
   - Map the business model and the **value chain**: key upstream inputs (commodities, suppliers, geographies), own operations (sites, workforce), and downstream (products in use, end of life, customers).
   - Note jurisdictions, export markets and customer requirements; examples include EU customers asking for product carbon data, and carbon border measures on steel, aluminium, cement and fertiliser imports into the EU.
2. **Build the topic universe (long list, 30-60 sub-topics):**
   - ISSB/SASB industry topics for the sector;
   - GRI sector standards where available, plus GRI topic standards;
   - the ESRS topical list (E1-E5, S1-S4, G1);
   - BRSR's nine principles;
   - peer reports; ESG-rating questionnaires; media, NGO and litigation scans; regulatory pipeline;
   - internal risk register; incident and grievance data.
3. **Identify IROs per topic**, located in the value chain.
   - Example: "Negative impact: water withdrawal in a water-stressed basin (own operations, Plant B)."
   - Example: "Risk: production curtailment from water rationing."
   - Example: "Opportunity: water-recycling technology lowers cost."
4. **Stakeholder engagement.**
   - Identify affected stakeholders (workers, communities, value-chain workers, consumers) and users of reports (investors, lenders, customers).
   - Engage through interviews, surveys and existing channels.
   - Document who, how and what was heard. Representatives of vulnerable groups matter more than survey volume.
5. **Score impact materiality** (see `references/deep-dive.md` for scales and `references/worked-example.md` for an extract):
   - **Actual negative impacts:** severity = scale + scope + irremediability.
   - **Potential negative impacts:** severity × likelihood. For human-rights impacts, **severity takes precedence over likelihood**, per the UN Guiding Principles.
   - **Positive impacts:** scale + scope (+ likelihood).
6. **Score financial materiality:** magnitude of financial effect (on revenue, costs, assets, capital access) × likelihood, per horizon. Short = ≤1-2 yrs, medium = to 5 yrs, long = 5+ yrs (state your definitions). Use quantitative proxies where possible, e.g. a carbon price × emissions, revenue at risk from customer requirements, or insurance cost.
7. **Set thresholds** for each lens (e.g. ≥3 on a 5-point scale). Justify them, and test sensitivity: does a small change in threshold drop an obviously important topic?
8. **Consolidate and validate:**
   - aggregate sub-topics into material topics;
   - run a sense check with management;
   - review with the board or committee;
   - document the rationale for each in or out decision (the **audit trail**).
9. **Link to action:** for each material topic, record the policy, targets, KPIs, owner, capex or opex, and disclosure frameworks (BRSR principle / ISSB / ESRS / GRI). Integrate into the enterprise risk register and strategy.
10. **Refresh:** fully every 2-3 years, and lightly every year or on significant change (an acquisition, a new market, a major incident, new regulation).

## Judgement calls
- **Value chain matters most.** For many companies the largest impacts sit upstream (raw materials, labour in the supply chain) or downstream (product use). A materiality assessment limited to own operations misses them.
- **Severity over popularity.** A topic stakeholders rank low (e.g. migrant-worker conditions at third-tier suppliers) can be highly material because of severity. Don't let survey averages decide.
- **Avoid the "everything top-right" matrix.** If 25 topics are material, prioritisation has failed. Distinguish material topics from **most-significant** ones, which get targets and board attention.
- **Financial materiality needs numbers.** Even rough ranges ("₹40-80 Cr EBITDA at risk by 2030 at ₹1,500-3,000/tCO2e") beat adjectives.
- **Climate is rarely immaterial** for industrial, financial, real-estate, agriculture and transport sectors. If you conclude it is, document why very carefully.
- **Governance (G) topics** such as anti-corruption, data protection, AI and tax transparency are often material for every sector.

## Sector hot spots (starting points, not conclusions)
- **Auto components / engineering exporters:** product carbon footprint (customer requirements), energy and Scope 2, steel and aluminium embodied emissions, supplier labour, EHS.
- **Banks and NBFCs:** financed emissions, climate risk in the loan book, financial inclusion, responsible lending, data protection, AI fairness.
- **Pharma:** access and pricing, product quality and safety, effluent / API pollution, clinical-trial ethics, AMR.
- **IT services:** talent and wellbeing, data privacy and cyber, energy in data centres, responsible AI, business ethics.
- **FMCG / agri:** packaging and plastics (EPR), agricultural sourcing (deforestation, water, smallholder livelihoods), product health and nutrition.
- **Cement / steel / chemicals:** GHG (and India's Carbon Credit Trading Scheme intensity targets for covered sectors: verify), air quality, water, safety, community relations.

## Output format

```markdown
## Double Materiality Assessment: [company], FY[..]
**Scope:** entities, value chain boundaries, time horizons (S/M/L defined)
**Method summary:** sources for long list; stakeholder engagement; scales; thresholds

### IRO register (extract)
| Topic | IRO (impact / risk / opportunity) | Value-chain location | Impact score (scale, scope, irremediability, likelihood) | Financial score (magnitude, likelihood, horizon) | Material? (I / F / both) | Rationale |
|---|---|---|---|---|---|---|

### Material topics and the most significant ones
| Material topic | Why material | Policy | Target / KPI | Owner | Disclosure mapping (BRSR / ISSB / ESRS / GRI) |
|---|---|---|---|---|---|

### Stakeholder engagement evidence
### Threshold and sensitivity notes
### Board oversight and next review
```

## Reference files (read when needed)
- `references/worked-example.md`: a complete worked example of this skill's output
- `references/deep-dive.md`: detailed criteria, checklists, scales and patterns
- `references/sources.md`: standards, laws and texts this skill draws on, with dates and what to verify

Load the worked example when the user wants to see what good looks like, the deep dive for detailed criteria, and the sources before citing any law, standard or date.

## Quality check before you reply
- [ ] The long list is built from sector standards and evidence, not brainstorming alone.
- [ ] IROs are specific and located in the value chain.
- [ ] Impact scoring uses severity components; human-rights severity is prioritised.
- [ ] Financial materiality is quantified where possible, with horizons defined.
- [ ] Thresholds are stated and sensitivity-tested; every in/out decision has a rationale.
- [ ] Stakeholder engagement is documented, including affected stakeholders.
- [ ] Material topics are linked to targets, owners and disclosure frameworks.
- [ ] Regulatory scope and dates are flagged for verification.

## House rules
- Never invent facts, figures, quotes or sources. Label estimates "(est.)" and list assumptions openly.
- If key inputs are missing, ask up to 3 short questions, or proceed with clearly stated assumptions if the user wants speed.
- Plain English; define technical terms.
- Reporting rules (ISSB adoption, CSRD/ESRS scope, BRSR, carbon-border measures) change; see `references/sources.md` and verify.
- Remind users not to paste confidential or personal data they are not permitted to share.

## Limitations and disclaimer
- **Decision support, not professional advice.** This skill provides a structured method and general information. It is not legal, financial, investment, tax, accounting, regulatory, medical or other professional advice. It does not replace qualified advisers or your organisation's own review and approval processes.
- **AI can be wrong.** Claude can produce confident but incorrect facts, numbers, citations or legal references. Check anything you will rely on, sign or publish.
- **Point-in-time content.** Frameworks, laws, thresholds and dates referenced reflect the author's research as of November 2026 and may since have changed. Confirm against current official sources.
- **Only as good as the inputs.** Claude knows only what you share in the conversation; missing or inaccurate context leads to weaker output.
- **Your data, your responsibility.** Do not share confidential, personal or price-sensitive information unless your organisation's policies and applicable law allow it.
- **No warranty, no adviser relationship.** Provided "as is" under CC BY 4.0, without warranty of any kind. Using it creates no adviser-client relationship with the author, who accepts no liability for decisions made using it.
- **Skill-specific:** Not legal, audit or assurance advice. SEBI, ISSB, CSRD/ESRS and carbon-border requirements change frequently; confirm applicability and dates with your Company Secretary, statutory auditor or assessment/assurance provider.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `brsr-readiness`: Indian disclosure readiness.
- `pestel-scan`: horizon scanning.
- `risk-appetite`: ESG metrics in appetite.
- `board-paper`: approval of material topics and targets.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
