---
name: ai-business-case
description: "Builds an investment-grade business case for an AI or agentic AI initiative: measured baseline, explicit benefit mechanisms (capacity released and redeployed, cash, loss avoided, revenue), adoption and accuracy ramps, full AI cost stack (data, build, inference and licence costs that scale with usage, evaluation, MLOps, monitoring, human review, governance, change), NPV, IRR and payback, sensitivities on adoption, accuracy and unit cost, stage gates and kill criteria, and benefits ownership. Use for AI funding approvals, pilot-to-scale decisions, or to challenge an over-optimistic AI proposal."
---

# AI Business Case

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a case that survives a CFO and an investment committee. Benefits are traceable to a baseline and owned in budgets. AI-specific costs that grow with usage are visible. The downside is quantified, and funding is released in stages against evidence.

## The senior standard
1. **Baseline first.** Measure the current process (volume, time per item, cost per item, error or rework rate, cycle time) before claiming improvement. If there is no baseline, the first deliverable is one.
2. **Benefit mechanisms, not percentages.** "30% productivity" means nothing until it becomes hours × adoption × what happens to those hours (released, redeployed to valued work, or absorbed).
3. **Adoption and accuracy are ramps.** Model them by quarter. Real-world adoption rarely exceeds 60-80% in year one, and accuracy in production is usually below pilot accuracy.
4. **The AI cost stack is wider than licences.** Include data preparation, integration, evaluation datasets, red-teaming, MLOps and monitoring, human review time, governance, and inference costs that scale with usage and context size.
5. **Rework is a cost.** AI errors that humans must catch and fix reduce net benefit. Model it.
6. **Stage the money.** Fund discovery, then pilot, then scale, each with kill criteria.
7. **Ownership.** Each benefit has a business owner who accepts it in their budget.

## Before you start: diagnose
- The use case, its users, and the process step it changes. Is it assistive (human decides), or does the AI or agent act?
- Pilot data available? Measured how, against what baseline, on what sample?
- Company hurdle rate or WACC, evaluation horizon (3-5 years typical for AI given model churn), and the capex vs opex treatment the CFO expects.
- Vendor vs build; pricing model (per seat, per token or usage, per transaction).
- Who is the benefits owner, and what will happen to released capacity (hiring avoided, attrition not backfilled, redeployment to revenue work)?

## Method
1. **Baseline table:** volume per year, time per item, fully loaded cost per hour, error/rework rate, cycle time, cost per item, and quality or customer metrics. Note the source and period.
2. **Benefit mechanisms** (one row each). Mark **hard** (cash, budget reduction) vs **soft** (capacity, quality):
   - **Capacity:** volume × minutes saved × adoption % × share of tasks where AI applies ÷ 60 = hours. Value = hours × cost/hour **only for the portion released or redeployed to valued work** (state the plan).
   - **Cycle-time and cash:** e.g. faster billing or collection → DSO days × daily revenue = one-off cash release (plus the financing benefit).
   - **Loss avoided:** e.g. fraud, leakage, penalties × detection uplift × realisation rate.
   - **Revenue:** conversion, retention or upsell uplift × base, with an attribution method (A/B test or control group).
   - **Quality and risk:** error reduction, compliance improvement; quantify if possible, otherwise list as non-financial.
3. **Ramps by quarter:** adoption (e.g. 20% → 45% → 65% → 75%) and production accuracy. Net benefit = gross benefit × adoption − rework cost.
4. **Cost stack:**
   - **One-off:** discovery, data preparation and labelling, integration, security review, evaluation sets, change management and training, contingency.
   - **Run:** licences or seats; usage-based inference (requests per user per day × tokens per request × price, rising with adoption); hosting and vector or retrieval infrastructure; MLOps and monitoring; human review effort; model re-validation; support; governance overhead.
   - **Exit or switching:** a provision if the model provider changes.
5. **Financials:** cash-flow table by year; NPV at the hurdle rate; IRR; payback; break-even adoption. Compute with code.
6. **Sensitivities:** adoption −30%; accuracy −10 points (higher rework); unit inference price ±50%; 6-month delay. Report NPV for each and the break-even value of the top driver.
7. **Stage gates:**
   - **Gate 0 (discovery):** baseline measured; data access confirmed.
   - **Gate 1 (pilot):** defined metrics hit on a representative sample.
   - **Gate 2 (scale):** adoption and quality thresholds sustained for N weeks; unit costs within the range.
   - Kill criteria at each gate.
8. **Risks and controls:** accuracy and hallucination, data leakage, bias, vendor lock-in, regulatory, and change resistance. Reference the AI risk tier.
9. **Benefits register:** owner, metric, baseline, target, timing, and how it is banked (budget line reduced, hiring plan changed).

## Judgement calls
- **Don't promise headcount reductions you can't deliver.** Most organisations realise AI value via avoided hiring, attrition and redeployment. Say which, and get HR's view.
- **Watch the "long tail" of cases.** AI handles the easy 70% well. The remaining 30% may need more expert time than before. Model it.
- **Inference costs can surprise.** Long contexts, agents that loop, and retrieval of large documents multiply token usage. Measure from the pilot and build in a price-change buffer.
- **Prefer narrower scope with measured value** over enterprise-wide claims. A case that is 80% likely to deliver ₹8 Cr beats one that is 20% likely to deliver ₹40 Cr.
- **Strategic value is real, but name it** (capability building, data assets, talent attraction). Don't hide it inside inflated hard benefits.

## Red flags
- No baseline; the benefit is a vendor's percentage.
- 100% adoption from month one.
- Costs limited to licences; no evaluation, monitoring or change costs.
- Benefits owned by the programme, not by the business.
- One-scenario financials; no break-even.
- Full funding requested upfront for an unproven use case.

## Variants by context
- **Agentic AI:** include orchestration, tool integration, approval workflow, action logging and rollback costs. Benefits come from end-to-end cycle time, not keystrokes. Phase autonomy (recommend → act with approval → autonomous for low-risk steps).
- **Customer-facing GenAI:** include content safety, escalation staffing, complaint-handling and brand-risk controls. Measure CSAT and containment honestly (containment with poor CSAT is not a benefit).
- **GCC delivery:** separate cost arbitrage already captured from the incremental AI benefit; avoid double counting.
- **Regulated:** include validation, explainability and audit costs; allow longer time to scale.

## Output format

```markdown
## AI Business Case: [use case]
**Ask:** ₹/$ ... released in [n] stages; this approval: Gate [x] for ...
**Bottom line:** NPV ... @ ...%; IRR ...; payback ...; break-even adoption ...%

### Baseline
| Metric | Value | Source / period |
### Benefit mechanisms
| Benefit | Hard/soft | Formula | Year-3 value | Owner | How banked |
### Ramps (by quarter): adoption, accuracy, rework
### Costs
| Item | One-off | Run (Y1/Y2/Y3) | Driver |
### Cash flows and returns
| | Y0 | Y1 | Y2 | Y3 | Y4 |
### Sensitivities
| Scenario | NPV |
### Stage gates and kill criteria
### Risks and controls (AI tier: ...)
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Baseline measured and sourced.
- [ ] Each benefit has a formula, a hard/soft label, an owner and a banking method.
- [ ] Adoption, accuracy and rework are ramped, not assumed perfect.
- [ ] The cost stack includes usage-based inference, evaluation, monitoring, human review and change.
- [ ] NPV, IRR, payback and break-even computed with code; sensitivities shown.
- [ ] Stage gates with kill criteria; funding is staged.

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
- **Skill-specific:** Not legal advice on AI or data-protection law. This skill does not replace independent model validation, security testing (including red-teaming), or a formal data protection impact assessment.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `business-case`: Build a decision-ready business case: options, costs, benefits, NPV, risks and the ask.
- `ai-pilot-design`: Design an AI pilot that proves value with clear success criteria, guardrails and a scale decision.
- `sensitivity-analysis`: Find which assumptions really move the answer, and what has to be true for the decision to flip.
- `benefits-tracker`: Make sure promised benefits are defined, owned, measured and actually delivered.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
