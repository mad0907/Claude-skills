---
name: strategic-options
description: "Structures and evaluates a strategic choice between genuinely distinct options, including the status quo, using criteria and weights agreed before scoring, evidence-based assessment, quantified value and risk where possible, sensitivity of the ranking to weights and key assumptions, reversibility and option value, stakeholder and execution considerations, and a clear recommendation with conditions and reversal triggers. Use for board or ExCo decisions between alternatives, portfolio choices, location, structure or vendor decisions, or when debate is stuck on preferences."
---

# Strategic Options Evaluation

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a decision that can be defended later. It shows real alternatives, transparent criteria, honest trade-offs, a recommendation and the conditions under which you would change your mind.

## The senior standard
1. **Real options, not straw men.** 3-5 options that a reasonable person could choose, including the status quo or "do minimum". If one option is obviously superior, you're not facing a strategic decision.
2. **Criteria before scores.** Agree criteria and weights with decision-makers before evaluating, to avoid post-hoc rationalisation.
3. **Quantify where it matters.** Value (NPV or EBITDA impact), capital, risk (probability × impact), and time can usually be estimated. Use scores only for genuinely qualitative criteria.
4. **Make the trade-off explicit.** Good decisions name what is given up: "B gives ₹200 Cr more value but takes 18 months longer and concentrates risk in one market."
5. **Reversibility and option value.** Prefer choices that keep future options open when uncertainty is high; commit decisively when it is low.
6. **Execution realism.** An option the organisation can't execute is not an option.
7. **Conditions and reversal triggers.** State what must be true for the recommendation to hold, and what would change it.

## Before you start: diagnose
- The decision, decision-maker, timing and what's at stake.
- Constraints (capital, regulation, contracts, stakeholder red lines).
- Strategic objectives and risk appetite (the source of criteria).
- Available analysis on each option.

## Method
1. **Frame the decision:** the question, scope, horizon, and what is out of scope.
2. **Generate options:** widen first (including hybrids and phased paths), then narrow to 3-5 distinct ones; describe each in 2-3 lines.
3. **Agree criteria and weights.** Typical set:
   - strategic fit;
   - financial value;
   - capital required;
   - risk (and its type);
   - time to impact;
   - reversibility;
   - execution feasibility;
   - stakeholder impact (customers, employees, regulators, community).
   Define 1-5 scales with anchors.
4. **Evidence per option per criterion:** numbers where possible; one-line rationale per score.
5. **Score and weight;** show the table.
6. **Sensitivity:**
   - **Weights:** would reasonable stakeholders' weightings change the winner?
   - **Key assumptions:** what would flip the ranking (switching values)?
7. **Qualitative overlay:** red lines, regulatory or reputational risks, strategic signalling, option value.
8. **Recommendation:** the chosen option, the trade-off accepted, conditions, first steps, and reversal triggers. Where uncertainty is high, consider a staged or hybrid path.
9. **Decision record:** the decision, date, rationale, dissent and review date.

## Judgement calls
- **Hybrid options** are often best but can be "everything bagels" that do nothing well. Test whether the hybrid is coherent.
- **Status quo is rarely free.** Price the cost of inaction (decline, risk build-up).
- **Don't let scoring replace judgement.** Close scores mean the decision rests on risk appetite and values. Say so and let leaders decide.
- **Watch for anchoring and sunk-cost bias,** especially when an option has internal sponsors or past investment.
- **Disagreement is data.** Capture dissenting views in the record.

## Red flags
- Only one option seriously developed.
- Criteria or weights changed after seeing the scores.
- No cost of inaction.
- Scores without evidence; false precision (scores to 2 decimals).
- No reversal triggers or review date.

## Variants by context
- **Portfolio / business-unit decisions** (fix, grow, sell, close): include buyer appetite and separation costs.
- **Location / footprint:** talent, cost, risk, incentives, infrastructure, time.
- **Structure / operating model:** control, speed, cost, talent, transition risk.
- **Vendor / technology:** total cost of ownership, fit, lock-in, vendor viability, migration risk.
- **Crisis decisions:** speed and reversibility dominate; decide with partial information and set a review in days.

## Output format

```markdown
## Options Evaluation: [decision], decision by [date]
**Decision-maker:** ...  |  **Constraints / red lines:** ...

### Options
A. ... B. ... C. ... D. Status quo (cost of inaction: ...)

### Criteria and weights (agreed [date] with [who])
| Criterion | Weight | Scale anchors |

### Evaluation
| Criterion (weight) | A | B | C | Status quo |
|---|---|---|---|---|
| Financial value (25%) | NPV ₹.. → 4 | | | |
| ... | | | | |
| **Weighted score** | | | | |

### Sensitivity (weights and key assumptions)
### Trade-off in one sentence
### Recommendation, conditions and first steps
### Reversal triggers and review date
### Decision record (decision, rationale, dissent)
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] 3-5 distinct, credible options, including the status quo with its cost.
- [ ] Criteria and weights fixed before scoring, with anchors.
- [ ] Evidence and numbers behind the scores.
- [ ] Sensitivity to weights and key assumptions shown.
- [ ] Explicit trade-off; recommendation with conditions and reversal triggers.
- [ ] Decision record format included.

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
- `decision-memo`: Write a crisp memo that frames a decision, the options, the recommendation and what is being asked.
- `sensitivity-analysis`: Find which assumptions really move the answer, and what has to be true for the decision to flip.
- `scenario-planning`: Build 3-4 plausible futures from key uncertainties, and find moves that work across them.
- `board-paper`: Write a board paper directors can read in 10 minutes: purpose, recommendation, analysis, risks and the resolution.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
