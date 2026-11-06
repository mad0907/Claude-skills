---
name: engagement-workplan
description: "Converts a problem statement and issue or hypothesis tree into an executable, hypothesis-driven workplan for a study, project or consulting engagement: workstreams tied to tree branches, analyses with input data and output exhibits, an early answer-first storyline milestone, sponsor and steering checkpoints with defined purposes, data-request critical path, team roles and capacity, buffers, risks to the plan, and a weekly rhythm. Use when kicking off a 2-16 week piece of work, re-planning after scope change, or showing a sponsor how the work reaches an answer on time."
---

# Engagement Workplan

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a plan that reaches a defensible answer on a fixed date. Every analysis traces to the question, data is requested early, a draft storyline exists well before the end, and the sponsor is engaged at the right moments.

## The senior standard
1. **Plan backwards from the decision date.** Final deliverable → draft storyline → key analyses → data receipt → kick-off.
2. **Every analysis must earn its place** by answering a leaf of the issue or hypothesis tree. Interesting-but-irrelevant analyses get cut.
3. **Answer first.** A draft storyline (ghost deck) by roughly a quarter to a third of the timeline focuses the team and surfaces gaps early.
4. **Data is the usual critical path.** Request on day 1-2, with owners and dates; have fallbacks (proxies, samples).
5. **Sponsor touchpoints have a purpose:** align, test hypotheses, decide. No surprises at the final meeting.
6. **Capacity is real.** Match workload to people, including client or business counterparts; keep a 10-20% buffer.

## Before you start: diagnose
- Problem statement, key question, decision date and audience.
- The issue or hypothesis tree (or create one now).
- Team (size, skills), business counterparts, availability.
- Data availability and access lead times; fixed dates (board, budget, SteerCos, holidays).

## Method
1. **Workstreams:** group the tree's leaves into 3-5 workstreams, each with a lead and a counterpart.
2. **Analysis plan per workstream:** analysis → question answered → input data → method → output exhibit → owner → effort → due date.
3. **Data request list:** item, source system or owner, format, period, due date, status, fallback.
4. **Milestones (working backwards):**
   - **Final:** decision meeting and pre-reads (e.g. 7 days before).
   - **Draft final storyline** about 2 weeks before.
   - **Interim findings or hypothesis test** at the midpoint.
   - **Ghost deck v1** at 25-33%.
   - **Data received** in the first 20-25%.
   - **Kick-off** in week 1.
5. **Governance:** sponsor check-ins (weekly, 30 min), SteerCos (purpose and decisions per meeting), team rhythm (daily stand-up; weekly problem-solving session).
6. **Critical path and buffers:** identify the dependencies (data, interviews, approvals); add a 10-20% buffer.
7. **Risks to the plan:** data delays, stakeholder availability, scope creep, analytical dead-ends; mitigations and triggers.
8. **Communication plan:** who gets what, when (status notes, pre-wiring before SteerCos).
9. **Visual plan:** a week-by-week table by workstream.

## Judgement calls
- **Protect the end.** The last 20% of time is for synthesis, storyline and pre-wiring, not new analysis.
- **Ruthless scoping.** New questions mid-stream go to a "parked" list unless the sponsor trades something off.
- **Start interviews early;** calendars are the hidden critical path.
- **Use the first SteerCo to test hypotheses,** not to present a methodology.

## Red flags
- Analyses not linked to the tree.
- The storyline first drafted in the final week.
- Data requested in week 3.
- SteerCos without decisions to make.
- No buffer; the team over-allocated.

## Variants by context
- **Internal strategy studies:** include budget-cycle dates and functional reviewers; pre-wire ExCo members.
- **Due diligence (2-4 weeks):** data room access is the critical path; daily client calls; red-flag reporting early.
- **Transformation diagnostics:** site visits and interviews; quick wins identified in parallel.
- **AI discovery sprints:** workshops, data-readiness checks, use-case scoring, pilot designs (see the AI pack).

## Output format

```markdown
## Workplan: [project], [start] - [decision date]
**Key question:** ...  |  **Sponsor:** ...  |  **Decision meeting:** ...

### Week-by-week
| Week | WS1 | WS2 | WS3 | Milestones / meetings |
|---|---|---|---|---|

### Analysis plan
| Workstream | Analysis | Answers (tree leaf) | Data | Output exhibit | Owner | Due |
|---|---|---|---|---|---|---|

### Data request list
| Item | Owner / source | Format / period | Due | Status | Fallback |
|---|---|---|---|---|---|

### Governance and rhythm
### Critical path, buffer and risks
| Risk | Trigger | Mitigation |
|---|---|---|
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Planned backwards from the decision date.
- [ ] Every analysis maps to a tree leaf and produces an exhibit.
- [ ] Ghost deck by about a third of the timeline; the final 20% protected.
- [ ] Data requests in week 1, with owners and fallbacks.
- [ ] Meetings have purposes and decisions; a buffer is included.
- [ ] Plan risks and mitigations stated.

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
- `research-plan`: Plan exactly what to find out, from which sources, in what order, before searching anything.
- `ghost-deck`: Draft the whole deck as titles and sketched exhibits before doing the analysis, so the work stays focused.
- `steerco-update`: Write a crisp steering committee update: status, decisions needed, risks, and next steps.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
