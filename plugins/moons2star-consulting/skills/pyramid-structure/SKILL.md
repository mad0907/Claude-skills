---
name: pyramid-structure
description: "Structures or restructures an argument, document, email or report top-down: one governing thought, a MECE set of supporting claims at the same level of abstraction, evidence beneath each, inductive or deductive grouping chosen deliberately, vertical question-answer logic and horizontal order checked, and the text rewritten in pyramid order with headings that carry the message. Use to organise any recommendation, fix a long or rambling draft, prepare for Q&A, or turn notes into a clear document."
---

# Pyramid Structure

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** writing that a busy reader understands in the first paragraph and can trust in the detail. Every section answers the question raised by the one above it, and nothing is out of place.

## The senior standard
1. **One governing thought.** If you can't state the main point in one sentence, the thinking isn't finished.
2. **Vertical logic:** each level answers the "why?" or "how?" raised by the level above.
3. **Horizontal logic:** siblings are MECE, at the same level of abstraction, and in a deliberate order (time, structure or importance).
4. **Inductive by default.** Independent reasons that each support the point are robust to one being challenged. Use deductive chains (fact → implication → therefore) sparingly; they break if one link fails.
5. **Summarise, don't list.** Each grouping's heading states the insight of the group, not its category ("Costs will rise 12% because of three drivers", not "Cost analysis").
6. **Evidence at the base.** Data, examples and sources sit under the claims they support.

## Before you start: diagnose
- Audience and purpose (decide, inform, persuade).
- The draft or notes; the intended main message, if known.
- Constraints (length, format, house style).

## Method
1. **Extract all points** from the draft or notes, one idea per line.
2. **Find the governing thought:** ask "What single thing must the reader remember or decide?" Write it as a sentence.
3. **Group the points** into 3-5 clusters. For each, write the summary insight: what do these points together say?
4. **Check grouping logic:**
   - **Inductive:** each group independently supports the governing thought.
   - **Deductive:** the groups form a chain. Is each link sound?
5. **Order siblings:**
   - **Chronological:** steps, phases.
   - **Structural:** parts of a whole, e.g. by region.
   - **By importance:** most important first.
6. **Check MECE and abstraction** within each group; fix overlaps or mixed levels.
7. **Place evidence** under each claim; flag claims with no evidence.
8. **Test with the reader's questions:** the top answers "what?", the next level "why?" or "how?". Any unanswered obvious question means a missing branch.
9. **Rewrite** in pyramid order:
   - an opening that states the governing thought (often via SCQA);
   - sections in key-line order, with message headings;
   - evidence in the body or annexes.

## Judgement calls
- **Bad news or sensitive content:** still lead with the point, but provide context and empathy in the first lines; don't bury it.
- **Discussion documents:** the governing thought can be "We need to choose between A and B, and the key trade-off is X."
- **Emails:** the pyramid compresses to the first line (the point or ask), 2-4 bullets (reasons), then details.
- **Over-structuring:** short documents don't need four levels. Match depth to length.

## Red flags
- Chronological narration of what the team did ("First we analysed…").
- Section headings that are labels ("Background", "Analysis").
- More than 5-7 points in a group.
- Mixed levels ("Revenue grew 9%" alongside "We need a new strategy").
- A conclusion appearing only at the end.

## Variants by context
- **Board paper:** the governing thought is the recommendation and resolution; sections follow the key-line.
- **Status report:** the governing thought is overall status plus decisions needed; groups are achievements, issues and next steps.
- **Analytical report:** the governing thought is the main finding; groups are supporting findings, each with evidence.
- **Speech or verbal briefing:** the same pyramid, with signposting ("Three reasons. First…").

## Output format

```markdown
## Pyramid: [document]
**Governing thought:** ...
├─ 1. [Claim, as an insight sentence]
│   ├─ evidence
│   └─ evidence
├─ 2. [Claim]
└─ 3. [Claim]

**Logic type:** inductive / deductive - why  |  **Order:** chronological / structural / importance
**Gaps found:** ...

### Rewritten version
[Opening paragraph with the governing thought]
[Sections with message headings]
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] One governing thought, in a single sentence.
- [ ] Groups are MECE, at the same abstraction, deliberately ordered.
- [ ] Headings state insights, not labels.
- [ ] Evidence sits under each claim; unsupported claims are flagged.
- [ ] The rewritten text leads with the point.

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
- `mece-check`: Audit any list, structure or storyline for overlaps and gaps, then fix it.
- `executive-summary`: Write a one-page executive summary a busy leader can act on in two minutes.
- `executive-email`: Write a short email or message that gets a senior person to read, decide and reply.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
