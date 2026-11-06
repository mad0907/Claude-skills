---
name: red-team-review
description: "Stress-tests a strategy, recommendation, business case, deck or plan the way a sceptical board, investor, regulator, competitor or opponent would: steelmans the plan first, then attacks it on logic gaps, weak or untraceable evidence, hidden assumptions, missing options, optimism in numbers, execution realism, second-order effects, competitor and stakeholder responses, legal and reputational exposure, and the conditions under which it fails; ranks issues by severity, and suggests fixes and the questions the team must answer before a decision. Use before a board, investment committee or launch, or when everyone in the room agrees too quickly."
---

# Red-Team Review

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** the hardest questions answered before the decision-makers ask them. A plan that has survived honest attack is stronger, and you'll know exactly where it's weakest.

## The senior standard
1. **Steelman first.** State the plan's strongest version and what it gets right. Critique of a straw man is useless.
2. **Attack the logic chain.** Does the recommendation follow from the evidence? Where are the leaps?
3. **Attack the evidence.** Is it sourced, recent, relevant and independent? Is any key number untraceable or optimistic?
4. **Surface the assumptions.** List the beliefs that must be true; test the 3-5 that matter most against base rates.
5. **Think like the opponent.** How will competitors, regulators, customers, employees, unions or activists respond?
6. **Second-order effects:** cannibalisation, incentive distortions, precedent, the impact on other units.
7. **Severity-ranked, with fixes.** Critique without a priority or a path forward is noise. Each issue gets a severity and a suggested fix or test.

## Before you start: diagnose
- What's being reviewed (strategy, case, deck, plan); the decision and the decision-maker.
- The stakes; who prepared it; the time before the decision.
- Which perspectives to simulate (board, investor, regulator, competitor, customer, employees, media).

## Method
1. **Steelman:** summarise the plan's argument and its best points in 4-6 lines.
2. **Logic review:** map claim → evidence → recommendation; identify gaps and non-sequiturs.
3. **Evidence review:** grade the key facts and numbers (see `source-validation`).
4. **Assumption test:** list the must-be-true assumptions; compare with base rates (typical cost overruns, adoption curves, win rates, synergy realisation); flag optimism.
5. **Missing options:** what alternatives weren't considered (including doing nothing, staging, partnering)?
6. **Number stress:** where would a 20-30% miss on a key driver break the case? (see `sensitivity-analysis`).
7. **Execution realism:** capacity, capabilities, timelines vs comparable programmes; dependencies.
8. **Stakeholder and competitor response:** simulate each perspective's strongest objection or move.
9. **Legal, regulatory, ethical, reputational exposure.**
10. **Failure conditions:** "This fails if…" (pair with `pre-mortem`).
11. **Severity ranking:**
    - **Fatal:** must fix before the decision.
    - **Major:** fix or mitigate, with disclosure.
    - **Minor:** improve.
12. **Questions to answer** before the decision, and suggested fixes or tests.

## Judgement calls
- **Be hard on the argument, respectful to the people.** The aim is a better decision, not winning.
- **Don't drown the plan in minor points;** 3-5 serious issues beat 30 nitpicks.
- **Distinguish "unproven" from "wrong."** Unproven assumptions need a test or staging; wrong ones need a rethink.
- **If the plan survives,** say so clearly. Red teams that always find a fatal flaw lose credibility.
- **Independence matters.** Ideally the reviewer wasn't involved in building the plan.

## Red flags
- No steelman.
- A list of opinions without evidence.
- No severity ranking or fixes.
- Ignoring the "do nothing" or staging options.
- Avoiding the uncomfortable issue everyone knows about.

## Variants by context
- **Investment case:** valuation assumptions, synergy realism, integration risk, downside protection.
- **Strategy:** competitive response, capability gaps, resource conflicts.
- **Board paper:** clarity of the decision ask, risk disclosure, options, governance compliance.
- **Regulatory submission:** completeness, consistency, legal interpretation, precedent.
- **AI or technology programme:** data readiness, model risk, adoption, vendor lock-in, responsible-AI issues.

## Output format

```markdown
## Red-Team Review: [plan], for [decision / forum]
**Steelman:** ...
**Verdict:** survives with fixes / needs rework / not ready

| # | Issue | Category (logic / evidence / assumption / option / execution / response / legal-reputational) | Severity | Why it matters | Fix or test |
|---|---|---|---|---|---|

**This plan fails if:** ...
**Questions the team must answer before the decision:** ...
**What the plan gets right (keep):** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] A steelman is stated fairly.
- [ ] Logic, evidence, assumptions, options, numbers, execution and responses all examined.
- [ ] Assumptions tested against base rates.
- [ ] Issues severity-ranked with fixes or tests; no nitpick flood.
- [ ] A clear verdict and the questions for decision-makers.

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
- **Skill-specific:** Use judgement on interpersonal and negotiation situations. For employment, legal or HR matters, consult the appropriate professional.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `pre-mortem`: Imagine the project has failed, explain why, and fix those causes now.
- `deck-quality-check`: A senior-partner style review of a deck: storyline, logic, evidence, numbers and visual consistency.
- `board-question-bank`: Generate the sharp, fair questions a non-executive director should ask on any paper or topic.
- `hypothesis-tree`: Start from a likely answer, then list exactly what must be true and how you would prove or kill it.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
