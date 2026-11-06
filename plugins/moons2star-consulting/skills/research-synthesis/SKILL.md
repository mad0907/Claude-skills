---
name: research-synthesis
description: "Synthesises research inputs (reports, articles, filings, data, notes, transcripts) into decision-relevant findings: question-led reading, atomic fact extraction with sources, clustering into full-sentence findings, evidence strength from number and independence of sources, explicit contradictions with explanations, implications for the decision, open questions and how to close them, and a bottom line, with traceability from every finding to its sources. Use after desk research, due diligence reading, literature reviews, or whenever there is more material than anyone can read."
---

# Research Synthesis

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a few clear, sourced findings and a bottom line that answer the question, with the conflicts and gaps shown honestly, instead of a document-by-document summary.

## The senior standard
1. **Question first.** Read everything through the lens of the decision's questions. Material that doesn't bear on them is parked.
2. **Atomic facts with sources.** Extract one claim per line, with its source, date and definition. Synthesis is built from these, not from memory.
3. **Synthesis, not summary.** Findings combine evidence across sources into insights. Summarising each document in turn is not synthesis.
4. **Findings are sentences with a point of view:** "Returns depend on utilisation above 15%, which only highway sites achieve", not "Utilisation".
5. **Strength is explicit:** the number of independent sources, their quality and their agreement.
6. **Contradictions are information.** Show them and explain the likely reasons (definitions, time periods, methods, interests).
7. **Bottom line and implications:** what this means for the decision, and what remains uncertain.

## Before you start: diagnose
- The questions and the decision; the audience.
- The material: types, volume, quality; any already-validated sources (see `source-validation`).
- Time available; the required format.

## Method
1. **Restate the questions** (3-8).
2. **Extract atomic facts:** claim | source | date | definition | strength; tag each to a question.
3. **Cluster** the facts by question and theme; look for patterns, mechanisms and causes.
4. **Write findings** (3-7): full sentences answering the questions; quantified where possible.
5. **Grade strength** for each finding: strong (multiple independent, high-quality sources agree), moderate, weak (single or low-quality source).
6. **Contradictions:** list conflicting evidence; explain the likely reasons; state which view you lean towards and why.
7. **Implications:** for each finding, the "so what" for the decision.
8. **Open questions:** what's unknown, why it matters, and how to close it (data, experts, a test).
9. **Bottom line:** 2-3 sentences answering the overall question, with the confidence level.
10. **Traceability:** a finding-to-source map, or footnotes.

## Judgement calls
- **Weight evidence, don't count it.** One rigorous primary study can outweigh five opinion pieces.
- **Recency vs depth:** recent anecdotes vs older rigorous data. Explain how you balanced them.
- **Surprises deserve scrutiny.** If a finding contradicts expectations, check it twice before presenting it.
- **Separate facts from interpretation** in the write-up.

## Red flags
- Document-by-document summaries.
- Findings that are topic labels.
- No sources or dates; no strength grading.
- Contradictions hidden or averaged away.
- No bottom line, or no implications.

## Variants by context
- **Due diligence:** findings grouped by diligence area, with red flags first; a link to valuation implications.
- **Literature review:** evidence quality grading; consensus vs debate; gaps in research.
- **Market study:** size, growth, segments, competition, customer needs, regulation.
- **Policy or regulatory review:** the current law, proposed changes, enforcement trends and implications.
- **Board briefing:** a one-page synthesis with a bottom line and 3-5 findings.

## Output format

```markdown
## Research Synthesis: [question]
**Bottom line (2-3 sentences, confidence):** ...

### Finding 1: [full-sentence insight, quantified]
- Evidence: fact (source, date); fact (source, date)
- Strength: Strong / Moderate / Weak
- Contradictions: ... (likely reason)
- So what: ...

### Finding 2 ...

**Open questions and how to close them:** ...
**Parked material (not relevant to the decision):** ...
**Sources reviewed:** list with dates
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Findings answer the stated questions; full sentences, quantified.
- [ ] Every finding is traceable to dated sources.
- [ ] Strength is graded; contradictions shown and explained.
- [ ] Implications and open questions with closing actions.
- [ ] A clear bottom line with a confidence level.

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
- **Skill-specific:** Research quality depends on the sources available to Claude in your session. Verify key facts against primary sources.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `insight-synthesis`: Turn analysis outputs into true insights: what it means, why it matters, what to do.
- `executive-summary`: Write a one-page executive summary a busy leader can act on in two minutes.
- `source-validation`: Grade every source and claim for reliability so you never put a weak number in front of a board.
- `scqa-storyline`: Build the storyline every executive document needs: Situation, Complication, Question, Answer.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
