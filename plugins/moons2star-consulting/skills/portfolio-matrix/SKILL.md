---
name: portfolio-matrix
description: "Analyses a portfolio of business units, product lines, markets or projects on market attractiveness versus competitive strength (nine-box), with transparent weighted criteria, economic-profit and cash-generation overlays, assigned strategic roles (invest to grow, selectively invest, maintain, fix, harvest, divest), capital-allocation shifts, ownership test (are we the best owner), and portfolio balance checks. Use for capital allocation, annual planning, product or SKU rationalisation, project portfolio reviews, or divestment screening."
---

# Portfolio Matrix

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a clear, defensible view of where to put money and management attention across the portfolio, and where to pull them out. Each unit gets an explicit role with matching targets and capital.

## The senior standard
1. **Roles drive resources.** Each unit gets a role, and the role sets its capital, targets and KPIs. Growth units are not judged on short-term margin; harvest units are not given growth capex.
2. **Transparent criteria.** Attractiveness and strength are scored on stated, weighted criteria with evidence. No black-box positions.
3. **Economics overlay.** Add economic profit (return above the cost of capital) and cash generation. A unit can look attractive yet destroy value.
4. **The best-owner test.** Would this unit be worth more with another owner (scale, synergies, focus)? If so, divestment may create value even for a good business.
5. **Balance matters.** Cash generators should fund growth bets, and the portfolio's risk should be acceptable as a whole.
6. **Reallocation is the point.** Firms that actively shift capital toward better opportunities tend to outperform those that allocate in proportion to last year's budget.

## Before you start: diagnose
- Units in scope and data per unit: revenue, growth, EBITDA, capital employed, ROCE, cash flow, market size and growth, share and relative share, competitive position evidence.
- Strategic priorities and the cost of capital.
- Constraints: interdependencies (shared customers, plants), regulatory licences, people.

## Method
1. **Define criteria and weights:**
   - **Market attractiveness:** size, growth, profit pool and margins, intensity of competition (Five Forces), cyclicality, regulatory and ESG risk, strategic fit.
   - **Competitive strength:** relative share, relative cost position, brand and customer loyalty, capabilities (VRIO), innovation pipeline, channel access.
2. **Score each unit 1-5 per criterion** with evidence; compute weighted scores; show the table.
3. **Plot** on a 3×3 grid (high/medium/low on each axis); bubble size = revenue or capital employed; arrows for expected movement.
4. **Economics overlay:** ROCE vs cost of capital; economic profit; cash conversion; capital intensity.
5. **Assign roles:**
   - **Invest to grow:** high attractiveness and high strength.
   - **Selectively invest / build:** high attractiveness, medium strength; invest where you can win.
   - **Maintain / earn:** medium-medium; optimise.
   - **Fix:** attractive market, weak position, with a credible plan and a deadline.
   - **Harvest:** low attractiveness, decent strength; maximise cash, limit capex.
   - **Divest / exit:** low-low, or a better owner exists.
6. **Best-owner test** for fix, harvest and divest candidates (and any unit with low synergies).
7. **Capital reallocation:** shift capex, opex and talent according to the roles; show the before/after mix.
8. **Portfolio check:** cash balance, risk concentration, cyclicality, and capability coherence.
9. **Targets per role:** growth, margin and ROCE, with time-bound conditions (e.g. fix units must reach X by date Y or move to divest).

## Judgement calls
- **Interdependencies can override the grid.** A weak unit may supply a strong one or anchor key customers. Quantify the dependency before exiting.
- **Fix needs a clock.** Fix plans without a deadline become permanent subsidies.
- **Don't divest at the bottom of the cycle** unless value is truly eroding. Consider timing and buyer appetite.
- **Small units can be options** (H3 bets). Treat them as an innovation portfolio with stage gates, not as nine-box failures.

## Red flags
- Scores without evidence; positions matching management's preferences.
- Every unit gets "invest".
- No economics overlay; ROCE below cost of capital ignored.
- No capital shifts after the analysis.
- Fix roles without deadlines or credible plans.

## Variants by context
- **Product / SKU portfolios:** use contribution after cost-to-serve; complexity costs; cannibalisation.
- **Project portfolios (IT, R&D, AI):** value vs feasibility; risk; strategic fit; stage-gate status; dependencies.
- **Geographic portfolios:** market attractiveness by country; risk (political, FX); scale economics.
- **Conglomerates and holding companies:** capital allocation across sectors; holding-company discount; listing or demerger options.

## Output format

```markdown
## Portfolio Matrix: [portfolio], [year]
**Criteria and weights:** Attractiveness: ... | Strength: ...

| Unit | Revenue | Growth | EBITDA % | ROCE vs WACC | Attractiveness score | Strength score | Box | Role | Best owner? | Capital shift |
|---|---|---|---|---|---|---|---|---|---|---|

**Grid summary:** (positions, arrows)
**Portfolio balance:** cash generators vs users; risk concentration
**Capital reallocation:** before → after
**Targets and conditions by role:** ...
**Interdependencies to manage:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Criteria and weights are stated, with evidence per score.
- [ ] Economics overlay (ROCE vs cost of capital, cash) included.
- [ ] Every unit has a role with matching targets and capital.
- [ ] Best-owner test applied to weak or low-synergy units.
- [ ] Capital reallocation is quantified; portfolio balance checked.
- [ ] Fix roles have deadlines; interdependencies are considered.

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
- `growth-options`: Lay out all the ways to grow (core, adjacent, new) and size and rank them.
- `strategic-options`: Compare 2-5 real options against agreed criteria, with trade-offs made explicit, and recommend one.
- `business-case`: Build a decision-ready business case: options, costs, benefits, NPV, risks and the ask.
- `board-paper`: Write a board paper directors can read in 10 minutes: purpose, recommendation, analysis, risks and the resolution.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
