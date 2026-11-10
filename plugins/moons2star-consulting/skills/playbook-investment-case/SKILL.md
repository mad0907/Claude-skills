---
name: playbook-investment-case
description: "Builds an approval-ready investment case in guided stages: frames the investment decision and the base case of not investing, sizes the opportunity and the problem being solved, works out unit economics and value drivers, specifies the financial model, computes NPV, IRR, payback and funding needs on incremental cash flows, runs sensitivity, scenarios and break-even with switching values, assesses risks and staged options, stress-tests with red-team and pre-mortem, and writes the decision memo or board paper with a clear ask, conditions and benefits tracking. Use for capex, new products, technology programmes, acquisitions, expansions, or any request for significant funding."
---

# Playbook: Investment Case

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** an investment case a CFO and board can trust: the right comparison, honest numbers, the drivers that make or break it, the risks and how they're managed, and an ask that's clear about what is being approved.

## The senior standard
1. **Compare against the real alternative.** Value is incremental to the "do nothing" (or the minimum viable) case, which is rarely flat.
2. **Cash, not accounting.** Incremental cash flows, including working capital, tax, terminal or residual value and decommissioning.
3. **Drivers before totals.** Unit economics and key drivers explain the value; totals follow.
4. **Uncertainty is quantified:** sensitivity, scenarios, break-even and switching values, and the base rate for similar projects.
5. **Stage where possible.** Gates and options reduce risk and the capital at risk.
6. **The ask is explicit:** the amount, the phase, the conditions, the KPIs, the review dates.
7. **Benefits are owned and tracked** after approval.

## Before you start: diagnose
- The proposal and the problem or opportunity it addresses; the decision-maker; the approval threshold.
- The hurdle rate or cost of capital; the evaluation horizon; tax and accounting context.
- Data available: costs, quotes, volumes, prices, comparable projects.
- Constraints: capital budget, leverage limits, strategic fit.

## Method (stages and skills)
| Stage | Purpose | Skills | Output |
|---|---|---|---|
| 1. Frame | Decision, options, base case | `problem-statement`, `strategic-options` | Decision and option set, incl. do-nothing |
| 2. Size | The prize or the problem | `market-sizing`, `customer-segmentation` (if revenue), `cost-takeout` (if savings) | Volume and value range |
| 3. Economics | Drivers | `unit-economics`, `kpi-driver-tree`, `pricing-strategy` (if relevant) | Unit and driver model |
| 4. Model | Financial structure | `financial-model-spec` | Model specification and assumptions log |
| 5. Value | NPV, IRR, payback, funding | `business-case`, `break-even-payback` | Incremental cash flows and metrics |
| 6. Uncertainty | Sensitivity and scenarios | `sensitivity-analysis`, `scenario-planning` | Tornado, switching values, scenarios |
| 7. Risk and challenge | Risks; stress test | `risk-assessment`, `red-team-review`, `pre-mortem`, `integrity-check` | Risk register; fixes; staging |
| 8. The ask | Communicate | `decision-memo` or `playbook-board-pack`, `executive-summary` | Decision memo or board paper |
| 9. After approval | Track | `benefits-tracker`, `implementation-roadmap` | Benefits plan and KPIs |

## Judgement calls
- **Optimism bias:** compare cost, schedule and benefit assumptions with base rates for similar projects; apply contingency.
- **Strategic value beyond NPV** (option value, capability) is described explicitly and separately, not hidden in inflated cash flows.
- **Sunk costs** are excluded; past spending is not a reason to continue.
- **Financing vs investment decisions:** evaluate the project at the cost of capital first; financing structure second.
- **Small cases:** a light version (stages 1, 3, 5, 6, 8) is enough below materiality thresholds.

## Red flags
- No do-nothing comparison.
- Profit instead of cash; working capital ignored.
- A hockey-stick ramp with no driver logic.
- A single-point estimate; no break-even.
- Risks listed without mitigation or staging.
- An ask for the whole amount with no gates.
- No benefit owner.

## Variants by context
- **Capex / capacity:** utilisation ramp, price cycles, maintenance capex, technology risk.
- **Technology / AI programme:** adoption curves, change costs, run costs, vendor risk (see `ai-business-case`).
- **New product:** cannibalisation, marketing spend, payback per cohort.
- **Acquisition:** standalone value plus synergies minus integration costs; price discipline; downside.
- **Public sector:** social cost-benefit; affordability; value for money.

## Output format

```markdown
## Investment Case: [proposal], ask ₹__ (phase __)
**Recommendation:** ... **vs do-nothing:** ...

| Metric | Base | Downside | Upside |
|---|---|---|---|
| NPV @ __% | | | |
| IRR | | | |
| Payback | | | |

**Value drivers and unit economics:** ...
**Sensitivity:** top drivers; switching values; break-even
**Risks and mitigations; staging and gates:** ...
**Strategic value (non-financial):** ...
**The ask:** amount, phase, conditions, KPIs, review dates
**Benefits owner and tracking:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Incremental cash flows vs a realistic do-nothing case.
- [ ] Driver-based economics; assumptions logged and sourced.
- [ ] NPV, IRR and payback checked by calculation; scenarios and switching values.
- [ ] Risks, base rates, staging and red-team fixes.
- [ ] An explicit ask with conditions; a benefits owner and KPIs.

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
- **Skill-specific:** Playbooks chain several skills. Review each stage's output before relying on the next, since errors compound.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `business-case`: Build a decision-ready business case: options, costs, benefits, NPV, risks and the ask.
- `sensitivity-analysis`: Find which assumptions really move the answer, and what has to be true for the decision to flip.
- `decision-memo`: Write a crisp memo that frames a decision, the options, the recommendation and what is being asked.
- `unit-economics`: Work out whether each customer, order or unit makes money, and which levers fix it.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
