---
name: mece-check
description: "Audits any list, structure, segmentation, storyline, agenda, org design or option set for MECE quality (mutually exclusive, collectively exhaustive): defines the whole being covered, detects overlaps with concrete examples, finds gaps by edge-case testing, diagnoses mixed splitting logic and level inconsistency, and proposes a cleaner single-logic structure with a mapping of every original item. Use whenever you have categories, workstreams, drivers, reasons or options, before assigning work or presenting."
---

# MECE Check

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a structure where every item has exactly one home and nothing is missing. That means no duplicated work, no blind spots, and an argument that holds together.

## The senior standard
1. **Define the "whole" first.** You can't test exhaustiveness without knowing what the list is meant to cover (e.g. "all sources of revenue growth in FY27", "all costs in the P&L").
2. **One logic per level.** Most MECE failures come from mixing dimensions (channel vs region vs customer type) in one list.
3. **Test with real examples.** Push 10-20 real cases through the structure: each should land in exactly one bucket.
4. **Exhaustive within materiality.** A small "other" bucket is fine if it is sized and immaterial. A large "other" is a design failure.
5. **Same level of abstraction.** Siblings should be comparable ("Asia" next to "Mumbai" is a level error).
6. **MECE serves usefulness.** A perfectly MECE structure that doesn't help the decision is still wrong. Pick the logic that best supports the decision.

## Before you start: diagnose
- What is the structure for (analysis, work allocation, a storyline, an org design)?
- What is the whole?
- What real cases or data can be used to test it?

## Method
1. **State the whole** and its boundary (time, scope).
2. **Identify the logic** of the current items (formula, process, segment, stakeholder, time, other). Flag mixed logics.
3. **Overlap test:** for each pair of items, can one real example belong to both? Record each overlap with an example.
4. **Gap test:** brainstorm edge cases and push real data through. Record anything that fits nowhere, with a rough size.
5. **Level test:** are siblings at the same level of detail?
6. **Redesign:** choose the logic that best serves the purpose:
   - **mathematical** (adds or multiplies to the whole);
   - **process** (sequential stages);
   - **segment** (non-overlapping definitions with explicit rules);
   - **binary** (A / not-A);
   - **framework** (with stated assumptions).
   Write explicit inclusion rules for segments.
7. **Map** every original item to its new home; flag items that were really cross-cutting themes (handle these as enablers or lenses, not buckets).
8. **Re-test** the new structure with the same cases.

## Judgement calls
- **Cross-cutting themes** (digital, AI, sustainability) often break MECE when listed alongside functional buckets. Treat them as lenses applied across buckets, or as enablers.
- **Organisational designs can't always be MECE** (matrix structures). Make overlaps explicit with decision rights (see `raci-builder`).
- **Storylines:** supporting arguments should be MECE relative to the claim. Overlapping reasons weaken credibility.
- **Don't let MECE purity paralyse.** For brainstorming, generate freely first; structure afterwards.

## Red flags
- No defined whole.
- Lists mixing dimensions ("new customers, digital, pricing, Asia, partnerships").
- A large "other" bucket.
- Siblings at different levels.
- Segment definitions without inclusion rules (e.g. "SME" with no size threshold).

## Variants by context
- **Workstreams:** test with real activities. Each activity has exactly one owner workstream; cross-cutting enablers are listed separately.
- **Customer segmentation:** rules-based, non-overlapping definitions, plus a test on the customer file.
- **Agendas:** each topic once; decisions vs updates separated.
- **Option sets:** options should be mutually exclusive choices; if they can be combined, say so and present combinations explicitly.
- **Risk categories:** align to a standard taxonomy; map overlaps (e.g. cyber vs operational) with a primary-category rule.

## Output format

```markdown
## MECE Check: [structure]
**The whole:** ...  |  **Purpose:** ...  |  **Verdict:** Pass / Needs work - why

| Issue | Type (overlap / gap / mixed logic / level) | Example | Size / impact |
|---|---|---|---|

**Proposed structure (logic: ...)**
1. ... (inclusion rule: ...)
2. ...
Cross-cutting lenses / enablers: ...

**Mapping:** original item → new home
**Re-test with cases:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] The whole and the purpose are defined.
- [ ] Overlaps and gaps are shown with real examples and sizes.
- [ ] Mixed logic and level issues are diagnosed.
- [ ] The new structure uses one logic per level, with inclusion rules.
- [ ] Every original item is mapped; cross-cutting themes are handled as lenses.
- [ ] Re-tested with cases.

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
- **Skill-specific:** Framing reflects only the context you provide. Confirm the problem definition with your sponsor and stakeholders.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `issue-tree`: Break a big question into a logical tree of smaller questions you can actually answer.
- `pyramid-structure`: Structure any argument top-down: answer first, grouped support, evidence below.
- `customer-segmentation`: Group customers by needs and value so you can focus, price and serve them differently.
- `deck-quality-check`: A senior-partner style review of a deck: storyline, logic, evidence, numbers and visual consistency.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
