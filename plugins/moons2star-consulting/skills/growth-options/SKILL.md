---
name: growth-options
description: "Generates and evaluates growth options systematically: quantified growth gap (target minus momentum), options across the product-market growth matrix (penetration, market development, product development, diversification), adjacency distance, horizons (core, adjacent, transformational), and routes (organic, partnership, acquisition), each sized for revenue, margin, investment, time and risk, then assembles a balanced portfolio that closes the gap with explicit bets and signposts. Use for growth strategy, annual planning, investor narratives or when a revenue target has no credible plan."
---

# Growth Options

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a growth plan that adds up. It shows how big the gap is, which options fill it, how much each contributes and when, how risky the portfolio is, and which bets need watching.

## The senior standard
1. **Start from the gap.** Target minus momentum (what the current business delivers without new moves, including decline) equals the gap. Many plans overstate momentum.
2. **Adjacency distance matters.** Success rates fall as moves get further from the core (new customers *and* new products *and* new capabilities). Score the distance honestly.
3. **Size every option:** revenue and margin by year, investment, time to impact, probability of success. Risk-weight before adding up.
4. **Balance horizons:**
   - **H1:** defend and extend the core, 0-2 years.
   - **H2:** adjacencies, 2-4 years.
   - **H3:** new businesses or options, 4+ years.
   A plan that is all H3 is a hope; one that is all H1 is a decline.
5. **Route choice is strategic.** Organic, partnership or acquisition change speed, cost, control and risk.
6. **Capacity is finite.** Leadership attention, capital and talent cap how many options can run at once.

## Before you start: diagnose
- Growth target and horizon; why this target (investor expectations, scale economics)?
- Current business: segments, products, geographies, share, growth and margins; momentum forecast.
- Strategic assets and capabilities (from `vrio-analysis`) and constraints (capital, risk appetite, regulation).
- Market data for adjacent segments and geographies.

## Method
1. **Momentum case:** project the current business without new initiatives (market growth, share trends, price, churn, product life cycles). Compute the **gap** to target.
2. **Generate options:**
   - **Penetration** (existing products, existing markets): share gain, pricing, cross-sell, retention, channel expansion.
   - **Market development** (existing products, new markets): new geographies, segments, channels.
   - **Product development** (new products, existing markets): new offerings, services, solutions, digital and AI-enabled products.
   - **Diversification** (new, new): related or unrelated moves; usually via partnership or acquisition.
   - Plus **business-model moves:** subscription, platform, services wrapping products.
3. **Adjacency distance score** (0-3): count of what's new among customer, product or technology, channel, capabilities and geography.
4. **Size each option:**
   - market size and attainable share;
   - revenue ramp;
   - margin;
   - investment (capex, opex, M&A);
   - time to impact;
   - probability of success (lower for distant moves);
   - the risk-weighted contribution.
   Use code for the roll-up.
5. **Route analysis** for the major options: organic vs partner vs acquire (speed, cost, control, integration risk).
6. **Portfolio construction:** select options that close the risk-weighted gap with buffer; check balance across horizons, risk and capital; check management capacity.
7. **Key bets and signposts:** for the 2-3 biggest bets, define the leading indicators and decision points (scale up, pivot, stop).

## Judgement calls
- **Core first.** Underexploited core growth (pricing, retention, share in key segments) is usually the highest-return, lowest-risk option.
- **Adjacencies should share a strong advantage** (customers, capabilities, channels, data) with the core; otherwise they are diversification in disguise.
- **Acquisitions buy growth but rarely buy value** unless synergies are real and the integration is planned. Weight probability accordingly.
- **Option value:** small H3 bets can be worthwhile as learning options. Fund them as options, not as committed revenue.
- **Don't double count.** Cross-sell and new-product revenue often overlap.

## Red flags
- No momentum case; the gap assumed equal to the target.
- Options as a wish list without sizing.
- Probability of success ignored; distant moves sized like the core.
- A portfolio that requires five simultaneous transformations.
- No signposts or stop rules.

## Variants by context
- **Industrial / B2B:** product-to-solutions shift, services and aftermarket, new end-markets, exports.
- **Consumer:** premiumisation, new channels (quick commerce, direct-to-consumer), adjacent categories, geography.
- **Financial services:** new segments (MSME, affluent), cross-sell, embedded finance partnerships, new geographies.
- **Tech / SaaS:** expansion revenue, new modules, verticalisation, international, platform and ecosystem.
- **Professional services / GCC:** new service lines, AI-enabled offerings, captive-to-hub expansion, new business units served.

## Output format

```markdown
## Growth Options: [company], target [..] by [year]
**Momentum case:** ... → **Gap:** ... (risk-weighted plan must exceed it by ...%)

| Option | Matrix quadrant | Horizon | Adjacency distance (0-3) | Route | Revenue by Y3 / Y5 | Margin | Investment | Time to impact | P(success) | Risk-weighted contribution |
|---|---|---|---|---|---|---|---|---|---|---|

**Recommended portfolio:** closes ...% of the gap (risk-weighted); horizon mix H1/H2/H3 = ...
**Capacity check:** leaders, capital, talent
**Key bets and signposts:** bet - leading indicator - decision point
**Options parked and why:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Momentum case and gap quantified.
- [ ] Options span all four quadrants plus business-model moves.
- [ ] Each option sized with probability; roll-up computed with code.
- [ ] Adjacency distance and route considered.
- [ ] Portfolio balanced across horizons and checked for capacity.
- [ ] Signposts and stop rules for the key bets.

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
- **Skill-specific:** Strategic recommendations reflect only the information provided. Test them with people who know your market, organisation and constraints.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `strategic-options`: Compare 2-5 real options against agreed criteria, with trade-offs made explicit, and recommend one.
- `portfolio-matrix`: Plot business units or products by attractiveness and strength, and decide invest, hold, fix or exit.
- `market-sizing`: Size a market top-down and bottom-up, reconcile the two, and show every assumption.
- `build-buy-partner`: Decide whether to build a capability, acquire it, or partner, with a clear rationale.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
