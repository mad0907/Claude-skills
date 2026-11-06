---
name: issue-tree
description: "Breaks a key business question into a logically complete issue tree, diagnostic (why) or solution (how), using the strongest available splitting logic (mathematical, process, segment, stakeholder or framework), checked for mutual exclusivity and completeness at every level, down to answerable leaf questions with the analysis, data source, owner and priority for each, plus explicit pruning. Use to structure any problem, plan analysis, divide work across a team, or bring order to a circular discussion."
---

# Issue Tree

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a map of the problem that ensures nothing important is missed and nothing is done twice. Every branch ends in a question that a specific analysis can answer, and the team knows which branches to work on first.

## The senior standard
1. **One question at the top,** taken from the agreed problem statement.
2. **Choose the tree type deliberately.** A **diagnostic tree** ("Why is margin falling?") finds causes. A **solution tree** ("How could we raise margin by 3 points?") generates options. Don't mix them in one tree.
3. **Splitting logic quality determines tree quality.** Best to worst:
   - **mathematical** (profit = revenue − cost; revenue = volume × price);
   - **process or value chain** (acquire → onboard → serve → renew);
   - **segment** (by customer, product, geography, channel);
   - **stakeholder** (customers, employees, suppliers, regulators);
   - **framework-based** (internal vs external; the five forces).
   Avoid loose lists.
4. **MECE at every level.** No overlaps, so work isn't duplicated; no gaps, so the cause isn't missed.
5. **Leaves are answerable questions** linked to a specific analysis and data source, not topics.
6. **Prioritise and prune.** Work the leaves with the highest expected impact and uncertainty first. Explicitly drop branches that can't change the decision.

## Before you start: diagnose
- The key question (from `problem-statement`) and the decision it serves.
- Diagnostic or solution orientation.
- Available data and time; team size (the tree becomes the work split).

## Method
1. **Write the key question** at the root.
2. **First split:** pick the strongest logic available. Write 2-5 branches. Test MECE: could any example sit in two branches (overlap)? Is there a case that fits none (gap)?
3. **Decompose each branch** 2-4 more levels, preferably using different logics at different levels (e.g. mathematical at level 1, segment at level 2, process at level 3).
4. **Turn leaves into questions:** "Did X change?", "Is Y above benchmark?", "Could Z deliver ≥₹10 Cr?"
5. **Annotate each leaf:** the analysis (e.g. price-volume-mix bridge, cohort analysis, benchmark), the data source, owner, effort (S/M/L), and priority (impact × likelihood × uncertainty).
6. **Prune:** mark leaves that are unlikely or immaterial, and say why.
7. **Sequence:** order the high-priority leaves; note dependencies.
8. **Visualise:** an indented outline (and optionally a simple text diagram).

## Judgement calls
- **When no mathematical split exists,** use process or segment splits and state the assumption that makes them complete.
- **"Other" is allowed** at a level, if it is small and checked for size.
- **For diagnostic trees,** quantify each branch early (e.g. a revenue bridge) to drop small branches fast.
- **Revisit the tree** as evidence arrives. It's a working tool, not a deliverable.

## Red flags
- Branches that overlap ("cost" and "efficiency"; "digital" and "marketing").
- Leaves that are topics ("IT", "people").
- Levels mixing dimensions (product lines alongside regions).
- No priorities; every branch worked equally.
- A tree that mixes why and how.

## Variants by context
- **Profitability problems:** profit = (price − unit cost) × volume − fixed costs; then segment and process.
- **Growth questions:** revenue = customers × frequency × spend; or the product-market matrix.
- **Operational problems:** process steps × failure modes; capacity = resources × productivity × availability.
- **People and organisation:** attraction → selection → onboarding → development → retention.
- **Risk or incident analysis:** cause categories (people, process, technology, external) at each process step.

## Output format

```markdown
## Issue Tree: [key question]
**Type:** Diagnostic (why) / Solution (how)  |  **Level-1 logic:** ...

1. Branch A
   1.1 Question
       - Analysis: ... | Data: ... | Owner: ... | Effort: S/M/L | Priority: H/M/L
   1.2 ...
2. Branch B
   ...

**MECE check:** level 1 ✓ (logic: ...), level 2 ✓ ...
**Work first (top 3-5 leaves):** ...
**Pruned (and why):** ...
**Sequence and dependencies:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] A single root question; the tree type is stated and not mixed.
- [ ] The splitting logic is stated per level; MECE checked at each level.
- [ ] Leaves are answerable questions with an analysis, data source and owner.
- [ ] Priorities and pruning are explicit.
- [ ] Early quantification is used to focus (diagnostic trees).

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
- `mece-check`: Audit any list, structure or storyline for overlaps and gaps, then fix it.
- `hypothesis-tree`: Start from a likely answer, then list exactly what must be true and how you would prove or kill it.
- `engagement-workplan`: Turn the issue tree into a week-by-week plan: analyses, owners, data, meetings and deliverables.
- `kpi-driver-tree`: Break a top metric into the drivers people can act on, with owners and targets.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
