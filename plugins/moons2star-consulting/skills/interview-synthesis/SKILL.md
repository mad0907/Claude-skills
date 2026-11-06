---
name: interview-synthesis
description: "Turns interview notes or transcripts into evidence-backed themes: a coding frame from objectives and emerging codes, an evidence matrix of respondent by theme, theme strength from breadth across respondents and segments rather than vividness, segment differences, verbatim quotes chosen for typicality not drama, contradicting evidence and outliers, quantified data extracted from interviews, implications for the decision, confidence and gaps. Use after expert calls, customer interviews, win-loss, employee listening, stakeholder interviews or reference calls."
---

# Interview Synthesis

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** an honest answer to "what did we learn?": themes you can count, segment differences you can act on, and quotes that represent the pattern, not just the most memorable person.

## The senior standard
1. **Breadth over vividness.** A theme heard from 11 of 16 respondents across segments beats one dramatic quote. Always state "n of N".
2. **Segment differences are often the insight.** Churned vs healthy customers, buyers vs users, small vs large.
3. **Code systematically.** Start from the learning objectives (deductive codes), add emerging codes (inductive), and apply them consistently.
4. **Separate observation from interpretation.** What people said and did vs what you infer.
5. **Quotes illustrate; they don't prove.** Choose typical quotes, label the respondent type, and anonymise.
6. **Contradictions and outliers are reported.** They may signal a sub-segment or a flaw in the hypothesis.
7. **Interviews are small samples.** Use them for direction and mechanisms; validate magnitudes with quantitative data or surveys where it matters.

## Before you start: diagnose
- The objectives and decision; the interview guide.
- Notes or transcripts: number, segments, quality, interviewer differences.
- Confidentiality rules for quotes.

## Method
1. **Coding frame:** codes per objective plus emerging codes; define each in one line.
2. **Code every interview:** tag passages; extract facts and numbers (hours, costs, frequencies, alternatives).
3. **Evidence matrix:** respondent × theme (✓, ✗ (contradicts), blank (not discussed)), with a segment column.
4. **Theme strength:** n/N overall and by segment; note intensity (how much it matters to them) separately from frequency.
5. **Write themes** as full sentences, with mechanisms ("Churn is triggered by the first payroll error that reaches employees, not by price").
6. **Segment comparison:** where themes differ by segment.
7. **Quantitative extracts:** ranges and medians of the numbers respondents gave (with n); treat them as indicative.
8. **Quotes:** 1-2 per theme; typical; labelled by segment; anonymised.
9. **Contradictions and outliers:** what doesn't fit, and the possible explanation.
10. **Implications:** what this means for the decision and hypotheses (supported, refuted, nuanced).
11. **Confidence and gaps:** sample limits, missing segments, interviewer bias; what to validate next.

## Judgement calls
- **Saturation:** if new interviews stop adding themes, the sample is probably enough for direction.
- **Weight respondents appropriately.** A decision-maker's view on why they left outweighs a junior user's guess.
- **Beware of confirmation:** actively look for evidence against your hypothesis; report it.
- **Interviewer effects:** if interviewers differ, check whether themes cluster by interviewer.
- **Numbers from interviews** are self-reported and small-n. Present medians and ranges, not precise averages.

## Red flags
- Themes without n/N.
- Only supportive quotes.
- No segment comparison.
- Single dramatic anecdotes driving conclusions.
- Precise percentages from 12 interviews.

## Variants by context
- **Win-loss:** decisive factors by won vs lost; price vs value perception; sales-process issues.
- **Employee listening:** themes by function and level; strict anonymity (suppress small groups).
- **Expert calls:** consensus vs divergent views; estimates with ranges; experts' biases.
- **Stakeholder interviews:** alignment map; priorities and concerns by stakeholder group.
- **Diligence references:** red flags first; customer satisfaction and switching risk.

## Output format

```markdown
## Interview Synthesis: [study] (N = __; segments: ...)
**Bottom line:** ...

| Theme (full sentence) | Overall n/N | Seg A | Seg B | Intensity | Typical quote (segment) |
|---|---|---|---|---|---|

**Segment differences:** ...
**Numbers from interviews (indicative):** metric: median, range (n)
**Contradictions and outliers:** ...
**Hypotheses:** supported / refuted / nuanced
**Implications for the decision:** ...
**Confidence and gaps; validate next:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Systematic coding; an evidence matrix built.
- [ ] Every theme has n/N and segment splits; intensity noted.
- [ ] Typical, labelled, anonymised quotes.
- [ ] Contradictions and outliers reported; hypotheses assessed.
- [ ] Implications, confidence, gaps and validation steps.

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
- `interview-guide`: Write a crisp guide for expert, customer or employee interviews that gets real answers, not opinions.
- `insight-synthesis`: Turn analysis outputs into true insights: what it means, why it matters, what to do.
- `survey-design`: Design a short, unbiased survey that produces numbers you can actually use.
- `customer-segmentation`: Group customers by needs and value so you can focus, price and serve them differently.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
