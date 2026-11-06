---
name: scqa-storyline
description: "Builds the storyline for any executive deck, memo, board paper or talk using Situation, Complication, Question, Answer, with a key-line of three to five supporting arguments, chooses the right ordering for the audience (answer-first for executives, or a fuller lead-in for sceptical audiences), tests the flow, and produces a 30-second verbal version and a one-line headline. Use at the start of any document, when a draft is a data dump, or to prepare a short verbal summary."
---

# SCQA Storyline

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a storyline that gets an executive to "yes" quickly. The context is shared, the tension is clear, the answer is unambiguous, and three solid reasons hold it up, before a single slide is designed.

## The senior standard
1. **Story before slides.** Agree the storyline with the sponsor before building exhibits. It saves days of rework.
2. **The situation is uncontroversial.** It states facts the audience already accepts, so they nod.
3. **The complication creates tension** with a number or trigger: what changed, what's at risk, what happens if we do nothing.
4. **The question is the one the audience is now asking,** usually "What should we do?" or "How do we…?"
5. **The answer is an action,** specific enough to approve, with scale and timing.
6. **The key-line holds the answer up.** 3-5 supporting points, each a full sentence, MECE, and each provable with evidence.
7. **Order for the audience.** Executives usually want the answer first (A-S-C or A then the key-line). Sceptical or unfamiliar audiences need more S-C before the answer.

## Before you start: diagnose
- Audience and their current beliefs (use `audience-brief`).
- The recommendation (or current best hypothesis) and the decision needed.
- Key evidence available.
- The format: a 2-minute verbal, a 1-page memo, a 10-slide deck, a board paper.

## Method
1. **Draft the answer first**, in one sentence: action + scale + timing (+ cost or benefit).
2. **Situation:** 1-2 sentences of accepted context, briefly; avoid history lessons.
3. **Complication:** 1-2 sentences, with the trigger or tension and a number.
4. **Question:** the natural question raised (may stay implicit in the final document).
5. **Key-line:** 3-5 reasons why the answer is right, typically covering why (it solves the problem), why this option (vs the alternatives), why it's feasible or affordable, and why now or how risk is managed. Write each as a sentence with a number.
6. **Check the logic:**
   - Does S → C → Q flow naturally?
   - Does the answer answer Q?
   - Are the key-line points MECE and sufficient?
   - Can each be proven with available evidence?
7. **Choose the ordering** for the audience; draft the opening paragraph accordingly.
8. **Produce:** a one-line headline; a 30-second verbal version; a section or slide outline mapping the key-line to sections.

## Judgement calls
- **Complication vs crisis.** Overstating the complication damages credibility. Use the real number.
- **Multiple complications** usually mean multiple storylines. Pick the one tied to the decision.
- **When the answer is unwelcome,** spend more time on S-C to build shared understanding, and acknowledge the costs openly in the key-line.
- **For discussion papers** (no recommendation yet), the "answer" is the framing of options and the decision to be made, not a pretend conclusion.

## Red flags
- A situation that reads like a company history.
- A complication with no number or trigger.
- An answer that is a topic ("Our digital strategy").
- Key-line points that overlap, or that are activities rather than reasons.
- The storyline drafted after the slides are built.

## Variants by context
- **Board paper:** answer-first executive summary; key-line becomes the paper's sections.
- **Investor pitch:** situation = market; complication = unmet need or inefficiency; answer = company and plan; key-line = traction, model, team, use of funds.
- **Bad news / incident update:** answer = what we're doing; key-line = what happened, impact, fix, prevention.
- **Change communication to employees:** situation = shared reality; complication = why staying the same isn't an option; answer = the change; key-line = what it means for you, support, timeline.

## Output format

```markdown
## Storyline: [topic]
**Headline (one line):** ...

**Situation:** ...
**Complication:** ...
**Question:** ...
**Answer:** ...

**Key-line**
1. [Reason, with number]
2. ...
3. ...

**Ordering for this audience:** answer-first / S-C-A - why
**30-second verbal version:** ...
**Section / slide outline:** key-line point → sections or slides
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] The situation is uncontroversial; the complication has a number or trigger.
- [ ] The answer is an action with scale and timing.
- [ ] Key-line points are full sentences, MECE, evidence-backed, 3-5 of them.
- [ ] The ordering suits the audience; the verbal version fits 30 seconds.
- [ ] The outline maps the key-line to sections.

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
- `pyramid-structure`: Structure any argument top-down: answer first, grouped support, evidence below.
- `executive-summary`: Write a one-page executive summary a busy leader can act on in two minutes.
- `ghost-deck`: Draft the whole deck as titles and sketched exhibits before doing the analysis, so the work stays focused.
- `audience-brief`: Profile who you are persuading: what they care about, what they already believe, and what would change their mind.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
