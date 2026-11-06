---
name: unit-economics
description: "Calculates and diagnoses unit economics at the right unit (order, customer, subscription, seat, store, loan): full contribution waterfall including discounts, returns, payment, fulfilment and support; acquisition cost by channel including fully loaded sales and marketing; cohort-based retention and LTV on contribution, discounted where long; LTV to CAC and CAC payback; fixed-cost absorption and the path to profitability; and ranked levers with quantified impact. Use for start-ups, new products or channels, pricing, investor diligence, or answering whether each sale makes money."
---

# Unit Economics

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a clear view of whether each unit creates or destroys value, why, and which two or three levers would change the answer, backed by cohort evidence rather than averages.

## The senior standard
1. **Pick the right unit.** The unit is where economics are decided: an order for quick commerce, a customer for subscriptions, a loan for lending, a store for retail roll-outs.
2. **Contribution, not revenue.** Every variable cost a unit triggers must be included: COGS, discounts, returns and refunds, payment fees, fulfilment, packaging, last-mile, variable support, and fraud or credit losses.
3. **Cohorts, not blended averages.** Retention, frequency and margins differ by acquisition month, channel and segment. Blended numbers hide deteriorating new cohorts.
4. **Fully loaded CAC.** Include sales and marketing salaries, agency fees, tools and onboarding incentives where they scale with acquisition. Show paid and blended CAC separately.
5. **Time value and uncertainty.** Long lifetimes are discounted and capped. A 10-year LTV on 18 months of data is fiction.
6. **Unit economics ≠ company profitability.** Positive contribution must also cover fixed costs at realistic scale.

## Before you start: diagnose
- Business model and the candidate units; which decision this analysis informs (raise, price, cut a channel, expand a city).
- Data: order or transaction data, cohort retention, cost lines, channel spend.
- Time period and seasonality; promotions in the period.
- Stage: early (few cohorts, more assumptions) vs mature (robust cohorts).

## Method
1. **Define the unit** and the time window.
2. **Contribution waterfall per unit:**
   gross price → discounts and promotions → returns and refunds → net revenue → COGS → payment fees → packaging and fulfilment → last-mile → variable customer support → losses (fraud, credit) → **contribution margin (CM1/CM2 as used)**.
3. **CAC by channel:** spend (+ attributable people and tools) ÷ new customers. Note attribution method limits, and organic vs paid.
4. **Retention and frequency by cohort:** a cohort table (by month of first purchase) of active rate and orders per active customer; fit a decay curve if needed.
5. **LTV:** the sum of discounted contribution per customer over a capped horizon (e.g. 3 years) using cohort curves. Show the simple version (contribution per period ÷ churn) only as a cross-check.
6. **Ratios:** LTV:CAC; CAC payback (months of contribution to recover CAC). Context benchmarks vary by model, so state any rule of thumb as indicative.
7. **Fixed-cost absorption:** units or customers needed per month to cover fixed costs at target scale; implied break-even volume.
8. **Diagnose:** the weakest link (low net price, high return rate, costly fulfilment, poor retention, expensive acquisition); by segment and channel.
9. **Levers:** quantify the effect of realistic changes (price +5%, returns −3 pts, fulfilment −₹20, 6-month retention +5 pts, shift 20% of spend to the best channel) on contribution, LTV:CAC and payback. Rank them by impact and feasibility. Use code for all calculations.

## Judgement calls
- **Discounts are a cost of acquisition or retention.** Allocate first-order discounts to CAC if they exist to acquire. Be consistent.
- **Marketplaces and platforms:** the unit may be a transaction with two sides. Model take-rate, subsidies on both sides, and liquidity effects.
- **Beware survivor bias in mature cohorts.** Early cohorts may have been acquired cheaply in a different market.
- **Contribution can be positive while cash is negative** (inventory, receivables). Add a working-capital view for inventory-heavy models.
- **Unit economics can improve with scale only for specific reasons** (density, purchasing, fixed-cost leverage). Name the mechanism; don't assume it.

## Red flags
- LTV on revenue; CAC only on paid media.
- "LTV:CAC of 5" built on 6 months of data and a churn assumption.
- No returns, payment fees or support costs.
- Blended averages hiding a bad new channel.
- Improvement plans that rely on "scale" without a mechanism.

## Variants by context
- **Subscriptions / SaaS:** MRR, gross and net revenue retention, expansion revenue, gross margin after hosting and support, payback on gross margin.
- **E-commerce / quick commerce:** AOV, contribution per order, orders per customer, dark-store or warehouse utilisation, last-mile density.
- **Lending:** yield, cost of funds, credit losses (expected loss), servicing cost, CAC per disbursed loan, contribution per loan over its tenor.
- **Retail roll-out:** store-level contribution, payback on capex, ramp curve, cannibalisation.
- **B2B services:** contribution per client after delivery cost; sales-cycle cost; utilisation.

## Output format

```markdown
## Unit Economics: [business], unit = [unit], period [..]

### Contribution waterfall (per unit)
| Line | ₹ | % of gross |
|---|---|---|

### Acquisition
| Channel | Spend | New customers | CAC (paid) | CAC (fully loaded) |
|---|---|---|---|---|

### Retention and LTV (by cohort)
(cohort table summary; LTV horizon and discount rate)

**LTV:CAC ... | CAC payback ... months | break-even volume ...**
**Weakest link:** ...

### Levers (ranked)
| Lever | Change | Effect on contribution | LTV:CAC | Payback | Feasibility |
|---|---|---|---|---|---|

**Path to healthy unit economics:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] The unit is justified for the decision.
- [ ] The waterfall includes discounts, returns, payment, fulfilment, support and losses.
- [ ] CAC by channel, fully loaded; attribution limits noted.
- [ ] LTV from cohorts, on contribution, discounted and capped.
- [ ] Fixed-cost absorption and break-even volume shown.
- [ ] Levers quantified with code and ranked.

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
- `pricing-strategy`: Set or reset prices using value, cost and competition, with tiers and a test plan.
- `financial-model-spec`: Design a clean, auditable financial model: structure, drivers, sheets and checks, ready to build.
- `kpi-driver-tree`: Break a top metric into the drivers people can act on, with owners and targets.
- `customer-segmentation`: Group customers by needs and value so you can focus, price and serve them differently.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
