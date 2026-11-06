---
name: kpi-driver-tree
description: "Builds a value driver tree that decomposes a top outcome (EBITDA, ROCE, economic profit, free cash flow, revenue, cost-to-serve, NPS) mathematically down to operational levers that named people control, with current values, targets, sensitivities of the top metric to each lever, leading vs lagging indicators, owners and a cascade into targets and dashboards. Use for target setting, performance management, value-creation plans, turnarounds, transformation business cases, and designing management dashboards."
---

# KPI Driver Tree

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a single picture showing how front-line levers add up to the number the board cares about. It shows which levers move the result most, who owns each one, and which early indicators will tell you, weeks ahead, whether you'll hit the target.

## The senior standard
1. **The maths must add up.** Every split is an identity (sum or product). If the leaves don't reconstruct the top number, the tree isn't a driver tree.
2. **End at controllable levers.** Leaves are things a named person can act on this quarter: uptime, conversion, price realisation, days of inventory, first-time-right %.
3. **Sensitivity ranks attention.** Compute the impact on the top metric of a realistic improvement in each lever. Effort follows impact, not org charts.
4. **Lead and lag.** Pair lagging financial outcomes with leading operational indicators that move first.
5. **One tree, many cuts.** The same tree supports targets, budgets, dashboards and initiative sizing. Avoid parallel, inconsistent metric sets.
6. **Ownership is singular.** Each leaf has one owner, even if many contribute.

## Before you start: diagnose
- Top metric and why: ROCE for capital-intensive firms, contribution for marketplaces, cost-to-serve for service operations.
- Business model and the value chain; the units of activity (tonnes, orders, cases, beds, loans).
- Available data per node and its frequency; known pain points.
- Purpose: target setting, diagnosis of underperformance, or sizing initiatives.

## Method
1. **Top-level identity.** Examples:
   - ROCE = EBIT ÷ capital employed.
   - EBIT = revenue − costs.
   - Capital employed = fixed assets + working capital.
2. **Level-by-level decomposition:**
   - **Revenue** = volume × net price. Volume = capacity × utilisation, or customers × frequency. Net price = list price × (1 − discount %) × mix.
   - **Costs:** variable cost = volume × unit cost (materials × yield; energy = specific consumption × tariff); fixed = headcount × cost + other fixed.
   - **Working capital** = receivable days × revenue ÷ 365 + inventory days × COGS ÷ 365 − payable days × purchases ÷ 365.
3. **Stop at operational levers** with owners and data, typically 3-5 levels deep and 15-30 leaves.
4. **Populate:** current value, target, data source and frequency, owner, leading or lagging.
5. **Sensitivity:**
   - For each leaf, compute the impact on the top metric of a realistic change (e.g. +1 point uptime, −1 day DSO, +1% price realisation). Use code.
   - Rank the leaves.
   - Flag levers with high impact and high controllability.
6. **Validate:** reconcile the tree to the last actual period (the leaves must recreate the reported top number within a small tolerance); review with each owner.
7. **Cascade:** targets per leaf that add up to the top target, checked for feasibility against history and benchmarks.
8. **Instrument:** map leaves to dashboard tiles and review rhythms (daily or shift for operations, weekly for commercial, monthly for financial).

## Judgement calls
- **Ratios hide volumes.** Prefer multiplicative splits (volume × rate) over a list of ratios, so effects can be combined.
- **Watch the interactions.** Raising price may lower volume; higher utilisation may lower yield. Note the trade-offs on the tree.
- **Don't drown the tree.** If 60 leaves have owners, nobody will look. Keep the operational detail in sub-trees per function.
- **Use the tree to kill vanity metrics.** A metric that doesn't connect to the tree doesn't belong on the top dashboard.

## Red flags
- Splits that don't multiply or add up; "efficiency" as a leaf with no formula.
- Leaves without owners or data.
- No reconciliation to actuals.
- Targets set top-down per leaf with no feasibility check.
- Only lagging financial metrics.

## Variants by context
- **Manufacturing:** OEE (availability × performance × quality), yield, specific energy consumption, conversion cost per tonne, inventory days.
- **Retail / consumer:** footfall × conversion × basket; gross margin by category; shrinkage; rent and staff per square foot.
- **Banking / NBFC:** NII = average assets × NIM; credit cost; cost-to-income; fee income per customer; ROA and ROE trees.
- **Healthcare:** occupancy × ARPOB × length of stay; case mix; staff per occupied bed; payer mix.
- **SaaS:** ARR = customers × ARPA; net revenue retention; CAC payback; gross margin after hosting.
- **Shared services / GCC:** cost per transaction = (people + tech + overhead) ÷ volume; first-time-right; automation rate; SLA adherence.

## Output format

```markdown
## Driver Tree: [top metric], [business], baseline [period]

[Indented tree with formulas]
- ROCE (18.2%) = EBIT ÷ Capital employed
  - EBIT (₹...) = Revenue − Costs
    - Revenue = Volume × Net price
      - Volume = Capacity × Utilisation
  ...

| Leaf lever | Formula link | Current | Target | Owner | Lead/Lag | Data / frequency | Impact on top metric of a realistic change |
|---|---|---|---|---|---|---|---|

**Reconciliation to actuals:** ...
**Top 5 levers by impact:** ...
**Trade-offs to manage:** ...
**Dashboard and review rhythm:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Every split is an arithmetic identity; the tree reconciles to actuals.
- [ ] Leaves are controllable levers with single owners and data sources.
- [ ] Sensitivities computed with code and ranked.
- [ ] Leading indicators are identified.
- [ ] Targets add up and are checked for feasibility.
- [ ] Trade-offs between levers are noted.

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
- `kpi-dashboard`: Design a one-page dashboard leaders will actually use: right metrics, targets, layout and alerts.
- `issue-tree`: Break a big question into a logical tree of smaller questions you can actually answer.
- `cost-takeout`: Build a structured cost-reduction plan: baseline, levers, sizing, phasing and risks to service.
- `benefits-tracker`: Make sure promised benefits are defined, owned, measured and actually delivered.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
