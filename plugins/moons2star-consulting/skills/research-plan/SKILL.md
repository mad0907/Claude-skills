---
name: research-plan
description: "Plans focused research before any searching: research questions derived from the decision, classification of each question as fact, estimate or judgement, best source type per question (official statistics, filings, regulators, industry bodies, academic work, internal data, experts, customers, field observation), specific search strings and named source categories, precision needed for the decision, triangulation plan for decision-critical numbers, time boxes, sequencing by biggest unknowns, ethics and compliance rules, and a source log format. Use before desk research, due diligence, market studies, briefings, or when delegating research."
---

# Research Plan

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** research that answers the decision's questions in the time available, from sources you can trust, with every key number cross-checked and traceable, instead of hours of interesting-but-irrelevant reading.

## The senior standard
1. **The decision defines the questions.** List the 5-12 questions whose answers would change the decision. Everything else is optional.
2. **Classify each question.** *Facts* are findable; *estimates* need triangulation; *judgements* need expert or customer input. Each needs a different method.
3. **Right source for the question.** Primary and official sources beat secondary summaries; recent beats old; independent beats self-interested.
4. **Precision fit for purpose.** ±20% may be enough for a go or no-go; a price decision may need ±5%. Don't over-research.
5. **Triangulate what matters.** Any number that drives the decision needs at least two independent sources, or a source plus a sanity check.
6. **Time-box and sequence.** Attack the biggest unknowns first; stop when the answer is good enough.
7. **Ethics and compliance.** Respect expert-network rules, confidentiality, data protection and copyright.

## Before you start: diagnose
- The decision, the deadline and the audience.
- What is already known (internal data, past studies).
- Access: databases, subscriptions, internal systems, expert networks, customers.
- Constraints: confidentiality (can't reveal the client or intent), budget, language, geography.

## Method
1. **Decision and key questions:** derive them from the issue or hypothesis tree; tie each to the decision.
2. **Classify** each as fact, estimate or judgement.
3. **Source plan per question:**
   - **Official and statistical:** census, national surveys, regulators, central bank, trade data.
   - **Corporate:** annual reports, investor presentations, filings.
   - **Industry:** associations, trade publications.
   - **Academic and think-tank** research.
   - **Internal:** CRM, finance, operations.
   - **Experts:** former industry executives, academics.
   - **Customers:** interviews, surveys.
   - **Field:** store visits, mystery shopping.
4. **Search strings and starting points:** specific queries and source categories for each question.
5. **Precision needed** and **triangulation plan** (which 2+ sources per critical number).
6. **Time boxes** and an **order of attack:** biggest uncertainties and longest lead times (expert calls, surveys, data requests) first.
7. **Source log:** claim | value | source | date | method / definition | reliability grade | link or location.
8. **Ethics and compliance:** no misrepresentation; expert-call compliance (no confidential or price-sensitive information); data protection for personal data; licence terms for paid content.
9. **Stop rule:** when each critical question reaches the needed precision, or the time box ends; record residual uncertainty.

## Judgement calls
- **Secondary summaries are leads, not evidence.** Trace numbers to their primary source.
- **Beware definitional drift** across sources (e.g. "SME" definitions, gross vs net figures). Record the definitions.
- **When data doesn't exist,** design a quick primary method (5-10 expert calls, a small survey, a field visit) rather than relying on weak secondary estimates.
- **Note what would change the answer,** and prioritise research there.

## Red flags
- Questions not linked to the decision.
- A single source for the key number.
- Undated sources; unknown definitions.
- Expert calls planned without compliance guardrails.
- No time boxes; research continues past the decision date.

## Variants by context
- **Due diligence:** a data-room-first plan, plus management sessions, expert calls, customer references, red-flag checks.
- **Market entry:** regulatory and licensing, market size, competitors, channels, local partners, costs.
- **Board briefing:** authoritative sources, concise synthesis, dated facts.
- **Policy or regulatory analysis:** primary legal texts, regulator consultations, enforcement actions.
- **Technology scouting:** standards bodies, academic preprints, product documentation, pilot evidence.

## Output format

```markdown
## Research Plan: [topic], for [decision], by [date]

| # | Question | Type (fact / estimate / judgement) | Best sources | Starting searches | Precision needed | Triangulation | Time box | Owner |
|---|---|---|---|---|---|---|---|---|

**Order of attack:** ...
**Source log format:** claim | value | source | date | definition | grade | link
**Ethics and compliance rules:** ...
**Stop rule:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Every question links to the decision; types are classified.
- [ ] Sources fit each question; primary and official sources prioritised.
- [ ] Precision targets and triangulation for critical numbers.
- [ ] Time boxes and sequencing; long-lead items first.
- [ ] Source log and ethics rules defined; a stop rule.

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
- `source-validation`: Grade every source and claim for reliability so you never put a weak number in front of a board.
- `research-synthesis`: Turn piles of notes, reports and links into a few clear findings with evidence and implications.
- `interview-guide`: Write a crisp guide for expert, customer or employee interviews that gets real answers, not opinions.
- `market-sizing`: Size a market top-down and bottom-up, reconcile the two, and show every assumption.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
