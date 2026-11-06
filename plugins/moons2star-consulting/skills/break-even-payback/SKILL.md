---
name: break-even-payback
description: "Calculates break-even volume, revenue and time, margin of safety, operating leverage, simple and discounted payback with realistic ramp-up and working capital, and cash trough, then translates them into real-world terms (customers per day, units per shift) and the key risks to hitting them. Use for quick go or no-go checks on new sites, products, stores, clinics, plants or projects, for pricing floors, or to explain economics to non-finance leaders."
---

# Break-even and Payback

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a fast, correct view of how much must be sold to stop losing money, how long it takes to get the investment back, and how much cash the project burns before it turns, expressed in numbers an operator can picture.

## The senior standard
1. **Contribution, not revenue.** Break-even = fixed costs ÷ contribution per unit (price − variable cost per unit).
2. **Classify costs honestly.** Many costs are step-fixed: a second shift, a new supervisor at a volume threshold. Model the steps.
3. **Ramp-up dominates payback.** New sites and products rarely start at steady state. Model month by month.
4. **Working capital is cash.** Inventory and receivables tie up cash before profits arrive; include them in payback and the cash trough.
5. **Make it tangible.** Convert break-even into operating terms: patients per day, covers per night, units per shift, loans per month.
6. **Compare with evidence.** Is the required volume plausible versus existing sites, competitors or capacity?

## Before you start: diagnose
- Price per unit (net of discounts and returns), variable cost per unit, fixed costs (and their steps), investment, working-capital needs, ramp profile, capacity, operating days.
- Discount rate (for discounted payback) and the decision rule (e.g. payback < 3 years).
- Comparable benchmarks: existing sites, pilot, market data.

## Method
1. **Unit contribution:** net price − variable costs (materials, consumables, variable labour, commissions, payment fees, logistics). Contribution margin %.
2. **Fixed costs:** monthly or annual; identify the step thresholds.
3. **Break-even volume** = fixed ÷ unit contribution. **Break-even revenue** = fixed ÷ CM%. With steps, compute break-even for each capacity tier.
4. **Translate to operations:** per day, per shift, per seat or per bed; as a % of capacity (break-even utilisation).
5. **Margin of safety** = (expected − break-even) ÷ expected. **Operating leverage** = contribution ÷ operating profit at the expected volume. This shows how sensitive profit is to volume.
6. **Payback** (compute with code):
   - monthly cash flow with ramp-up;
   - working-capital build;
   - any maintenance capex;
   - simple payback (cumulative cash turns positive);
   - discounted payback;
   - the cash trough (maximum cumulative negative).
7. **Quick sensitivity:** break-even and payback if price −5%, variable cost +5%, ramp 3 months slower.
8. **Verdict:** plausibility versus benchmarks; the key risk; what would make it safer (phasing, lower fixed cost, pre-sales).

## Judgement calls
- **Fixed today, variable tomorrow.** Leases and permanent staff look fixed but are decisions. Consider flexible models to lower break-even.
- **Cannibalisation:** volume taken from your own other sites isn't incremental.
- **Seasonality:** monthly break-even may fail in low months even if the annual average passes. Check cash in the lowest month.
- **Payback ignores value after payback.** Use it as a risk screen, alongside NPV for value.

## Red flags
- Break-even computed on revenue or gross margin that excludes variable costs like commissions or logistics.
- Steady-state volumes from month 1.
- No working capital in payback for inventory-heavy businesses.
- Break-even utilisation above realistic capacity (e.g. >85% for hospitals or hotels).

## Variants by context
- **Healthcare:** per bed-day or per patient; payer mix changes the net price; doctor fee-share is variable.
- **Retail and restaurants:** per store; footfall × conversion × basket; rent as the key fixed cost; ramp 6-18 months.
- **Manufacturing:** per unit; shift-based steps; minimum economic batch sizes.
- **SaaS / digital:** per customer; low variable cost; break-even driven by fixed team cost and CAC.
- **Lending:** per loan; funding cost and credit loss are variable; fixed branch or tech cost.

## Output format

```markdown
## Break-even and Payback: [project]
**Unit contribution:** ₹... (CM ...%)  |  **Fixed costs:** ₹... /month (steps: ...)
**Break-even:** ... units/month = **... per day** (... % of capacity) | revenue ₹...
**Expected:** ... → **margin of safety ...%** | operating leverage ...x
**Payback:** simple ... months | discounted ... months | **cash trough ₹...** in month ...

| Month | Volume | Contribution | Fixed | Working capital | Net cash | Cumulative |
|---|---|---|---|---|---|---|

**Sensitivity:** ...
**Plausibility vs benchmarks:** ...
**In plain words:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Contribution includes all variable costs; fixed-cost steps modelled.
- [ ] Break-even translated into daily or shift terms and % of capacity.
- [ ] Ramp-up and working capital included in payback; cash trough shown.
- [ ] Margin of safety and operating leverage stated.
- [ ] Benchmarked for plausibility; computed with code.

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
- `sensitivity-analysis`: Find which assumptions really move the answer, and what has to be true for the decision to flip.
- `business-case`: Build a decision-ready business case: options, costs, benefits, NPV, risks and the ask.
- `unit-economics`: Work out whether each customer, order or unit makes money, and which levers fix it.
- `pricing-strategy`: Set or reset prices using value, cost and competition, with tiers and a test plan.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
