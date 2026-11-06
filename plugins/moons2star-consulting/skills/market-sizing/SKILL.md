---
name: market-sizing
description: "Sizes a market rigorously: precise definition (product, customer, geography, year, value or volume, which price point), top-down and bottom-up estimates built from cited drivers, triangulation with a third method where possible, reconciliation of differences, total, serviceable and obtainable market with obtainable share benchmarked to comparable entrants, low, base and high ranges with the most sensitive assumption, growth drivers and forecast, and a clear source and estimate log. Use for market entry, investment cases, product launches, investor materials, or to sanity-check a quoted market number."
---

# Market Sizing

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a market size you can defend under questioning. It is precisely defined, built two independent ways, reconciled, expressed as a range, and grounded in realistic share assumptions.

## The senior standard
1. **Definition is half the answer.** Product scope, customer type, geography, year, value vs volume, and the price point (manufacturer, retail or end-user spend). Most disagreements are definitional.
2. **Two independent methods at least.** Top-down (from a known total, narrowed) and bottom-up (units × adoption × price). A third (supply-side: sum of player revenues; or analogue markets) when possible.
3. **Reconcile, don't average.** If the methods differ by more than ~25-30%, find out why: definition, double counting, price-point mismatch.
4. **TAM, SAM, SOM honestly:**
   - **TAM:** the total demand for the need.
   - **SAM:** the portion you can serve with your model, channels and geography.
   - **SOM:** what you can realistically win in 3-5 years, benchmarked to what comparable entrants achieved.
5. **Ranges, not false precision.** Give low / base / high, and name the swing assumption.
6. **Every number is labelled:** sourced (with date) or estimated (with logic). Never present an estimate as a fact.

## Before you start: diagnose
- The decision (enter? invest? price?), the precision needed (±20% is often enough to screen).
- The offering and its target customers; the geography and the year.
- Available data: government statistics, industry bodies, company filings, surveys, internal data.

## Method
1. **Define** the market in one precise sentence; list inclusions and exclusions.
2. **Top-down:** start from a published total (sector output, household consumption, spend category). Apply filters (segment share, relevant product share, price-point adjustments). Cite each.
3. **Bottom-up:** number of target customers (by segment) × adoption or penetration × units or usage per customer × price. Build each driver from evidence (census, registries, surveys, pilot data).
4. **Supply-side check (if possible):** sum the revenues of the main players (from filings) plus an estimate for the long tail.
5. **Reconcile:** compare; explain differences; choose a base and justify it.
6. **TAM / SAM / SOM:** apply serviceability filters for SAM. For SOM, use the share trajectories of comparable entrants and your capacity, channels and budget.
7. **Range and sensitivity:** low / base / high; identify the most sensitive driver (compute with code).
8. **Growth:** historic CAGR and forecast drivers (demographics, income, penetration, price, regulation, technology). Check the forecast's consistency with the drivers.
9. **Source and estimate log:** each number with its source, date, or estimation logic.

## Judgement calls
- **Analyst reports disagree.** Use them as one input, check their definitions, and never rely on a single report for the key number.
- **New categories** have no history. Use analogues (adoption curves of similar products) and willingness-to-pay data, and widen the ranges.
- **Value vs volume:** price deflation can shrink value while volume grows. Show both if relevant.
- **SOM ambition vs evidence:** if the plan needs 20% share in year 3 where comparable entrants reached 3-5%, flag it.

## Red flags
- A single TAM number from a press release.
- Mixing retail and manufacturer prices.
- SOM = 10% of TAM "because it's conservative".
- No date or source on key drivers.
- A forecast CAGR inconsistent with the stated drivers.

## Variants by context
- **B2B:** firms by size and industry (business registries, census of establishments) × adoption × contract value.
- **Consumer:** households or individuals by income and geography × penetration × frequency × price.
- **Healthcare:** disease prevalence × diagnosis rate × treatment rate × compliance × price.
- **Financial services:** customers × product penetration × balances or premiums × margin.
- **Software / SaaS:** firms × seats or usage × price per seat; land-and-expand dynamics.

## Output format

```markdown
## Market Size: [market], [geography], [year], [value/volume at price point]
**Definition:** ... (includes ...; excludes ...)

### Bottom-up
| Driver | Value | Source / basis |
|---|---|---|
### Top-down
[start figure] × [filter] × [filter] = ... (sources)
### Supply-side check (if available)
### Reconciliation
### TAM / SAM / SOM
| | Low | Base | High |
|---|---|---|---|
**SOM basis (comparable entrants):** ...
**Most sensitive assumption:** ...
**Growth:** historic ...; forecast ... driven by ...
**Source and estimate log:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Precise definition, including the price point and year.
- [ ] At least two independent methods; reconciled, with reasons.
- [ ] TAM, SAM and SOM with a benchmarked SOM.
- [ ] Ranges and the most sensitive driver, computed with code.
- [ ] Each number labelled as sourced (with date) or estimated (with logic).

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
- `competitor-benchmark`: Compare competitors on the factors that matter to customers and economics, and spot where to win.
- `business-case`: Build a decision-ready business case: options, costs, benefits, NPV, risks and the ask.
- `source-validation`: Grade every source and claim for reliability so you never put a weak number in front of a board.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
