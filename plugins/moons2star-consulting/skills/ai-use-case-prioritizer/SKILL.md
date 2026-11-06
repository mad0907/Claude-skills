---
name: ai-use-case-prioritizer
description: "Prioritises AI use cases into a sequenced portfolio using weighted value, feasibility (data, technology, integration), adoption and time-to-value, with risk tier applied as a gate rather than a score, shared-foundation dependencies, portfolio balance across quick wins and strategic bets, and explicit stop or park decisions. Use after an AI opportunity scan, when there are too many pilots, for annual AI portfolio reviews, or to defend sequencing to a board or investment committee."
---

# AI Use-Case Prioritiser

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a defensible, sequenced AI portfolio of wave 1, wave 2 and parked items. The scoring is transparent, risk is handled as a gate, and shared foundations are funded once. Anyone on the steering committee can see why something is first and why something else is not.

## The senior standard
1. **Weights before scores.** Agree criteria and weights with the sponsor before anyone scores. Otherwise scoring becomes advocacy.
2. **Risk is a gate, not a discount.** A high-value use case with high risk is not "medium priority". It is "only if governance is ready". Treat prohibited or unacceptable uses as out, whatever the score.
3. **Portfolio, not ranking.** Balance quick wins (credibility and funding) with strategic bets (differentiation) and foundations (enablers). A pure top-10 list usually ignores dependencies.
4. **Feasibility means "in this organisation, this year".** That covers data that exists and is accessible, integration that is possible, and people who will use it.
5. **Kill and park explicitly.** A portfolio that never stops anything has no priorities.
6. **Re-rank on evidence.** Pilot results and data discoveries should move items up or down; plan quarterly reviews.

## Before you start: diagnose
- How many candidates, and how well described (process step, value mechanism, data)? If thin, run `ai-opportunity-scan` first.
- Strategic priorities for the next 12-24 months (cost, growth, risk, experience).
- Capacity: budget, AI and data engineers, product owners, change capacity in the business.
- Governance maturity: can the organisation safely run high-risk AI today?
- Shared platforms available or planned (data platform, retrieval, agent orchestration, evaluation).

## Method
1. **Normalise the list.** One line per use case with process, user, value mechanism, rough value, data and risk tier. Merge duplicates and split mixed items.
2. **Set criteria and weights.** Typical starting weights; adjust with the sponsor and record the reasons:
   - **Value (35%):** financial (sized), strategic alignment, customer or employee impact.
   - **Feasibility (30%):** data readiness, technical complexity, integration effort, vendor maturity.
   - **Adoption (20%):** user pull, process change size, change capacity, a sponsor in the business.
   - **Time to value (15%):** months to measurable benefit.
3. **Define a 1-5 scale per criterion with anchors** so scorers agree. For example, Data readiness 5 = clean, labelled, accessible history ≥2 years; 1 = data doesn't exist.
4. **Score with evidence.** One line per score. Use 2-3 scorers (business, tech, risk) and discuss big disagreements; they reveal unknowns.
5. **Apply the risk gate.**
   - **Unacceptable or prohibited:** exclude.
   - **High-risk:** allowed in a wave only if the governance prerequisites are met (impact assessment, validation, human oversight, monitoring). Otherwise schedule governance first.
   - **Limited or minimal:** standard controls.
6. **Plot value vs feasibility** (2x2): **Quick wins** (high/high), **Strategic bets** (high value, lower feasibility: invest in enablers), **Fill-ins** (low value, high feasibility: do only if nearly free), **Park** (low/low).
7. **Map dependencies and shared foundations.** Group use cases that share data, a platform or a team. Sometimes a medium-value case goes first because it builds the foundation for three others.
8. **Build waves:**
   - **Wave 1 (0-6 months):** 3-5 items including at least one quick win and the foundation needed by wave 2.
   - **Wave 2 (6-12 months).**
   - **Parked**, with the condition that would revive each one.
9. **Sensitivity check:** would a reasonable change in weights change wave 1? If yes, discuss openly.
10. **Define review triggers:** quarterly, plus after each pilot decision.

## Judgement calls
- **Watch the "AI for its own sake" item the CEO loves.** Score it honestly; if it ranks low, show why and offer a cheap test.
- **Favour use cases with a committed business owner** over higher-scoring orphans. Adoption fails without ownership.
- **One meaningful customer-facing use case** can be worth more for learning than five internal ones, if governance is ready. Make that trade-off explicit.
- **Avoid pilot sprawl.** Cap concurrent pilots at what the organisation can actually evaluate and scale (often 3-6 for a mid-size firm).

## Red flags
- Scores without evidence; weights changed after seeing results.
- High-risk items scored "medium" to sneak them in.
- No foundations in wave 1, though wave 2 depends on them.
- Wave 1 with 15 items.
- Nothing parked or stopped.

## Variants by context
- **Regulated (BFSI, health):** higher weight on risk-gate readiness and explainability. Credit, claims and clinical uses need validation capacity before scaling.
- **GCC / shared services:** weight scalability across regions and process standardisation. Prioritise use cases deployable across many business units.
- **Start-up / scale-up:** weight time-to-value and revenue impact more; accept higher technical risk.
- **Public sector:** weight transparency, fairness and citizen impact; procurement timelines affect time-to-value.

## Output format

```markdown
## AI Use-Case Prioritisation: [scope], [date]
**Criteria and weights (agreed with [sponsor]):** Value 35 / Feasibility 30 / Adoption 20 / Time 15

| Use case | Value | Data | Tech | Integration | Adoption | Time | Weighted | Risk tier | Gate status | Quadrant | Owner |
|---|---|---|---|---|---|---|---|---|---|---|---|

**Wave 1 (0-6 months):** item - why - prerequisite
**Wave 2 (6-12 months):** ...
**Shared foundations to fund now:** ...
**Parked / stopped:** item - reason - revival condition
**Sensitivity:** ...
**Review cadence:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Weights stated before scoring, with scale anchors.
- [ ] Every score has one line of evidence.
- [ ] The risk gate is applied separately; high-risk items list governance prerequisites.
- [ ] Dependencies and shared foundations are shown and sequenced.
- [ ] Wave 1 is small enough to deliver; some items are parked or stopped with a reason.
- [ ] Sensitivity to weights is checked.

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
- **Skill-specific:** Not legal advice on AI or data-protection law. This skill does not replace independent model validation, security testing (including red-teaming), or a formal data protection impact assessment.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `ai-opportunity-scan`: Find where AI can create real value in a function or business, grounded in processes and pain points.
- `ai-business-case`: Build an honest business case for an AI use case, including model, data, change and run costs.
- `data-readiness-check`: Check whether the data for an AI or analytics use case is available, good enough, legal to use and accessible.
- `strategic-options`: Compare 2-5 real options against agreed criteria, with trade-offs made explicit, and recommend one.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
