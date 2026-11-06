---
name: steerco-update
description: "Writes a one-page steering committee or programme status update that drives decisions: decisions required first with options and recommendation, honest overall status with explicit criteria for red, amber and green, milestone forecast versus baseline with variance explanations, budget actuals and forecast, benefits and KPI progress, top risks and issues with owners and dates, dependencies and asks from other teams, and next-period focus; avoids the green-outside-red-inside status. Use for weekly or monthly programme reporting, SteerCos, sponsor updates and board programme reporting."
---

# SteerCo Update

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a status update that gets the SteerCo to make the decisions only it can make, tells the truth early, and takes five minutes to read.

## The senior standard
1. **Decisions first.** The SteerCo's job is to decide and unblock. Lead with what you need from them, with options and a recommendation.
2. **Honest status with defined criteria.** Green, amber and red are defined in advance (e.g. amber = at risk but recoverable within tolerance with current resources; red = needs SteerCo intervention or will breach tolerance). Report trends, not just colours.
3. **Forecast, not just progress.** Show forecast dates vs baseline, and forecast cost at completion vs budget. Explain variances.
4. **Benefits, not only activity.** Once in delivery, report adoption and benefits against plan.
5. **Risks and issues with owners and dates.** Show what's changed since last time.
6. **One page, consistent format** every period, so trends are visible.
7. **No surprises.** Pre-wire the sponsor on reds before the meeting.

## Before you start: diagnose
- The audience (SteerCo membership) and their decision rights.
- Baseline plan, budget, benefits and tolerances.
- This period's progress data, risks, issues and decisions needed.
- The previous update (for trends and commitments).

## Method
1. **Decisions required:** for each, the context in one line, options with consequences, the recommendation, and the deadline.
2. **Overall status:** a colour by the defined criteria, with the trend (↑ ↓ →) and a one-line reason. Sub-status for schedule, cost, scope, benefits, risk and people.
3. **Milestones:** baseline vs forecast vs actual; variance reason; recovery action.
4. **Budget:** approved, spent to date, committed, forecast at completion; variance and drivers; contingency used.
5. **Benefits and KPIs:** plan vs actual for adoption and benefits (if in delivery).
6. **Top risks and issues (3-5 each):** what changed, owner, action, date; escalations.
7. **Dependencies and asks:** what you need from other teams or programmes.
8. **Achievements (brief) and next-period focus.**
9. **Commitments from the last meeting:** done / not done.

## Judgement calls
- **Amber is not a hiding place.** If an item has been amber for three periods without recovery, call it red.
- **Bring options, not problems.** Even for reds, propose paths and trade-offs.
- **Separate facts from forecasts.** Label estimates and confidence.
- **Tailor depth.** A board programme update is shorter, more about benefits, risk and decisions; a working SteerCo needs more operational detail.

## Red flags
- Activity lists ("held 12 workshops") instead of progress against milestones.
- Status always green until suddenly red.
- Decisions buried at the end, or none.
- Budget shown as spent-to-date only, with no forecast.
- Risks unchanged for months.

## Variants by context
- **Technology programmes:** testing progress (pass rates, defects by severity), cutover readiness, data migration status.
- **Transformation:** initiative pipeline and benefits banked (see `benefits-tracker`).
- **M&A integration:** day-100 plan, synergy capture, people retention, customer churn.
- **AI programmes:** use-case pipeline by stage, model performance, adoption, incidents, governance approvals.
- **Board-level programme reporting:** quarterly, benefits- and risk-focused, linked to the original business case.

## Output format

```markdown
## SteerCo Update: [programme], [period]
**Overall:** 🟢/🟠/🔴 (trend ↑/→/↓) - reason
Schedule 🟠 | Cost 🟢 | Scope 🟢 | Benefits 🟠 | Risk 🟠 | People 🟢

### Decisions required today
| Decision | Options (consequences) | Recommendation | Needed by |
|---|---|---|---|

### Milestones
| Milestone | Baseline | Forecast | Status | Variance reason / recovery |
|---|---|---|---|---|

### Budget
Approved ... | Spent ... | Committed ... | Forecast at completion ... | Variance ... | Contingency used ...%

### Benefits / KPIs (plan vs actual)
### Top risks and issues (changes since last)
| Item | Type | Owner | Action | Date | Change |
|---|---|---|---|---|---|

### Dependencies / asks
### Last period's commitments: done / open
### Next period focus
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Decisions first, with options and a recommendation.
- [ ] Status uses defined criteria, with a trend and a reason; no long-running amber.
- [ ] Milestone and cost forecasts vs baseline, with variance reasons.
- [ ] Benefits reported when in delivery.
- [ ] Risks and issues with owners, dates and changes.
- [ ] One page, consistent format.

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
- `implementation-roadmap`: Turn a recommendation into a phased roadmap with workstreams, milestones, dependencies and quick wins.
- `benefits-tracker`: Make sure promised benefits are defined, owned, measured and actually delivered.
- `risk-assessment`: Identify, score and plan responses to the risks of a project, decision or business.
- `executive-summary`: Write a one-page executive summary a busy leader can act on in two minutes.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
