---
name: risk-assessment
description: "Builds a risk assessment and register for a project, programme, decision, function or business: context and objectives at risk, structured identification across strategic, financial, operational, technology and cyber, people, legal and regulatory, third-party, reputational and ESG categories, risks written as cause-event-consequence, likelihood and impact on calibrated scales, existing controls and their effectiveness, inherent and residual ratings versus appetite, treatment decisions (reduce, accept, transfer, avoid) with owners and dates, key risk indicators with thresholds, interdependencies, and a leadership summary. Use for project planning, board papers, investment cases, audits and periodic risk reviews."
---

# Risk Assessment

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a register that identifies the risks that could really derail the objective, tells you which controls actually work, and assigns clear actions and early-warning indicators, instead of a generic list nobody reads.

## The senior standard
1. **Risk is uncertainty about objectives.** Start from what you're trying to achieve; risks are what could stop it (or create upside opportunities).
2. **Write risks properly:** "Because of [cause], [event] may occur, leading to [consequence]." This distinguishes risks from issues (already happening) and from vague worries.
3. **Calibrated scales.** Define what each likelihood and impact level means (in ₹, time, safety, reputation, regulatory) so ratings are comparable and defensible.
4. **Controls are assessed, not listed.** Is the control designed well, and does it operate? Evidence beats assertion.
5. **Residual vs appetite.** Compare residual risk with the organisation's appetite; act where it exceeds tolerance.
6. **Owners and indicators.** Each significant risk has one owner and a key risk indicator (KRI) that moves before the risk materialises.
7. **Interdependencies and concentrations.** Risks cluster (e.g. one vendor behind three risks). Show them.

## Before you start: diagnose
- Objectives and scope (project, unit, decision); time horizon.
- Risk appetite and existing scales (use the organisation's if they exist).
- Known incidents, audit findings and near misses.
- Stakeholders to involve (operations, finance, legal, IT, HR, partners).

## Method
1. **Context:** objectives, scope, key assumptions, stakeholders, internal and external context.
2. **Identify risks** using several lenses:
   - **Categories:** strategic, financial, operational, technology and cyber, people, legal and regulatory, third-party and supply chain, reputational, ESG, AI.
   - **Process walk-through:** what can fail at each step.
   - **Assumptions:** what if each key assumption is wrong.
   - **Past incidents** and peers' failures.
   - **Pre-mortem** (see `pre-mortem`).
3. **Write each risk** as cause-event-consequence. Merge duplicates; separate issues into an issue log.
4. **Rate inherent risk:** likelihood (1-5) × impact (1-5) using defined scales. Note the rationale.
5. **Controls:** list existing preventive and detective controls; rate effectiveness (effective, partially effective, ineffective) with evidence.
6. **Residual rating** after controls; compare with appetite and tolerance.
7. **Treatment:**
   - **reduce** (new controls or actions);
   - **accept** (record who accepts, why, until when);
   - **transfer** (insurance, contracts);
   - **avoid** (change the plan).
   Assign an owner and a due date.
8. **KRIs:** a leading indicator and threshold per significant risk.
9. **Interdependencies:** link related risks; identify concentrations and single points of failure.
10. **Summary:** a heat map (inherent → residual), the top 5-10 risks, actions overdue, risks outside appetite, and emerging risks.
11. **Review cadence:** monthly for projects, quarterly for business units; on major change.

## Judgement calls
- **Opportunities** (upside risks) can be included. Many decisions need both sides.
- **Low-likelihood, high-impact risks** (cyber, safety, fraud, regulatory) need attention even if their scores look moderate. Consider scenario and stress tests.
- **Avoid the "everything amber" register.** If nothing is red, ask whether the scales are calibrated or whether people are reluctant to report.
- **Risk acceptance is a decision** by someone with authority, not a default.

## Red flags
- Risks written as single words ("Cyber", "People").
- Issues logged as risks.
- Controls listed without effectiveness ratings.
- No owners or KRIs; actions without dates.
- Ratings unchanged quarter after quarter.

## Variants by context
- **Projects:** schedule, cost, scope, vendor, integration, adoption; contingency linked to quantified risks.
- **Investments and M&A:** valuation, integration, key-person, regulatory approval, hidden liabilities.
- **Operations:** safety, quality, supply continuity, asset failure, cyber and OT.
- **Financial services:** credit, market, liquidity, operational, conduct, model and AI risk; regulatory taxonomies.
- **AI systems:** use `ai-risk-register` for AI-specific taxonomies.

## Output format

```markdown
## Risk Assessment: [scope], [date]
**Objectives:** ...  |  **Scales:** likelihood 1-5 (...), impact 1-5 (...)

| # | Risk (cause - event - consequence) | Category | L | I | Inherent | Controls (effectiveness) | Residual | vs appetite | Treatment | Owner | Due | KRI (threshold) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|

**Heat map:** inherent → residual (counts by zone)
**Top risks:** ...
**Accepted risks:** risk - accepted by - rationale - until
**Interdependencies / concentrations:** ...
**Issues (already happening):** ...
**Review cadence:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Risks are tied to objectives and written as cause-event-consequence.
- [ ] Calibrated scales are defined; the rating rationale is noted.
- [ ] Control effectiveness is assessed with evidence.
- [ ] Residual risk is compared with appetite; treatments have owners and dates.
- [ ] KRIs with thresholds for significant risks.
- [ ] Interdependencies, accepted risks and issues are separated and shown.

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
- `pre-mortem`: Imagine the project has failed, explain why, and fix those causes now.
- `risk-appetite`: Draft a board risk appetite statement with qualitative positions and measurable limits.
- `ai-risk-register`: Build a risk register for AI use cases: classify, score, control and assign owners.
- `implementation-roadmap`: Turn a recommendation into a phased roadmap with workstreams, milestones, dependencies and quick wins.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
