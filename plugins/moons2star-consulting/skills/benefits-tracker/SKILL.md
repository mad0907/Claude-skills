---
name: benefits-tracker
description: "Sets up benefits realisation for a programme or investment: a benefits register with each benefit defined separately (cash-releasing, non-cash, revenue, working capital, risk, non-financial), baseline with date and source, target and timing profile, measure and formula, business owner (not the project), dependencies and enabling changes, how cash benefits are banked in budgets, leading indicators, double-count checks, a tracking template, variance commentary, review rhythm and post-implementation review. Use after a business case is approved, for transformation and technology programmes, and for post-investment reviews."
---

# Benefits Tracker

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** confidence that promised benefits will actually show up in the numbers, because each one is defined, owned by the business, measured against a fixed baseline, banked in budgets, and tracked with early indicators.

## The senior standard
1. **Benefits are owned by the business,** not the programme. The person whose budget or KPI changes owns the benefit.
2. **Baseline first.** Record each baseline with its date, source and method before implementation starts. Benefits measured against moving baselines are fiction.
3. **One benefit, one line.** Don't bundle; each has its own measure, owner and timing.
4. **Bank cash benefits.** Reduce budgets, adjust hiring plans or lift revenue targets when benefits are committed; otherwise savings get absorbed.
5. **Leading indicators.** Adoption, process metrics and usage predict benefits months before financials do.
6. **Avoid double counting** across initiatives and programmes; reconcile with Finance.
7. **Track beyond go-live.** Most benefits arrive after the project closes. Assign continued ownership and a post-implementation review.

## Before you start: diagnose
- The approved business case and its benefits.
- Current baselines (or how to measure them now).
- Owners' budgets and KPIs; other initiatives claiming similar benefits.
- Finance's rules on what counts as banked.

## Method
1. **Benefits map:** link outcomes → benefits → enabling changes (process, technology, people) → project outputs. Identify dependencies.
2. **Register each benefit:**
   - description;
   - type: cash-releasing, non-cash efficiency, revenue, working capital, risk reduction, quality or customer, ESG;
   - measure and formula;
   - data source and frequency;
   - baseline value, date and method;
   - target and timing profile (by quarter);
   - owner;
   - dependencies;
   - how banked;
   - confidence (H/M/L).
3. **Dis-benefits:** record negative effects too (e.g. temporary productivity dip, higher licence cost).
4. **Leading indicators:** adoption, usage, throughput, error rate; with targets.
5. **Double-count check:** map benefits across initiatives; agree attribution rules with Finance.
6. **Tracking template:** plan vs actual by period, with variance commentary and recovery actions.
7. **Governance:** monthly owner review; quarterly SteerCo or board reporting; escalation for benefits at risk; benefits sign-off by Finance.
8. **Post-implementation review:** date, scope (benefits, lessons, sustained adoption), reviewer independence.

## Judgement calls
- **Capacity benefits need a plan.** "Hours saved" become cash only if roles are not backfilled, hiring is avoided, or capacity is redeployed to measurable value. State which.
- **Attribution is messy.** When several initiatives affect one KPI, agree attribution upfront (e.g. a control group or rules) rather than arguing later.
- **Benefits can be re-planned, not silently dropped.** Re-baselining needs approval and a reason.
- **Celebrate real realisation.** Credible benefit reporting builds trust for future investment.

## Red flags
- A project manager listed as benefit owner.
- No baseline, or a baseline taken after changes started.
- Bundled benefits ("efficiency and quality").
- Savings counted but budgets unchanged.
- Tracking stops at go-live.

## Variants by context
- **Cost programmes:** link to `cost-takeout` stage gates (L0-L4); Finance validation monthly.
- **Technology:** adoption leading indicators; decommissioning benefits.
- **Revenue initiatives:** control groups or holdouts for attribution; margin, not just revenue.
- **AI programmes:** adoption × accuracy × redeployment (see `ai-business-case`); monitor rework.
- **Public sector:** social value, citizen outcomes, and value-for-money reviews.

## Output format

```markdown
## Benefits Register and Tracker: [programme]

| # | Benefit | Type | Measure / formula | Baseline (value, date, source) | Target and timing | Owner | Dependencies | How banked | Confidence |
|---|---|---|---|---|---|---|---|---|---|

**Dis-benefits:** ...
**Leading indicators:** indicator - target - current
**Double-count / attribution rules:** ...

### Tracking (by quarter)
| Benefit | Plan Q1 | Actual Q1 | Plan Q2 | Actual Q2 | Cumulative vs plan | Variance commentary / recovery |
|---|---|---|---|---|---|---|

**Governance and review rhythm:** ...
**Post-implementation review:** date, scope, reviewer
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Each benefit is separate, with a type, formula, owner (business) and confidence.
- [ ] Baselines are dated and sourced before the change.
- [ ] Banking method for cash benefits; dis-benefits recorded.
- [ ] Leading indicators defined; double counting checked with Finance.
- [ ] A tracking template with variance commentary; post-implementation review scheduled.

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
- **Skill-specific:** Plans and estimates are starting points. Validate effort, cost and people impacts with the teams who will deliver them, and follow your HR and legal processes for people changes.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `business-case`: Build a decision-ready business case: options, costs, benefits, NPV, risks and the ask.
- `kpi-driver-tree`: Break a top metric into the drivers people can act on, with owners and targets.
- `steerco-update`: Write a crisp steering committee update: status, decisions needed, risks, and next steps.
- `cost-takeout`: Build a structured cost-reduction plan: baseline, levers, sizing, phasing and risks to service.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
