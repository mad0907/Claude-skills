---
name: action-titles
description: "Rewrites slide and section titles as action titles: full-sentence takeaways of about 15 words or fewer that state the so-what with a number, are fully supported by the slide body, read in sequence as the complete storyline, and avoid overclaiming, jargon and topic labels; flags slides with no message to cut or merge. Use on every deck before it goes to a senior audience, or to convert an analysis deck into a decision deck."
---

# Action Titles

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a deck whose titles alone tell the story, so a busy executive can skim the titles in a minute and know the argument, with each slide's evidence proving its title.

## The senior standard
1. **Title = takeaway.** A full sentence with a subject, a verb and a so-what. Not a topic ("Market overview").
2. **Numbers where possible.** "Revenue grew 9%, but all of it came from price" beats "Revenue growth was price-led".
3. **Titles prove the story horizontally.** Read in sequence, titles should form the storyline (SCQA plus key-line) with no gaps or leaps.
4. **The body proves the title vertically.** If the chart doesn't show it, change the title or the chart. No overclaiming.
5. **One message per slide.** Two messages means two slides, or one that isn't clear yet.
6. **Short and plain:** ~15 words, two lines maximum; no undefined acronyms; active voice.

## Before you start: diagnose
- The deck, or its slide list with content.
- The storyline (answer and key-line). If none exists, draft one first (see `scqa-storyline`).
- Audience vocabulary and sensitivity (e.g. a regulator or client).

## Method
1. **Extract** the current titles and summarise each slide's actual content in one line.
2. **For each slide,** identify the single takeaway the evidence supports, and why it matters to the storyline.
3. **Write the action title:** [subject] [finding with a number] [implication]. Examples:
   - "Three product lines earn 81% of profit on 46% of revenue."
   - "Delaying six months costs ₹40 lakh a month in lost margin."
4. **Calibrate the claim** to the evidence strength ("suggests" or "indicates" for directional evidence; firm verbs for strong evidence).
5. **Horizontal read:** list all titles in order. Check the flow (situation → complication → answer → support → next steps), and fix gaps, repetition and leaps.
6. **Vertical check:** does the body prove the title? Note required changes to exhibits.
7. **Flag slides** whose title can't be written (no message) → cut, merge or move to the appendix.
8. **Section dividers** carry message headlines too ("Three reasons to act now").

## Judgement calls
- **Sensitive audiences:** keep titles factual and non-inflammatory ("Complaint volumes rose 30% after the policy change" rather than "The policy change failed customers").
- **Appendix slides** can have descriptive titles; main-deck slides cannot.
- **Agenda and summary slides** are the exceptions; the executive summary slide has the governing thought as its title.
- **Avoid cleverness.** Puns and rhetorical questions slow comprehension.

## Red flags
- Topic labels ("Financial analysis", "Next steps").
- Titles over three lines, or full of acronyms.
- Titles that claim more than the chart shows.
- A horizontal read that doesn't make sense.
- Multiple messages packed into one title.

## Variants by context
- **Board decks:** titles linked to the decision and risks; conservative claims.
- **Client or consulting decks:** titles carry the recommendation logic; each section opens with a summary title.
- **Investor decks:** titles show traction and economics with numbers.
- **Internal updates:** status-oriented titles ("Migration is 3 weeks late because of data quality; recovery plan needs ₹45 lakh").

## Output format

```markdown
## Action Titles: [deck]

| # | Old title | New action title | Body supports it? (change needed) |
|---|---|---|---|

**Storyline read (titles only):**
1. ...
2. ...

**Slides to cut / merge / move to appendix:** ...
**Exhibit changes needed:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Every main-deck title is a sentence with a so-what, ≤ ~15 words, numbers where possible.
- [ ] Claims are calibrated to the evidence.
- [ ] The titles alone tell the storyline without gaps.
- [ ] Slides with no message are flagged.
- [ ] Needed exhibit changes are listed.

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
- `ghost-deck`: Draft the whole deck as titles and sketched exhibits before doing the analysis, so the work stays focused.
- `slide-copy-editor`: Tighten slide text: fewer words, clearer claims, consistent style, no jargon.
- `deck-quality-check`: A senior-partner style review of a deck: storyline, logic, evidence, numbers and visual consistency.
- `exhibit-builder`: Design a complete, board-ready exhibit: title, chart, callouts, source, and the code to draw it.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
