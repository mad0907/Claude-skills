---
name: financial-model-spec
description: "Specifies, and can draft, a driver-based financial model that is auditable and decision-useful: purpose and decisions served, scope and granularity, sheet architecture separating inputs, calculations and outputs, driver trees for revenue, cost, capex and working capital, linked three statements or a cash view, scenario and sensitivity design, integrity checks, formatting and naming standards, version control, and review protocol. Use before building any business-plan, project, budget, valuation or start-up model, when briefing an analyst, or to fix a model nobody trusts."
---

# Financial Model Spec

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a model design that answers the decision-makers' questions, can be reviewed by someone else in an hour, and doesn't break when assumptions change.

## The senior standard
1. **Purpose drives design.** List the 3-5 questions the model must answer (fund or not? price at what level? how much cash do we need, and when?). Every sheet must serve them.
2. **Separate inputs, calculations and outputs.** All assumptions in one place, labelled with units, source and owner. No hard-coded numbers inside formulas.
3. **Drivers, not plugs.** Revenue and cost come from operational drivers (volume × price; headcount × cost; utilisation) that managers recognise and can challenge.
4. **Consistency.** One formula per row across time; consistent time axis; consistent sign convention; no circularity unless deliberately controlled.
5. **Integrity checks are part of the model.** Balance sheet balances, cash ties, totals match, no error values. A check summary is visible on the cover.
6. **Simple beats clever.** Avoid complex nested formulas, hidden sheets and macros unless essential. Another analyst must be able to follow it.
7. **Scenarios are designed in,** not patched in later.

## Before you start: diagnose
- Decisions and audience (board, investors, lenders, internal).
- Business model and the 5-10 key drivers.
- Horizon and periodicity: monthly for cash-critical early periods, then quarterly or annual.
- Required outputs: P&L only, a cash view, full three statements, valuation (DCF), covenant tests, unit economics.
- Data availability: actuals for calibration; the owners of each assumption.
- Tools and constraints: spreadsheet standards, model-review requirements.

## Method
1. **Questions and outputs first:** sketch the output pages (KPIs, charts, scenario comparison) before any calculation.
2. **Driver trees:**
   - **Revenue:** customers or volume × price or mix × retention, by segment and channel.
   - **Costs:** variable (per unit), semi-variable (step-fixed by capacity), fixed (headcount × cost, rent, technology).
   - **Capex:** growth vs maintenance; useful lives; depreciation.
   - **Working capital:** receivable days, inventory days, payable days.
   - **Financing:** debt drawdowns and repayments, interest, equity, dividends; covenants.
   - **Tax:** the effective approach, plus deferred-tax simplifications if needed.
3. **Sheet architecture:**
   - Cover (purpose, version, checks)
   - Inputs (by theme, with scenario columns)
   - Time and flags (period index, operating flags)
   - Calculation blocks (Revenue, Opex, Headcount, Capex & Depreciation, Working Capital, Debt, Tax)
   - Statements (P&L, Balance Sheet, Cash Flow)
   - Outputs (dashboard, scenario comparison, sensitivity tables)
   - Checks
   - Log (changes, issues)
4. **Scenario design:** a selector on the inputs sheet (Base / Downside / Upside / custom), with linked driver sets rather than independent tweaks, and a data table or script for sensitivity.
5. **Calibration:** reconcile the first periods to historic actuals, or to a pilot or benchmark; explain differences.
6. **Checks:**
   - BS balance;
   - cash in the BS equals cash in the CF;
   - retained earnings roll-forward;
   - debt schedule ties;
   - no negative cash (or a flag);
   - sum of segments equals the total;
   - no errors;
   - inputs within plausible ranges.
7. **Standards:**
   - input cells visually distinct;
   - units in labels;
   - consistent signs;
   - named ranges for key inputs;
   - no merged cells in calculations;
   - one row, one formula;
   - left-to-right time;
   - no hidden rows with logic.
8. **Review protocol:** self-review checklist, peer review (formula sampling, logic trace of the top 5 outputs), and sign-off; version naming and a change log.
9. **Optionally draft the model** if tools allow. Produce the spreadsheet with this architecture and placeholder inputs clearly marked.

## Judgement calls
- **Granularity is costly.** Model detail where decisions or uncertainty sit; summarise elsewhere.
- **Monthly modelling for cash.** Start-ups, projects and turnarounds need monthly cash for at least 12-24 months.
- **Circularity** (interest on average cash, or a revolver) is sometimes needed. Isolate it with a switch, or use prior-period balances.
- **Keep the model and the story aligned.** Every key output on the deck must trace to a model cell.
- **Calibrate before forecasting.** A model that can't reproduce last year shouldn't predict the next five.

## Red flags
- Hard-coded numbers in formulas; plugs to make the balance sheet balance.
- Scenarios built by overwriting inputs.
- No checks, or checks failing but ignored.
- Revenue as a growth % on last year with no drivers.
- 40-tab models with no map or documentation.
- Outputs on slides that can't be traced.

## Variants by context
- **Start-up / venture:** cohorts, CAC and LTV, burn and runway, funding rounds and dilution.
- **Project finance / capex:** construction period, ramp-up, debt sculpting, DSCR covenants, reserve accounts.
- **Valuation (DCF):** explicit forecast plus terminal value; WACC build-up; the bridge from enterprise to equity value.
- **Budget / annual plan:** the bridge from last year's actuals; cost-centre detail; phasing by month.
- **Transformation / cost programme:** baseline vs initiatives; cost-to-achieve; run-rate vs in-year.

## Output format

```markdown
## Financial Model Spec: [model]
**Purpose / decisions:** ...  |  **Audience:** ...  |  **Horizon / periods:** ...  |  **Currency / units:** ...

**Sheet map**
| Sheet | Contents | Key outputs |
|---|---|---|

**Driver trees:** revenue ... | costs ... | capex ... | working capital ... | financing ...

**Key assumptions register**
| Driver | Unit | Base | Downside | Upside | Source | Owner |
|---|---|---|---|---|---|---|

**Scenario and sensitivity design:** ...
**Calibration plan:** ...
**Integrity checks:** ...
**Standards and review protocol:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Questions and outputs are defined before calculations.
- [ ] Inputs are separated, with units, sources and owners.
- [ ] Driver trees cover revenue, costs, capex, working capital and financing as needed.
- [ ] A scenario selector with linked driver sets.
- [ ] Integrity checks listed and visible.
- [ ] A calibration-to-actuals step.
- [ ] Standards and the review protocol stated.

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
- `business-case`: Build a decision-ready business case: options, costs, benefits, NPV, risks and the ask.
- `unit-economics`: Work out whether each customer, order or unit makes money, and which levers fix it.
- `sensitivity-analysis`: Find which assumptions really move the answer, and what has to be true for the decision to flip.
- `kpi-driver-tree`: Break a top metric into the drivers people can act on, with owners and targets.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
