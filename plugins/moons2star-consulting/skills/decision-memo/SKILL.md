---
name: decision-memo
description: "Writes a narrative decision memo of one to three pages that can replace slides: the decision and its deadline as the title, recommendation and specific ask up front, the minimum context, genuine options including the status quo with costs, benefits and risks, the trade-off stated plainly, rationale against agreed criteria, risks with mitigations and reversal triggers, implementation outline, required approvals, and a decision record capturing outcome, conditions and dissent. Use for ExCo or leadership decisions, investment approvals, policy choices, or whenever a written narrative beats a deck."
---

# Decision Memo

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a memo that lets leaders make a decision in one meeting, often after silent reading at the start, and creates a durable record of what was decided, why, and under what conditions.

## The senior standard
1. **Title the decision.** "Decision: whether to pilot AI-assisted 24x7 support (by 30 Nov)" tells the reader why they are reading.
2. **Recommendation and ask in the first paragraph,** with the scale, cost and timing.
3. **Narrative over bullets for reasoning.** Full sentences force complete logic; bullets hide gaps. Use tables only for option comparison.
4. **Real options, status quo included,** each with benefits, costs and risks.
5. **Name the trade-off** in one sentence. Decisions are choices between goods or between risks.
6. **Reversal triggers.** State what evidence would make us change course, and when we'll review.
7. **Record the decision.** Outcome, conditions, dissent, owner, review date: the institutional memory.

## Before you start: diagnose
- The decision, decision-maker(s), deadline and forum (ExCo, committee, board).
- Analysis available (options, numbers, risks); stakeholder positions.
- Approvals needed (budget, legal, regulatory, works council).
- The culture: some forums read memos silently at the start of the meeting. Design for that.

## Method
1. **Title:** "Decision: [what] by [date]".
2. **Paragraph 1 (recommendation and ask):** what we recommend; cost or benefit; timing; what we need from the reader (approve, choose, comment).
3. **Context (≤½ page):** only what's needed to judge the options; link to background documents.
4. **Options (2-4, including status quo):** a short narrative each, then a comparison table: benefits, costs, risks, time, reversibility, stakeholder impact.
5. **Recommendation and rationale:** why it beats the alternatives against the agreed criteria; the trade-off accepted.
6. **Risks and mitigations;** **reversal triggers** with dates and metrics.
7. **Implementation outline:** owner, first 30-60-90 days, milestones, budget phasing.
8. **Approvals and consultations** required, and their status.
9. **FAQ (optional):** the 3-5 questions readers will ask, answered briefly.
10. **Decision record** (completed after the meeting): decision, date, decided by, conditions, dissent, review date.

## Judgement calls
- **Length:** 1-2 pages for most decisions; up to 6 for complex, irreversible ones, with appendices.
- **Neutral options section.** Write the options fairly, as the advocate of each would; save advocacy for the recommendation.
- **When leaders disagree,** present the strongest version of each view, and the criteria on which they differ.
- **Reversible, low-cost decisions** deserve speed: a short memo, a fast decision, and a review date.

## Red flags
- The recommendation appears on page 3.
- Options that are variations of the same thing; no status quo.
- No costs or risks for the recommended option.
- No reversal triggers or review date.
- The decision record not completed after the meeting.

## Variants by context
- **Investment approval:** add returns vs hurdle, sensitivities and stage gates (see `business-case`).
- **Policy decisions:** add the compliance and legal analysis and the communication plan.
- **People and organisation decisions:** confidentiality; legal and HR process; a communication sequence.
- **AI deployments:** add the risk tier, guardrails and pilot metrics (see `ai-pilot-design`).
- **Board-level:** convert to `board-paper` format with a resolution.

## Output format

```markdown
# Decision: [what], by [date]
**Recommendation and ask:** ...

## Context
## Options
(short narrative per option)
| | Status quo | Option A | Option B |
|---|---|---|---|
| Benefits | | | |
| Costs | | | |
| Risks | | | |
| Time / reversibility | | | |

## Recommendation and rationale (trade-off: ...)
## Risks, mitigations and reversal triggers
## Implementation outline
## Approvals and consultations
## FAQ (optional)
## Decision record
Decided by: ... | Date: ... | Outcome: ... | Conditions: ... | Dissent: ... | Review date: ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] The title states the decision and deadline; the ask is in the first paragraph.
- [ ] Real options, including the status quo, compared fairly.
- [ ] The trade-off is stated in one sentence.
- [ ] Risks, mitigations, reversal triggers and a review date.
- [ ] Implementation owner and approvals.
- [ ] A decision record section.

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
- **Skill-specific:** Check that the final message, numbers and claims are accurate and approved before sharing outside your organisation.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `strategic-options`: Compare 2-5 real options against agreed criteria, with trade-offs made explicit, and recommend one.
- `executive-summary`: Write a one-page executive summary a busy leader can act on in two minutes.
- `board-paper`: Write a board paper directors can read in 10 minutes: purpose, recommendation, analysis, risks and the resolution.
- `pyramid-structure`: Structure any argument top-down: answer first, grouped support, evidence below.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
