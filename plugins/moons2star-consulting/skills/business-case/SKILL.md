---
name: business-case
description: "Builds an approval-grade business case for any investment, programme or change: problem and strategic fit, genuine options including do-nothing as a proper baseline, incremental cash flows, one-off and recurring costs including internal time and change, benefits by type with owners and ramps, NPV, IRR, payback and break-even at the company hurdle rate, sensitivity and scenarios, risks, non-financial benefits, funding phasing, stage gates, and how benefits will be tracked. Use for investment committees, capex, transformation funding, technology programmes and budget requests."
---

# Business Case

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a business case that a CFO can audit and a board can approve. The baseline is honest, only incremental cash counts, benefits are owned, downside risk is quantified, and money is released against evidence.

## The senior standard
1. **The baseline is the most important number.** Compare against a realistic "do nothing" (or "do minimum"), which often includes cost growth, lost revenue or rising risk. Not against zero.
2. **Only incremental, cash-based effects count in NPV.** Sunk costs are excluded; allocated overheads that don't change are excluded; opportunity costs (using an asset you could sell or rent) are included.
3. **Benefits have owners and ramps.** No benefit without a named owner who accepts it in their budget, and a realistic phasing (rarely 100% in year 1).
4. **Optimism bias is the norm.** Large projects routinely overrun costs and under-deliver benefits. Use contingency and reference-class evidence where available, and be explicit about the uplift you applied.
5. **Show the answer's fragility.** Present the break-even values of the key drivers and a downside case; decision-makers trust honest uncertainty more than precision.
6. **Stage the commitment.** Release funds against gates with kill criteria, especially for uncertain or innovative initiatives.

## Before you start: diagnose
- Decision-maker, approval route and timing; the company's hurdle rate or WACC, evaluation horizon and template.
- What problem or opportunity, why now, and the strategic objective it serves.
- What has already been spent or decided (sunk; excluded).
- Capex vs opex treatment, tax and depreciation conventions, inflation and FX assumptions.
- Data available for costs, volumes, prices and benefits; the sources and confidence of each.

## Method
1. **Problem and fit:** a 3-5 sentence case for change, linked to strategy and measured pain (cost, risk, lost revenue).
2. **Options:** do-nothing / do-minimum (as the baseline), the proposed option, and at least one credible alternative (different scope, phasing, or delivery model). Screen out non-viable options with reasons.
3. **Baseline projection:** what happens to costs, revenue and risk without the investment, e.g. rising maintenance, a hardware refresh, regulatory penalties, or competitive loss.
4. **Costs (incremental):**
   - **One-off:** capex, implementation, data migration, testing, change and training, internal staff time (backfill or opportunity cost), dual-running, decommissioning, contingency.
   - **Recurring:** licences, run and support, maintenance, staff, hosting; with escalation.
5. **Benefits (incremental), each with a type, formula, owner and ramp:**
   - **Cash-releasing:** budget reductions, revenue, avoided capex.
   - **Non-cash-releasing:** productivity absorbed into existing budgets.
   - **Risk reduction:** expected loss avoided (probability × impact).
   - **Non-financial:** customer, employee, ESG, compliance.
   Include only cash-releasing benefits (and risk reduction, if quantified robustly) in the headline NPV; show the others separately.
6. **Financials** (compute with code or a spreadsheet):
   - Annual incremental cash flows (option minus baseline), tax effects if material, and terminal or residual value if justified.
   - NPV at the hurdle rate; IRR; simple and discounted payback; break-even.
   - Show the cash-flow table.
7. **Sensitivity and scenarios:**
   - One-at-a-time on the key drivers (benefit size, adoption or ramp, cost overrun, delay).
   - Break-even values.
   - Downside and upside scenarios with linked assumptions.
8. **Risks:** delivery, adoption, technology, vendor, regulatory; with mitigations, and how the risks are reflected in contingency and phasing.
9. **Funding and stage gates:** tranches, the criteria to release each, and kill criteria.
10. **Benefits management:** benefits register (baseline, target, measure, owner, timing, how banked), reporting and post-implementation review date.
11. **The ask:** amount, phasing, decision required and date, conditions.

## Judgement calls
- **Do-minimum is often the real competitor.** A cheaper, smaller fix may deliver 70% of the value at 30% of the cost. Show it, even if you recommend more.
- **Be careful with "strategic" benefits.** They are real but unquantified. Name them, don't inflate hard numbers to compensate.
- **Productivity ≠ cash.** Count hours released as cash only if budgets or hiring plans actually change.
- **Discount rate debates hide weak cases.** If the case only works at a lower rate than policy, say so.
- **Terminal value can dominate.** If more than ~40% of NPV comes from beyond the explicit horizon, flag it and test it.
- **Don't over-model.** A precise model of uncertain assumptions is false comfort. Spend effort on the 3-4 drivers that matter.

## Red flags
- No baseline, or a baseline of zero.
- Sunk costs included; allocated overheads counted as savings.
- 100% benefits from year 1; no ramp; no owners.
- No contingency on a large or novel project.
- Sensitivity only on drivers that don't matter.
- The full budget requested at once for an uncertain initiative.
- NPV driven by terminal value or by soft benefits.

## Variants by context
- **Capex / plant:** capacity, utilisation, maintenance capex, working capital, depreciation and tax shields, salvage value.
- **Technology / ERP / platform:** dual-running, data migration, decommissioning savings (often late or partial), the internal resource drain.
- **Transformation / cost programmes:** cost-to-achieve vs run-rate savings; the realisation curve; double-counting across initiatives.
- **Public sector / not-for-profit:** social value and cost-benefit approaches; the government discount rate; distributional effects.
- **Regulatory or compliance spend:** compare against the cost of non-compliance (penalties × probability, licence risk); NPV may be negative but required. Frame it as the least-cost compliant option.

## Output format

```markdown
## Business Case: [proposal]
**Recommendation and ask:** Approve ... over ... in [n] tranches. NPV ... @ ...%; IRR ...; payback ...; key break-even: ...

### 1. Problem and strategic fit
### 2. Options (baseline / do-minimum / proposed / alternative)
| Option | Description | NPV | Key pros / cons | Status |
### 3. Incremental cash flows (proposed vs baseline)
| ₹/$ | Y0 | Y1 | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|---|---|
| One-off costs | | | | | | |
| Recurring costs | | | | | | |
| Cash-releasing benefits | | | | | | |
| Net incremental cash flow | | | | | | |
### 4. Returns and sensitivity
| Scenario / driver change | NPV | Payback |
### 5. Benefits register
| Benefit | Type | Formula | Baseline | Target | Owner | Timing | How banked |
### 6. Non-financial benefits
### 7. Risks and mitigations
### 8. Funding tranches, stage gates and kill criteria
### 9. Post-implementation review
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] A realistic baseline and a do-minimum option are included.
- [ ] Only incremental cash is in NPV; sunk costs and unchanged overheads are excluded.
- [ ] Every benefit has a type, formula, owner, ramp and banking method.
- [ ] Contingency and optimism bias are addressed explicitly.
- [ ] Calculations done with code or a spreadsheet; the table is shown.
- [ ] Break-even and downside are presented.
- [ ] Funding is staged with kill criteria; a review date is set.

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
- `financial-model-spec`: Design a clean, auditable financial model: structure, drivers, sheets and checks, ready to build.
- `sensitivity-analysis`: Find which assumptions really move the answer, and what has to be true for the decision to flip.
- `benefits-tracker`: Make sure promised benefits are defined, owned, measured and actually delivered.
- `playbook-investment-case`: From idea to approval-ready investment case: sizing, economics, model, sensitivity, risks and the ask.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
