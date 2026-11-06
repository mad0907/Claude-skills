---
name: value-chain
description: "Maps a company or industry value chain end to end (primary and support activities, or the industry chain from inputs to end customer), quantifies cost, margin, capital intensity and value added at each step, identifies profit pools and how they are shifting, locates the organisation's sources of advantage and disadvantage, and derives options to cut, automate, outsource, integrate, partner or reposition, including where technology and AI will move value. Use for cost reduction, sourcing and make-versus-buy, vertical integration, disruption analysis, and where-to-play decisions."
---

# Value Chain Analysis

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a picture of where value and profit are created and captured, where you are strong or weak, and where the chain is shifting, so you can decide where to compete, what to own, and what to change.

## The senior standard
1. **Two lenses, chosen deliberately.** A *company* value chain (your activities) for cost and capability questions; an *industry* chain (inputs → manufacturing → distribution → retail → end user → after-sales) for profit-pool and integration questions.
2. **Numbers at each step:** cost share, margin, capital employed, returns, and the number and concentration of players. Without numbers, it's a diagram, not an analysis.
3. **Profit pools are not revenue pools.** The largest revenue step is often not the most profitable.
4. **Advantage is located.** Identify the specific activities where you outperform (or underperform) competitors, with evidence (cost per unit, quality, speed).
5. **Value migrates.** Technology, regulation and customer behaviour shift value between steps (e.g. to platforms, data owners, software layers, after-sales).
6. **Options follow the map:** improve, automate, outsource, integrate, partner, exit, or reposition along the chain.

## Before you start: diagnose
- The question: cost, sourcing, integration, disruption or entry.
- The company's or industry's chain and the data available (cost breakdowns, margins by step, peer data).
- Technology and regulatory changes affecting the chain.

## Method
1. **Map the chain:**
   - **Company:** primary activities (inbound logistics → operations → outbound → sales and marketing → service) plus support (procurement, technology, HR, infrastructure).
   - **Industry:** steps from raw inputs to end customer, plus after-sales.
2. **For each step:** activities; who performs them (us, suppliers, partners); cost share; margin; capital intensity; number and concentration of players; key success factors.
3. **Profit pools:** estimate the profit at each industry step (revenue × margin); visualise as a width (revenue) × height (margin) chart described in text.
4. **Our position:** performance vs peers at each step (cost, quality, speed); sources of advantage and disadvantage.
5. **Value shifts:** technology (automation, AI, digital platforms), regulation, customer behaviour; which steps gain or lose.
6. **Options:** for each step: improve (lean, AI), outsource (if non-differentiating), integrate (if margins or control justify it), partner, exit or reposition. Size the impact roughly.
7. **Recommendations,** with the trade-offs and the next analyses needed.

## Judgement calls
- **Integration is tempting but costly.** Integrate when the step is critical to quality or supply security, when margins are attractive and sustainable, or when coordination failures are costly. Not just because the margin is high.
- **Outsourcing non-core steps** frees capital, but can hollow out capabilities. Keep the know-how to manage suppliers.
- **After-sales and data** are often under-appreciated profit pools.
- **Use cost-to-serve** for downstream steps; it often reveals unprofitable channels or customers.

## Red flags
- An activity diagram with no numbers.
- Revenue pools confused with profit pools.
- Advantage asserted without peer evidence.
- No view of how value will shift.
- Integration recommended without capability or capital analysis.

## Variants by context
- **Manufacturing:** materials, conversion, logistics, distribution margins, after-market.
- **Pharma:** API → formulation → distribution → retail pharmacy → prescriber influence; trade margins.
- **Financial services:** origination → underwriting → servicing → collections → funding; fintech unbundling.
- **Retail and consumer:** sourcing → brand → distribution → retail → returns; marketplaces and quick commerce.
- **Technology and AI:** chips → cloud → models → applications → services; where margins are moving.

## Output format

```markdown
## Value Chain: [company / industry], [geography], [year]

| Step | Activities | Who performs | Cost share | Margin | Capital intensity | Players / concentration | Our position (evidence) | Shift underway |
|---|---|---|---|---|---|---|---|---|

**Profit pools (now → future):** ...
**Sources of advantage / disadvantage:** ...
**Options by step:** improve / automate / outsource / integrate / partner / exit - rough impact
**Recommendations and trade-offs:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] The right lens (company vs industry) for the question.
- [ ] Numbers per step: cost share, margin, capital, players.
- [ ] Profit pools distinguished from revenue; future shifts identified.
- [ ] Advantage located with peer evidence.
- [ ] Options sized, with trade-offs.

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
- `cost-takeout`: Build a structured cost-reduction plan: baseline, levers, sizing, phasing and risks to service.
- `build-buy-partner`: Decide whether to build a capability, acquire it, or partner, with a clear rationale.
- `operating-model`: Design how the organisation will work: structure, processes, people, technology, governance and locations.
- `five-forces`: Judge how attractive an industry is and what drives profits, using the five forces framework with evidence.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
