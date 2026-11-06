---
name: ai-pilot-design
description: "Designs an AI or GenAI pilot (proof of value) that produces a decision, not a demo: falsifiable hypothesis, representative scope, measured baseline or control group, metrics in four groups (value, quality, adoption, safety), offline evaluation set plus live evaluation, guardrails and human oversight, statistical sufficiency, run-book and governance, and pre-agreed scale / iterate / stop thresholds including the cost and integration required to scale. Use before any AI pilot, to restart stalled pilots, or to get a pilot approved."
---

# AI Pilot Design

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a pilot that ends in a clear, defensible decision. Success is defined before it starts, the measurement is believable, safety is protected throughout, and the scale-up cost is known. That ends "pilot purgatory".

## The senior standard
1. **Decide the decision first.** Write down what result leads to scale, iterate or stop, before the pilot begins. Thresholds set afterwards are rationalisation.
2. **Representative, not cherry-picked.** Pilot users, cases and data must resemble the scaled reality, including hard cases, languages and less-enthusiastic users.
3. **Measure against a counterfactual.** Use a baseline period or, better, a control group doing the same work without AI.
4. **Four metric groups, always:**
   - **Value:** time, cost, revenue, cash.
   - **Quality:** accuracy, error and rework, customer outcomes.
   - **Adoption:** usage, satisfaction, intent to keep.
   - **Safety:** harmful outputs, policy breaches, bias, data incidents.
5. **Offline and online evaluation.** Test on a curated evaluation set before users see it, then in live use. GenAI especially needs task-specific test sets, not generic benchmarks.
6. **Production-like guardrails from day one.** A pilot with real customers or decisions needs real controls.
7. **Price the scale-up.** Integration, security, licences or inference at full volume, change, and governance. A pilot that cannot be afforded at scale has failed, even if accuracy is high.

## Before you start: diagnose
- Use case, users, process step and current baseline (or how to measure it in 2-4 weeks).
- AI risk tier (affects guardrails and approvals): is anyone outside the organisation affected?
- Data readiness (see `data-readiness-check`); the vendor or build approach.
- Sponsor, business owner, and who decides at the end.
- Constraints: timeline, budget, regulatory approvals, works-council or union consultation if roles change.

## Method
1. **Hypothesis:** "If [users] use [AI capability] for [task], then [primary metric] improves by [x] within [time], without [guardrail metric] getting worse than [threshold]."
2. **Scope:** users (number, selection method), case types (include the hard 20%), channels, languages, duration (typically 6-12 weeks), exclusions.
3. **Counterfactual:** control group (randomised or matched), or before/after with a stable baseline period. Note seasonality and other changes running at the same time.
4. **Metrics and thresholds:**
   | Group | Example metrics | Example threshold |
   |---|---|---|
   | Value | Handling time, cycle time, cost per case | ≥25% reduction |
   | Quality | Error rate in QA sample, rework, accuracy on the evaluation set | No worse than baseline; ≥95% on critical fields |
   | Adoption | Weekly active use, % of eligible tasks using AI, user satisfaction | ≥60% use by week 6 |
   | Safety | Harmful or non-compliant outputs, data-loss events, bias gap | Zero critical; bias gap within tolerance |
5. **Evaluation design:**
   - **Offline:** curated test set (200-1,000 real, anonymised cases with expert answers); pass criteria before go-live.
   - **Online:** human QA sample (e.g. 5-10% of outputs, stratified by difficulty); user feedback capture; automated checks (groundedness, PII leakage).
   - **Sample size:** enough cases to detect the expected effect. Compute it, or use a simple rule: at least a few hundred cases per arm for proportions; more for small effects.
6. **Guardrails:** human-in-the-loop points; data restrictions (what may be sent where); content filters; escalation paths; kill switch; logging; user disclosure where external people are involved.
7. **Run-book:** roles (product owner, AI lead, risk partner, data owner), weekly review, an issue log, change control (no silent prompt or model changes mid-pilot without logging), communications to users.
8. **Governance approvals:** risk tier sign-off, DPIA or privacy review if personal data is involved, security review, and works-council or HR consultation if relevant.
9. **Decision rules** (agree now):
   - **Scale:** all thresholds met for N consecutive weeks, and the scale-up cost is within the business case.
   - **Iterate:** value met but quality or adoption is short, with fixable causes; define one more cycle with a time box.
   - **Stop:** value below the minimum, or any critical safety breach not fixable by design.
10. **Scale-up plan outline:** integration, security, licences or inference at full volume, support model, training, monitoring, and owner. Reuse `ai-business-case`.

## Judgement calls
- **Pick early users carefully but not only enthusiasts.** Include sceptics; their adoption predicts the scaled reality.
- **Novelty fades.** Watch weeks 5-8, not weeks 1-2, for both usage and quality.
- **Measure the cases AI makes harder.** Complex cases may take longer with AI because of verification. Segment the results.
- **Freeze the configuration** for the measurement window. If you must change prompts or models, restart the clock for the affected metrics.
- **A stop is a good outcome** if it is cheap and fast. Celebrate the learning so people keep reporting honestly.

## Red flags
- Success defined as "users liked it".
- Pilot on curated easy cases; no hard cases or minority languages.
- No baseline; before/after across a seasonal change.
- Customer-facing GenAI with no logging or escalation.
- No idea what full-scale inference or licence costs will be.
- The pilot extended indefinitely with "promising" results.

## Variants by context
- **Agentic pilots:** start in recommend-only or shadow mode (the agent proposes, a human executes), then act-with-approval. Measure proposal accuracy and the approval/override rate before any autonomy.
- **Customer-facing:** begin with internal agent-assist; disclose AI use; measure complaint rates and escalation quality, not just containment.
- **Regulated decisions** (credit, claims, hiring): involve the validation function from the start; human makes the final decision; test fairness by group.
- **GCC / multi-region:** pilot in two regions with different languages or processes to test transferability.

## Output format

```markdown
## AI Pilot Design: [use case]
**Hypothesis:** ...
**Scope:** users ... | cases ... | duration ... | exclusions ...
**Counterfactual:** control group / baseline ...

| Group | Metric | Baseline | Threshold | How measured | Frequency |
|---|---|---|---|---|---|

**Evaluation:** offline set (size, pass criteria) | online QA sample | sample-size note
**Guardrails:** ...
**Run-book and roles:** ...
**Approvals needed:** ...
**Decision rules:** Scale if ... | Iterate if ... | Stop if ...
**Scale-up requirements and cost estimate:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] The hypothesis is falsifiable, with a guardrail metric.
- [ ] The scope is representative, including hard cases.
- [ ] A counterfactual is defined.
- [ ] All four metric groups have thresholds.
- [ ] Offline evaluation precedes live use; QA sampling is defined.
- [ ] Guardrails and approvals match the risk tier.
- [ ] Decision rules and scale-up costs are agreed upfront.

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
- **Skill-specific:** Not legal advice on AI or data-protection law. This skill does not replace independent model validation, security testing (including red-teaming), or a formal data protection impact assessment.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `ai-business-case`: Build an honest business case for an AI use case, including model, data, change and run costs.
- `change-plan`: Plan the people side of change: impact by group, messages, training, resistance and adoption measures.
- `responsible-ai-review`: Review an AI system before launch for fairness, transparency, privacy, safety, security and accountability.
- `data-readiness-check`: Check whether the data for an AI or analytics use case is available, good enough, legal to use and accessible.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
