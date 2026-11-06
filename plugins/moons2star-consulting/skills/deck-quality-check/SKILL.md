---
name: deck-quality-check
description: "Reviews a deck or document the way a demanding senior reviewer would before it reaches a board, client or executive: storyline and answer-first test from titles alone, title-to-evidence support on every slide, logic and MECE groupings, alternatives and counter-arguments, number consistency across slides and against sources, chart honesty and readability, visual and terminology consistency, the clarity of the ask, risk, confidentiality and compliance exposure, and returns prioritised fixes (must-fix, should-fix, nice-to-have) with slide references and an overall readiness verdict. Use before any important deck goes out, or to review a team member's work."
---

# Deck Quality Check

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a candid review that catches what would embarrass you in the room: the storyline problem, the number that doesn't tie, the overclaim, the missing alternative. Every fix is specific and prioritised, so the team can act fast.

## The senior standard
1. **Story first, formatting last.** Most decks fail on the storyline, not on fonts. Review in that order.
2. **Read titles only.** If the titles don't tell a coherent, answer-first story, nothing else matters yet.
3. **Every title must be proven by its slide.** Overclaims damage credibility more than gaps.
4. **Numbers tie.** The same metric shows the same value everywhere and reconciles to its source; totals add; periods and units match.
5. **Anticipate the room.** Have alternatives and counter-arguments been addressed? What's the first hard question?
6. **Specific, prioritised fixes.** "Slide 7: the title claims X; the chart shows Y; change the title to Z" beats "tighten this".
7. **Protect the organisation:** confidential data, UPSI, personal data, client names, third-party claims, compliance statements.

## Before you start: diagnose
- Audience, purpose (decide, inform) and meeting format.
- The deck and its sources (model, data, previous decks).
- Time available before it is sent.

## Method
1. **Titles-only read:** is the answer in the first 1-2 slides? Is the storyline logical? Are there gaps or repetitions? Is there a clear ask?
2. **Slide-by-slide:**
   - one message;
   - title supported by the body;
   - exhibit appropriate and honest;
   - source present;
   - text concise.
3. **Logic:** MECE groupings; inductive support is sufficient; deductive chains are valid; alternatives considered; risks and trade-offs present.
4. **Numbers:** build a quick tie-out list of every key number with slide references. Check consistency and reconcile against the source (model, financials). Recompute derived figures in code.
5. **Visual consistency:** fonts, colours, chart styles, alignment, number formats, terminology, abbreviations, spelling convention.
6. **The ask:** a decision, owner and date are stated; next steps are clear.
7. **Risk and compliance:** confidential or personal data; price-sensitive information; claims about competitors; legal or regulatory statements needing review; correct attribution of sources.
8. **Anticipated questions:** the top 5 tough questions; is each answered in the deck or a backup slide?
9. **Prioritise fixes:**
   - **Must-fix:** would mislead, embarrass or block the decision.
   - **Should-fix:** weakens persuasion.
   - **Nice-to-have:** polish.
10. **Verdict:** ready / ready after must-fixes / needs rework, with a one-line reason.

## Judgement calls
- **Be kind and direct.** Review the work, not the person; explain why each must-fix matters.
- **Don't rewrite the deck in your own style.** Focus on what changes outcomes.
- **When time is short,** fix must-fixes and the ask; leave the polish.
- **If the storyline is wrong,** say so early, even if it means rework. It is cheaper than failing in the room.

## Red flags (in the deck)
- The answer appears on slide 15.
- The same metric shows different values on different slides.
- Charts without sources; truncated axes.
- "Next steps" with no owners or dates; no decision ask.
- Confidential client names or personal data in an external deck.

## Variants by context
- **Board:** check against `board-paper` requirements (purpose, resolution, conflicts, risks).
- **Investor:** consistency with past guidance and disclosures; forward-looking statement caveats; no selective disclosure of price-sensitive data.
- **Client proposal:** client's language; no other client's confidential data; pricing consistency.
- **Regulatory submission:** strict accuracy, defined terms, legal review.

## Output format

```markdown
## Deck Quality Check: [deck], [date]
**Verdict:** Ready / Ready after must-fixes / Needs rework - one line

**Storyline (titles only):** assessment + suggested reorder if needed

| Priority | Slide | Issue | Why it matters | Fix |
|---|---|---|---|---|
| Must-fix | | | | |
| Should-fix | | | | |
| Nice-to-have | | | | |

**Number tie-out:** metric - values found (slides) - source value - status
**Anticipated tough questions:** question - answered on slide? - suggested backup
**Risk / compliance flags:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] The titles-only storyline is assessed first.
- [ ] Every must-fix has a slide reference, a reason and a specific fix.
- [ ] Numbers are tied out across slides and to sources (recomputed in code where possible).
- [ ] The ask, owners and dates are checked.
- [ ] Confidentiality and compliance are reviewed.
- [ ] A clear verdict.

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
- `action-titles`: Rewrite slide titles so each one states the takeaway, and the titles alone tell the story.
- `slide-copy-editor`: Tighten slide text: fewer words, clearer claims, consistent style, no jargon.
- `red-team-review`: Stress-test a plan, argument or document like a tough, fair critic, before your audience does.
- `source-validation`: Grade every source and claim for reliability so you never put a weak number in front of a board.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
