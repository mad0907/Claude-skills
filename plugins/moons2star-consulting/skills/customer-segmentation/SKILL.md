---
name: customer-segmentation
description: "Builds an actionable customer segmentation: decision-led choice of segmentation basis (needs and behaviours first, then value, then observable descriptors), data or hypothesis-based segment formation, transparent assignment rules, segment profiles with size, value, growth, cost-to-serve, needs and buying behaviour, attractiveness and ability-to-win scoring, priority choices, and what changes by segment in offer, price, channel and service model, plus validation and tracking. Use for go-to-market, pricing, product focus, sales coverage, marketing and service-model design."
---

# Customer Segmentation

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a segmentation the business can actually use: segments that differ in what they need and what they're worth, can be identified by sales and systems, and come with clear choices about where to focus and how to serve each.

## The senior standard
1. **Decision first.** Segments exist to drive different actions (offers, pricing, channels, service levels). If two segments would be treated the same, merge them.
2. **Needs and behaviours drive; descriptors identify.** Segment on why and how customers buy, then find observable traits (size, industry, geography, transaction patterns) to assign customers in practice.
3. **Value and cost-to-serve.** Profitability by segment, not just revenue, determines priority.
4. **Actionable rules.** Simple, explainable assignment rules beat black-box clusters that sales can't apply.
5. **Few segments.** 4-7 is usually right. Too many dilute focus.
6. **Validate and track.** Test segments with real behaviour; monitor migration between segments over time.

## Before you start: diagnose
- The decision: focus, pricing, channel design, product roadmap, service model.
- Data available: transactions, product holdings, revenue and margin, service interactions, survey and interview data.
- Constraints: channel capacity, product range, regulation (e.g. fair treatment).

## Method
1. **Hypothesise segmentation bases** from interviews and experience: needs (outcomes sought), behaviours (purchase frequency, channel use, price sensitivity), value (revenue, margin, potential), and firmographics or demographics.
2. **Analyse data:** profile customers on the candidate bases. Use simple rules or clustering where data allows; check stability.
3. **Form 4-7 segments.** Test each: sizeable, reachable or identifiable, different in needs or economics, stable, actionable.
4. **Profile each:** name; size (count, revenue, margin); growth; needs and pains; buying process and decision-makers; channel preferences; price sensitivity; cost-to-serve; share of wallet and our position.
5. **Assignment rules:** a decision tree or scoring rules using available data; coverage test (what % of customers are assigned unambiguously).
6. **Prioritise:** attractiveness (size, growth, margin, fit) × ability to win (current share, capabilities, competition).
7. **What changes per segment:** value proposition, product or bundle, pricing, channel and coverage model, service level, marketing message.
8. **Validate:** test with sales teams and a sample of customers; pilot differentiated actions.
9. **Track:** segment KPIs and migration; refresh annually.

## Judgement calls
- **Avoid demographic-only segments** (e.g. "SMEs") when needs vary widely within them.
- **Use value and potential** to differentiate service intensity, but avoid unfair treatment where regulations require it (e.g. vulnerable customers in financial services).
- **Segment migration** is often the real opportunity (moving customers into higher-value segments).
- **Keep a "low-touch" segment** with a digital-first, efficient model. Not every customer needs high service.

## Red flags
- Segments that would receive identical treatment.
- No assignment rules; sales can't identify the segments.
- Segments sized by count only, with no value or margin.
- 12 segments with tiny sizes.
- A segmentation done once and never used.

## Variants by context
- **B2B:** firmographics plus needs (e.g. compliance-driven vs growth-driven), buying centre, contract size, cost-to-serve.
- **Consumer:** life stage, needs, behaviours, channel, price sensitivity; privacy constraints on data use.
- **Banking and insurance:** needs-based segments with fairness and suitability rules; value tiers for service.
- **Healthcare:** patient segments by condition, payer and engagement; referral-source segments.
- **SaaS:** usage-based segments, expansion potential, product-led vs sales-led.

## Output format

```markdown
## Customer Segmentation: [business], for [decision]
**Basis:** primary ... | secondary ... | descriptors for assignment ...

| Segment | Size (#, revenue, margin) | Growth | Defining needs | Buying behaviour | Cost-to-serve | Our position | Priority |
|---|---|---|---|---|---|---|---|

**Profiles:** short paragraph per segment
**Assignment rules:** decision tree / scoring; coverage ...%
**What changes by segment:** proposition | product | price | channel | service
**Validation and tracking:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Linked to a decision; segments drive different actions.
- [ ] Needs and behaviours are the basis; descriptors make segments assignable.
- [ ] Size, value, margin and cost-to-serve per segment.
- [ ] Clear assignment rules with coverage.
- [ ] Priorities, and what changes per segment.
- [ ] A validation and tracking plan; fairness considered where regulated.

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
- `jobs-to-be-done`: Understand the real 'job' customers hire you for, and the outcomes they measure you on.
- `pricing-strategy`: Set or reset prices using value, cost and competition, with tiers and a test plan.
- `market-sizing`: Size a market top-down and bottom-up, reconcile the two, and show every assumption.
- `unit-economics`: Work out whether each customer, order or unit makes money, and which levers fix it.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
