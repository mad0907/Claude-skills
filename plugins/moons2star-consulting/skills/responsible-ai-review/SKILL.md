---
name: responsible-ai-review
description: "Conducts a pre-launch or periodic responsible AI impact review of one AI system: purpose and context, affected people including non-users, fairness testing by group, transparency and explainability proportional to impact, privacy and data protection, accuracy, robustness and GenAI hallucination testing, security including prompt injection, human oversight that is real rather than rubber-stamp, accountability, contestability and redress, environmental footprint where material, and post-launch monitoring, ending in launch / launch with conditions / do not launch. Aligned to NIST AI RMF, ISO/IEC 42005 and 42001, OECD principles, EU AI Act where in scope, and India's DPDP and AI governance guidelines. Use before launching or scaling an AI system, after an incident, or for vendor AI due diligence."
---

# Responsible AI Review

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a clear, evidenced launch decision for one AI system, with the conditions that must be met and how the system will be watched once live. A risk committee, a regulator or an affected customer could read it and see that the right questions were asked and answered with evidence.

## The senior standard
1. **Start with people, not the model.** Who is affected, how, and how badly could it go wrong for them, including people who never touch the system (applicants, patients, citizens)?
2. **Evidence over assurance.** Test results, samples and logs, not "the vendor confirmed".
3. **Proportionality.** The depth of review scales with impact and autonomy. A drafting tool for internal emails needs a light check; a credit or claims decision needs the full review.
4. **Fairness is measured, not asserted.** Define groups, metrics and tolerances; test; explain residual gaps.
5. **Human oversight must be effective.** Reviewers need time, information, authority and training to override, and override rates must be monitored.
6. **Contestability.** Affected people can find out a decision involved AI, get a meaningful explanation, and challenge it.
7. **The review continues after launch.** Define monitoring, triggers for re-review, and an owner.

## Before you start: diagnose
- **System description:** purpose; users; affected persons; inputs and data; model type (statistical, ML, LLM, agent; in-house or vendor); outputs; the decision it informs or makes; volume; jurisdictions.
- **Risk tier** (from the AI risk register), or determine it now.
- **Testing already done,** and what evidence exists.
- **Legal context:** sector rules; DPDP or GDPR; EU AI Act category if in scope; employment, consumer or anti-discrimination law.

## Review areas and the key questions
1. **Purpose and context:** is AI appropriate here? What is the non-AI alternative? Benefits to affected people as well as to the organisation.
2. **Affected people and impact:** which groups; the severity of potential harm (financial, access, health, liberty, dignity); vulnerable groups; scale.
3. **Fairness:**
   - Which groups to test: legally protected characteristics where lawful to process, or proxies such as region, language, age band or gender where available.
   - Which metrics: selection-rate ratio, error-rate parity (false positive and false negative by group), calibration.
   - Tolerance thresholds; the results; root causes of gaps; mitigations.
4. **Transparency and explainability:**
   - Do people know AI is involved?
   - Can the organisation explain individual adverse outcomes in plain language (main reasons)?
   - Is the documentation complete (model card or system card)?
5. **Privacy and data protection:** lawful basis or consent; purpose limitation; minimisation; retention; data sent to third parties or other countries; DPIA where required or prudent.
6. **Accuracy, robustness and reliability:**
   - performance on a representative test set, by segment;
   - edge cases;
   - adversarial and stress tests;
   - for GenAI: hallucination or groundedness rates on task-specific test sets, refusal behaviour, and consistency across languages.
7. **Security:** prompt injection (direct and indirect), data leakage, model or data poisoning, access control, abuse monitoring, red-team results.
8. **Human oversight:**
   - Who reviews, at what point, with what information, and with authority to override.
   - Review time and override rates.
   - Training.
   - Automation-bias safeguards.
9. **Accountability:** named business owner and model owner; RACI; sign-offs; incident process.
10. **Contestability and redress:** how affected people can complain or appeal; human review of appeals; timelines; feedback into the system.
11. **Third parties:** vendor documentation, testing evidence, contract terms (data use, change notice, audit, incident notice).
12. **Environmental and societal** (where material): compute footprint for large-scale use; effects on jobs and skills.
13. **Monitoring plan:** KPIs and KRIs (performance by segment, drift, fairness metrics, complaints, overrides, incidents), frequency, thresholds, and re-review triggers (model change, new population, incident).

## Method
1. **Scope and tier** the system; set the review depth.
2. **Gather evidence:** documentation, test reports, data descriptions, samples of outputs, logs and contracts. Interview the owner, developers, reviewers and frontline users.
3. **Run or request tests** that are missing (fairness, groundedness, red-team). Specify what, on which data, and the pass criteria.
4. **Rate each area:** Satisfactory / Needs improvement / Unacceptable, each with evidence.
5. **Decide:**
   - **Launch:** all satisfactory.
   - **Launch with conditions:** time-bound fixes; extra monitoring; restricted scope.
   - **Do not launch:** any unacceptable area on a high-impact system, or harm that cannot be mitigated.
6. **Record:** sign-offs (business owner, risk, legal or privacy), conditions with owners and dates, and the next review date.

## Judgement calls
- **Explainability vs accuracy.** For decisions about individuals, prefer models whose main reasons can be explained. If a more complex model is used, show that its explanations are faithful and useful to the person affected.
- **"We don't collect protected attributes" is not a fairness test.** Proxies can still discriminate. Test with lawful proxies or controlled samples.
- **A disclaimer is not a control.** "AI may make mistakes" doesn't mitigate a harmful output in a high-stakes context.
- **Restricted scope is a strong mitigation.** Launch to lower-risk segments or with stricter human review while evidence builds.
- **Document the "do nothing" comparison.** Sometimes the AI is fairer or more consistent than the current human process. That matters, and it should be measured too.

## Red flags
- No identification of affected non-users.
- Fairness "not applicable" for a system making decisions about people.
- Accuracy reported only as an overall average.
- Human reviewers approving in seconds; no override data.
- No appeal route, or appeals reviewed by the same system.
- Vendor claims with no test evidence.
- No owner or no next-review date.

## Variants by context
- **Credit and insurance:** adverse-action reasons; fairness across protected and proxy groups; regulatory model-risk expectations.
- **Hiring and HR:** high risk in many jurisdictions; bias audits; candidate notice; human decision.
- **Healthcare:** clinical safety, medical-device rules, clinician oversight, patient consent.
- **Public sector:** transparency registers, citizen redress, equality duties.
- **Customer-facing GenAI:** disclosure, grounding, escalation, vulnerable-customer handling, content safety, logging.

## Output format

```markdown
## Responsible AI Review: [system], v[x], [date]
**Decision:** Launch / Launch with conditions / Do not launch - one line
**Tier:** ...  |  **Affected people:** ...  |  **Review depth:** ...

| Area | Evidence reviewed | Finding | Rating | Required action | Before / after launch | Owner | Due |
|---|---|---|---|---|---|---|---|

**Fairness results:** groups, metrics, values, tolerance, gap explanation
**Accuracy and GenAI evaluation:** test set, results by segment, groundedness / hallucination rate
**Human oversight design and metrics:** ...
**Monitoring plan and re-review triggers:** ...
**Legal questions for counsel / DPO:** ...
**Sign-offs:** business owner / risk / privacy / legal - date
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Affected people, including non-users, are identified, and harm severity assessed.
- [ ] Fairness is tested with defined groups, metrics and tolerances, or the reason it's impossible is explained, with a mitigation.
- [ ] Accuracy is reported by segment; GenAI groundedness tested on task-specific data.
- [ ] Security includes injection and leakage testing.
- [ ] Human oversight is shown to be effective (time, information, authority, override data).
- [ ] Contestability and redress routes exist.
- [ ] Clear decision, conditions with owners, monitoring and next review date.
- [ ] Legal conclusions are flagged for counsel, not asserted.

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
- `ai-risk-register`: Build a risk register for AI use cases: classify, score, control and assign owners.
- `ai-governance-review`: Assess how well an organisation governs AI: policy, roles, inventory, risk, controls, and board oversight.
- `ai-pilot-design`: Design an AI pilot that proves value with clear success criteria, guardrails and a scale decision.
- `agentic-workflow-design`: Redesign a process for AI agents working with people: steps, tools, handoffs, controls and metrics.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
