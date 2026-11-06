---
name: raci-builder
description: "Builds a RACI (Responsible, Accountable, Consulted, Informed) matrix and, for key decisions, a decision-rights view, for a process, programme, operating model or governance forum: activities and decisions in verb-object form, roles not names, exactly one Accountable per row, checks for overload, gaps, excessive consultation and segregation-of-duties conflicts, escalation paths, and a sign-off and communication plan. Use when roles are unclear, decisions stall or get reopened, audit flags ownership gaps, or a new process, programme or organisation starts."
---

# RACI Builder

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** clarity about who does what and who decides, so work stops falling between chairs, decisions stop being reopened, and control requirements such as segregation of duties are visibly met.

## The senior standard
1. **One Accountable per row.** Two A's means none. The Accountable owns the outcome and signs off.
2. **Roles, not names.** Matrices outlive people. Map names to roles separately.
3. **Decisions deserve special treatment.** For the critical decisions, specify who recommends, who must agree (a veto), who gives input, who decides and who executes. Fewer vetoes means faster decisions.
4. **Consult sparingly.** Each Consulted adds time. Include only those whose input changes the outcome, or who have a legal or control role.
5. **Check the columns, not just the rows.** Overloaded roles (many R's or A's) and idle roles reveal design problems.
6. **Controls built in.** Segregation of duties (preparer ≠ approver; requester ≠ payer) must be visible and respected.
7. **Agree and publish.** A RACI that hasn't been agreed with the people in it is a draft.

## Before you start: diagnose
- Scope: a process, programme, forum, operating model.
- Roles involved; known pain points (delays, disputes, audit findings).
- Control requirements (financial, regulatory, AI or model governance).

## Method
1. **List activities and decisions** in process order, as verb + object ("Approve vendor bank-detail change"). Mark key decisions.
2. **List roles** (columns).
3. **Assign R, A, C, I;** exactly one A per row; at least one R.
4. **For key decisions,** add the decision-rights view: recommend, agree (veto), input, decide, perform.
5. **Row checks:** missing A or R; A without the authority to decide; too many C's.
6. **Column checks:** overload (too many R's or A's for the role's capacity); roles with no involvement (unnecessary?); an A far from the work (too senior?).
7. **Control checks:** segregation of duties (the same role can't be R for preparation and A for approval of the same transaction where controls require separation); delegation limits.
8. **Escalation paths:** when there is disagreement or an exception, who decides, and in what time frame.
9. **Validate** with role-holders; resolve conflicts with the sponsor; publish with a version and a review date.

## Judgement calls
- **The A should sit at the lowest level with the authority and information** to decide. Pushing every A to the top creates bottlenecks.
- **In matrices,** agree tie-breakers explicitly (e.g. product owner vs function head).
- **Programmes:** distinguish the project RACI (temporary) from the business-as-usual RACI (permanent), and plan the handover.
- **Regulated activities** may have mandated roles (e.g. a compliance officer's approval). Reflect them, and don't dilute them.

## Red flags
- Two A's on a row; no A.
- Everyone consulted on everything.
- Names instead of roles.
- The same role preparing and approving payments.
- A RACI never shared with the people in it.

## Variants by context
- **Financial close and payments:** segregation of duties, approval limits, reconciliation ownership.
- **AI and model governance:** model owner, validator (independent), risk approver, business owner, and the incident decision-maker.
- **Programme governance:** sponsor, SteerCo, programme director, workstream leads, PMO.
- **Shared services / GCC:** the service owner in the centre vs the business owner; SLA governance.
- **Board and committees:** matters reserved to the board vs delegated to committees and management.

## Output format

```markdown
## RACI: [scope], v[x], [date]

| Activity / decision | Role 1 | Role 2 | Role 3 | Role 4 | Role 5 |
|---|---|---|---|---|---|

**Key decisions: decision rights**
| Decision | Recommends | Agrees (veto) | Input | Decides | Performs |
|---|---|---|---|---|---|

**Checks:** rows without a single A: ... | overloaded roles: ... | excess C's: ... | segregation-of-duties conflicts: ...
**Escalation paths:** ...
**Open issues for sponsor:** ...
**Role-to-name mapping (separate, confidential):** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Verb-object activities; roles as columns.
- [ ] Exactly one A per row; at least one R.
- [ ] Decision rights specified for key decisions.
- [ ] Overload, consultation and segregation-of-duties checks done.
- [ ] Escalation paths; a validation and publication plan.

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
- **Skill-specific:** Plans and estimates are starting points. Validate effort, cost and people impacts with the teams who will deliver them, and follow your HR and legal processes for people changes.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `operating-model`: Design how the organisation will work: structure, processes, people, technology, governance and locations.
- `implementation-roadmap`: Turn a recommendation into a phased roadmap with workstreams, milestones, dependencies and quick wins.
- `stakeholder-map`: Map who matters, where they stand, and the plan to move each of them.
- `change-plan`: Plan the people side of change: impact by group, messages, training, resistance and adoption measures.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
