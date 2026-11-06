---
name: ai-opportunity-scan
description: "Finds where AI (predictive, generative and agentic) can create measurable value in a business, function or value chain, grounded in process volumes, cycle times, error costs and data reality rather than technology enthusiasm. Includes agentic-readiness signals, a value hypothesis per use case, data and risk flags, and quick-win vs platform classification. Use to start an AI strategy or a function's AI roadmap, run discovery workshops, assess readiness for agentic AI, or refresh a stale use-case list."
---

# AI Opportunity Scan

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a long-list of AI use cases that a CFO would take seriously. Each one is tied to a real process step, has a value mechanism with a rough size, an honest data and risk check, and a view of whether it is a quick win, a build, or a platform capability.

## The senior standard
1. **Start from the work, not the model.** Map processes, volumes, decision points and pain. Technology choice comes last.
2. **Value is a mechanism, not an adjective.** Every use case states *how* value appears: hours released × redeployment, faster cash collection, lower losses, higher conversion, avoided risk.
3. **Distinguish three kinds of AI.** They have very different risk and change profiles:
   - **Predictive:** forecast, classify, detect, score.
   - **Generative:** draft, summarise, extract, translate, converse.
   - **Agentic:** plan and execute multi-step tasks using tools and systems.
4. **Data reality check early.** A brilliant idea with no labelled history or no system access is a data project first.
5. **Adoption is the hidden denominator.** Most value is lost between "the model works" and "people use it every day".
6. **Some processes should be fixed, not automated.** If a process is broken, AI scales the breakage.

## Before you start: diagnose
- **Scope:** an enterprise, one function (Finance, HR, Ops, Sales, Service, Legal, IT), or one value stream (order-to-cash, procure-to-pay, claims, onboarding)?
- **Strategic intent:** cost, growth, risk, customer experience, or talent? This changes what "value" means.
- **Baseline facts:** headcount by activity, volumes, cycle times, error or rework rates, backlog, SLA breaches, cost per transaction.
- **Systems and data:** core systems (ERP, CRM, HRMS, core banking, EHR), data platform maturity, document stores, API access.
- **Constraints:** regulation (sector, DPDP/GDPR), works councils or unions, budget, appetite for customer-facing AI.
- **Current AI activity:** existing pilots, vendor features already licensed and unused (common and cheap value).

## Method
1. **Map the value stream.** List the 8-15 main steps; for each: who does it, volume per month, time per item, error rate, systems used, and the decision made.
2. **Find the AI signals at each step.**
   - **Predictive:** a repeated judgement with historical outcomes, e.g. "Will this invoice be disputed?", "Which claims are fraudulent?", "Which customers will churn?"
   - **Generative:** unstructured text, documents or conversations; first drafts; knowledge lookup across policies.
   - **Agentic:** multi-step, rules-plus-judgement work across several systems, e.g. reconciliations, onboarding, pre-authorisation, vendor set-up, collections follow-up.
   - **Automation without AI:** stable rules → workflow or RPA may be cheaper and safer.
3. **Write each use case precisely:** "For [user], AI [does what] in [process step], so that [measurable outcome]." Avoid "AI-powered insights".
4. **Size the value mechanism** (order of magnitude is enough at this stage). Use code for arithmetic.
   - **Capacity:** volume × time saved per item × adoption % → hours; value only when redeployed or released.
   - **Cash and working capital:** e.g. DSO reduction × daily revenue.
   - **Loss reduction:** e.g. fraud loss × detection uplift.
   - **Revenue:** conversion or retention uplift × base.
   - **Risk:** expected loss avoided, or compliance cost avoided.
5. **Agentic-readiness check** (for agent candidates). Score Yes / Partial / No on each:
   - Is the process documented, with clear rules and exceptions?
   - Are systems accessible via APIs (not screen-scraping only)?
   - Are actions reversible, or can they be gated by human approval?
   - Is there a measurable definition of a correct outcome?
   - Is there an owner who will accept accountability for agent actions?
   - Can every action be logged for audit?
   Two or more "No" answers → start with recommend-only AI, or fix the process first.
6. **Data and risk flags:** data availability and quality, personal or sensitive data, decision impact on people (feeds the AI risk tier), customer-facing or not.
7. **Classify:**
   - **Quick win:** off-the-shelf or a feature already licensed; under 3 months.
   - **Build:** custom model, agent or integration; 3-9 months.
   - **Platform capability:** needs shared foundations (data platform, retrieval layer, agent orchestration, evaluation tooling) that unlock several use cases.
8. **Cluster into themes**, and note shared foundations. They usually decide sequencing.
9. **Hand over to prioritisation** (`ai-use-case-prioritizer`) with the evidence.

## Judgement calls
- **Prefer "AI + redesigned process" over "AI bolted on".** The biggest gains come from removing steps, not speeding them up.
- **Count only released or redeployed capacity as value.** "Time saved" with no plan for that time is a soft benefit.
- **Treat vendor AI features you already pay for as the first quick wins.** They often go unused.
- **Be careful with customer-facing GenAI early.** Start internal (agent-assist, drafting) where a human checks, then move outward.
- **Look for "decision bottlenecks", not just "effort hot spots".** A two-day credit approval queue may be worth more than 20 clerks' typing time.

## Red flags
- A use-case list that reads like a vendor catalogue ("chatbot", "copilot", "AI analytics").
- No volumes or baselines; value claimed as a percentage of nothing.
- Every use case labelled "high value, low effort".
- Agents proposed for processes with no API access, no rules and no owner.
- No mention of personal data, decision impact or adoption.

## Variants by context
- **Finance:** AP invoice capture and 3-way match exceptions, AR cash application and dispute prediction, intercompany reconciliation agents, close commentary drafting, FP&A driver forecasting and variance narratives.
- **BFSI:** KYC document extraction, credit underwriting assist, collections prioritisation, fraud detection, claims triage, servicing agent-assist, regulatory reporting checks.
- **Healthcare:** clinical documentation drafting, coding assistance, pre-authorisation agents, scheduling optimisation, imaging triage (regulated: check device rules).
- **Manufacturing and supply chain:** demand forecasting, predictive maintenance, quality vision inspection, supplier risk monitoring, planning copilots.
- **HR:** job-description and policy assistants, employee helpdesk; screening use is high-risk (check bias and law).
- **GCC / shared services:** agent-led process ownership, knowledge copilots for global processes, automation of L1 support.

## Output format

```markdown
## AI Opportunity Scan: [scope]
**Intent:** ...  |  **Baseline sources:** ...  |  **Systems:** ...

| # | Process step | Use case ("For..., AI..., so that...") | Type (Pred / Gen / Agent / Non-AI automation) | Value mechanism and rough size | Data availability | People impact / risk flag | Agentic readiness | Class (Quick win / Build / Platform) |
|---|---|---|---|---|---|---|---|---|

**Themes and shared foundations:** ...
**Quick wins (≤3 months):** ...
**Fix-the-process-first candidates:** ...
**Next step:** prioritise with value × feasibility × risk
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Every use case is tied to a named process step with a volume or baseline.
- [ ] The value mechanism is stated and roughly sized, with arithmetic done properly.
- [ ] Predictive, generative and agentic uses are distinguished.
- [ ] Data availability and people-impact flags are recorded.
- [ ] Agent candidates have passed (or failed) the readiness check.
- [ ] At least one "fix the process first" or "non-AI automation" call where warranted.

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
- `ai-use-case-prioritizer`: Score and rank AI use cases on value, feasibility and risk, and pick the first wave.
- `jobs-to-be-done`: Understand the real 'job' customers hire you for, and the outcomes they measure you on.
- `value-chain`: Map where value and cost sit across the chain, and find where to compete, cut or integrate.
- `playbook-ai-roadmap`: Build an AI roadmap for a business or function: opportunities, priorities, cases, governance and adoption.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
