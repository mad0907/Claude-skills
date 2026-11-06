---
name: executive-summary
description: "Writes a decision-ready executive summary of a report, deck, analysis, due diligence or project: the answer and the ask in the first lines, three to five supporting points each with a number, the main risk or trade-off stated candidly, next steps with owners and dates, calibrated length (half to one page), and a stand-alone test. Adapts for board pre-reads, investment committees, ExCo updates and client reports. Use whenever a document is longer than three pages or the reader is senior and time-poor."
---

# Executive Summary

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** one page that lets a senior leader understand, decide and act without reading the rest, while being honest about what could go wrong.

## The senior standard
1. **Answer and ask first.** The first two lines tell the reader what you recommend or found, and what you need from them, by when.
2. **Only what changes the decision.** Background, method and history only if they change trust in the answer.
3. **Numbers make points credible.** Each supporting point carries a figure (₹, %, time, count) and its basis.
4. **Candour.** State the main risk, uncertainty or trade-off, and what you're doing about it. Readers distrust summaries with no downside.
5. **Stand-alone.** Someone who reads only this page must be able to act correctly.
6. **Length discipline:** half a page for an update, one page for a major decision. Not a table of contents in prose.

## Before you start: diagnose
- Reader(s) and the decision or action you need.
- The source material, and its key findings and recommendations.
- Sensitivities (confidential numbers, politics).
- Format conventions (board template, investment-committee memo, client report).

## Method
1. **Identify the one message:** the recommendation or headline finding, plus the ask.
2. **Select the 3-5 supporting points** that most justify it; each a sentence with a number and source.
3. **Name the main risk or trade-off,** and the mitigation or the condition attached.
4. **Next steps:** who, what, by when; include the decision date.
5. **Draft** in this order: answer and ask → why (supporting points) → risk / trade-off → next steps.
6. **Cut:** remove adjectives, methodology, history, hedging. Keep each sentence under ~25 words where possible.
7. **Stand-alone test:** read it as the decision-maker who sees nothing else. Could you decide? What would you ask? Add that answer.
8. **Consistency check:** every number matches the main document.

## Judgement calls
- **Ranges beat false precision** when uncertainty is high ("₹40-55 Cr"), but say what drives the range.
- **Bad news first** in incident or underperformance summaries, followed by the response.
- **Several recommendations?** Number them by priority; consider whether they belong in separate decisions.
- **For information-only summaries,** still state the "so what" and any implications for decisions coming up.

## Red flags
- The answer appears in the last paragraph.
- No numbers; adjectives such as "significant" and "robust".
- No risks or trade-offs.
- More than one page, or a list of what the report contains.
- Numbers that differ from the main document.

## Variants by context
- **Board pre-read:** purpose label, resolution sought, key risks and conflicts (see `board-paper`).
- **Investment committee:** returns vs hurdle, key sensitivities, deal terms, conditions, red flags from diligence.
- **Programme update:** RAG status with reason, decisions needed, top risks, next milestones.
- **Client report:** business impact first; implementation implications; investment and benefits.
- **Research or due diligence:** key findings, confidence level, implications, open questions.

## Output format

```markdown
## Executive Summary: [title]
**Recommendation / finding and ask:** ... [decision needed by ...]

**Why**
- [Point with number and basis]
- ...
- ...

**Main risk / trade-off:** ... → mitigation / condition: ...

**Next steps:** who - what - when
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Answer and ask are in the first two lines.
- [ ] 3-5 supporting points, each with a number.
- [ ] The main risk or trade-off is stated, with a response.
- [ ] Next steps have owners and dates.
- [ ] ≤1 page; stands alone; numbers match the source.

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
- `scqa-storyline`: Build the storyline every executive document needs: Situation, Complication, Question, Answer.
- `board-paper`: Write a board paper directors can read in 10 minutes: purpose, recommendation, analysis, risks and the resolution.
- `decision-memo`: Write a crisp memo that frames a decision, the options, the recommendation and what is being asked.
- `insight-synthesis`: Turn analysis outputs into true insights: what it means, why it matters, what to do.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
