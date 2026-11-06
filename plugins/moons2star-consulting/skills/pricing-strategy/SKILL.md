---
name: pricing-strategy
description: "Develops pricing decisions grounded in customer value, cost and competition: economic value to the customer by segment, cost floor and target margins, competitive reference points, choice of price metric that scales with value, price structure (tiers, bundles, add-ons, usage, outcome-based), price-realisation and leakage analysis (pocket-price waterfall), discount governance with approval levels, willingness-to-pay evidence, impact modelling on revenue, margin, volume and churn, rollout and communication plan for new and existing customers, legal checks, and KPIs. Use for new products, price increases, packaging redesign, margin recovery and moves to subscription or usage pricing."
---

# Pricing Strategy

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** prices and a pricing system that capture the value you create, are defensible to customers and sales teams, and are controlled in execution, so that list-price gains don't leak away in discounts.

## The senior standard
1. **Value-based, cost-informed, competition-aware.** Customer value sets the ceiling; cost sets the floor; competitors anchor perceptions. Price in between, with intent.
2. **Quantify value to the customer:** the savings, revenue or risk reduction your offer creates vs the next-best alternative, by segment.
3. **The price metric matters as much as the level.** Charge per unit of value (per user, transaction, outcome, capacity) so revenue grows with customer benefit and feels fair.
4. **Structure for segments.** Good-better-best tiers, bundles and add-ons let different segments self-select.
5. **Realisation beats list price.** Analyse the pocket-price waterfall (list → invoice → pocket) to find leakage from discounts, rebates, freight and payment terms. Governance often adds more margin than list-price changes.
6. **Evidence on willingness to pay.** Use transaction data, experiments, conjoint or price-sensitivity surveys, and win/loss. Stated intent overstates actual purchase.
7. **Plan the change.** Grandfathering, notice periods, sales enablement and value communication decide whether a price change sticks.

## Before you start: diagnose
- Products, segments, current prices and discount practices; cost structure.
- Objectives: margin, share, market entry, mix shift.
- Competitor prices and positioning.
- Data: transactions, win/loss, churn, surveys.
- Legal and regulatory constraints (price controls, fair-dealing rules, competition law).

## Method
1. **Value analysis:** for each segment, the next-best alternative and its cost; the differentiation value (+ and −); economic value to the customer.
2. **Cost floor:** variable and allocated costs; target margin; minimum acceptable price.
3. **Competitive reference:** competitor prices normalised for features and service.
4. **Price metric:** options (per seat, per transaction, per volume, per outcome, flat); test fairness, predictability, scalability and ease of measurement.
5. **Structure:** tiers (each aimed at a segment); fences (features, usage, service levels); bundles and add-ons; minimums.
6. **Realisation analysis:** the pocket-price waterfall by customer and deal; discount dispersion vs deal size; identify unjustified discounting.
7. **Discount governance:** discount bands by deal size and segment; approval levels; deal desk; give-gets (discount in exchange for volume, term or prepayment).
8. **Willingness-to-pay evidence:** existing data, a price-sensitivity survey, conjoint, or in-market tests.
9. **Impact model:** revenue, margin, volume and churn by scenario (compute with code); break-even volume loss for a price increase.
10. **Rollout:** new customers first; existing-customer grandfathering or a phased increase; value communication; sales training and incentives aligned to margin, not only volume.
11. **Legal check:** competition law (no coordination with competitors); sector price controls; consumer-protection rules on price transparency.
12. **KPIs:** price realisation, discount depth and dispersion, win rate, churn, margin.

## Judgement calls
- **Small price increases on high-margin products** often outperform volume pushes. Compute the break-even volume loss: for a price increase of p with contribution margin m, the volume can fall by p ÷ (m + p) before profit drops.
- **Discount discipline is a culture change.** Sales incentives must reward margin.
- **Outcome-based pricing** aligns incentives but needs measurable outcomes, trust and risk-sharing mechanisms.
- **Penetration pricing** only works if scale economies or network effects follow; otherwise it trains customers to expect low prices.
- **For AI products,** usage-based components protect margins as inference costs scale.

## Red flags
- Cost-plus pricing for differentiated products.
- Discounts uncorrelated with deal size or strategic value.
- Price changes announced without sales enablement.
- Willingness to pay taken from a single "how much would you pay?" question.
- No break-even analysis for price moves.

## Variants by context
- **B2B industrial:** value-in-use, contracts with index-linked escalators, rebates, service bundles.
- **SaaS:** tiers, usage metrics, annual vs monthly, expansion pricing, discounting for multi-year terms.
- **Consumer:** price ladders, pack-price architecture, promotions, channel pricing.
- **Professional services:** value-based fees, fixed fees vs time-and-materials, outcome-based components.
- **Regulated (pharma, utilities, financial services):** price caps, approvals, fairness obligations.

## Output format

```markdown
## Pricing Strategy: [product / portfolio]
**Objectives:** ...
**Anchors:** value to customer ... | cost floor ... | competitor reference ...
**Price metric:** ... because ...

| Tier | Target segment | Includes / fences | Price | Value story |
|---|---|---|---|---|

**Realisation:** pocket-price waterfall findings; leakage ₹...
**Discount governance:** band - max % - approver - give-get
**Willingness-to-pay evidence:** ...
**Impact model:** scenario - revenue - margin - volume - churn; break-even volume loss ...
**Rollout and communication:** new / existing customers; sales enablement
**Legal checks:** ...
**KPIs:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Value to the customer quantified by segment; floor and competitor anchors set.
- [ ] The price metric is justified; tiers target segments.
- [ ] Pocket-price leakage analysed; discount governance defined.
- [ ] Willingness-to-pay evidence beyond stated intent.
- [ ] Impact modelled with code, including break-even volume loss.
- [ ] Rollout, legal checks and KPIs included.

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
- **Skill-specific:** Claude may not have current market data unless you provide it or it can search the web. Treat any market figures it suggests as estimates to verify.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `customer-segmentation`: Group customers by needs and value so you can focus, price and serve them differently.
- `unit-economics`: Work out whether each customer, order or unit makes money, and which levers fix it.
- `survey-design`: Design a short, unbiased survey that produces numbers you can actually use.
- `sensitivity-analysis`: Find which assumptions really move the answer, and what has to be true for the decision to flip.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
