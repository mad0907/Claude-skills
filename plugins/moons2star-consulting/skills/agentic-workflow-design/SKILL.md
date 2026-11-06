---
name: agentic-workflow-design
description: "Designs an agentic AI workflow for a real business process: process decomposition, choosing between deterministic workflow, AI-assisted workflow and agent per step, autonomy levels with human approval points, tool and system permissions on least privilege, handoff design, exception and confidence handling, segregation of duties, audit logging, reversibility, cost and latency control, evaluation and monitoring metrics, and phased autonomy from shadow mode to supervised autonomy. Use for automating multi-step processes such as reconciliations, onboarding, claims, procurement, collections or IT operations, moving from RPA to agents, or assessing agentic readiness."
---

# Agentic Workflow Design

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a design that operations, risk and audit can sign off. It shows what the agent does, what it may touch, where a human decides, how it fails safely, how every action is traced, and how autonomy grows only as evidence accumulates.

## The senior standard
1. **Use the simplest thing that works.** Many steps are better as deterministic workflow or rules. Use an agent only where flexible reasoning across varied inputs is genuinely needed.
2. **Autonomy is earned, step by step.** Classify each step's autonomy separately and raise it only on measured performance.
3. **Least privilege, read before write.** Agents get only the tools and data scopes a step needs. Write actions are narrower than read actions and gated by value, type and reversibility.
4. **Humans are accountable; agents are delegated.** Every agent action maps to a human owner, and control frameworks (segregation of duties, approval limits) still apply.
5. **Everything is logged and replayable.** Inputs, retrieved context, reasoning summary, tool calls, outputs and approvals form an audit trail.
6. **Design for failure.** Timeouts, loops, wrong tool calls, injected instructions in documents, partial completion. Define safe states and rollbacks.
7. **Cost and latency are design parameters.** Agent loops multiply model calls. Cap steps, cache, and measure cost per completed case.

## Before you start: diagnose
- The process: steps, actors, systems, volumes, cycle time, exception rate, pain points; the documented rules and the undocumented ones.
- Control environment: approval limits, segregation of duties, audit requirements, regulatory obligations.
- System access: APIs available? Read and write scopes? Test environments?
- Risk appetite for automation: which outcomes must never happen (e.g. paying the wrong party, sending wrong information to a customer)?
- Owners: process owner, control owner, IT owner.

## Method
1. **Decompose** the process into steps with inputs, outputs, decisions, systems and exception paths. Fix obvious process waste first.
2. **Classify each step:**
   - **Deterministic automation:** stable rules, structured data.
   - **AI-assisted:** extraction, classification or drafting, with a human or rule check.
   - **Agentic:** multi-step reasoning, tool choice and varied inputs.
   - **Human-only:** judgement with accountability, relationships, ethics, or high irreversible impact.
3. **Set an autonomy level per step:**
   - **L0** Human does it; the agent may observe (shadow).
   - **L1** The agent recommends; the human executes.
   - **L2** The agent executes after human approval (per action or batch).
   - **L3** The agent executes within limits; a human reviews samples or exceptions afterwards.
   - **L4** Fully autonomous. Rare in business processes; only for low-impact, reversible actions with strong monitoring.
4. **Tools and permissions matrix:**
   - each tool (system, API, document store, email, payment);
   - read or write;
   - scope (entities, amount limits, fields);
   - credential handling (no shared human credentials);
   - environment (sandbox first).
5. **Handoffs:** what the agent passes to a human: summary, evidence, recommendation, confidence, and what it could not resolve. What the human passes back: decision and reason, captured for learning.
6. **Exceptions and confidence:** triggers to stop and escalate, such as low confidence, missing data, conflicting sources, amount above the limit, new counterparty, suspected instruction injection, or an unrecognised document type. Define the safe state (pause, flag, no partial postings).
7. **Controls:**
   - segregation of duties (the agent cannot both create and approve);
   - approval limits;
   - dual control for payments or master-data changes;
   - rate and volume limits;
   - spend caps;
   - kill switch;
   - change control for prompts, tools and models.
8. **Security:**
   - prompt-injection defences: treat document and email content as data, not instructions; output validation; allow-listed tools;
   - data-loss prevention;
   - isolation of untrusted content.
9. **Logging and audit:** immutable action log with case ID, inputs, context sources, tool calls, outputs, approver, timestamps and model version, retained per policy.
10. **Metrics:**
    - straight-through rate per step;
    - accuracy of proposals;
    - override / rejection rate;
    - exception rate;
    - cycle time;
    - cost per completed case;
    - control breaches;
    - rollback count;
    - user and customer impact.
11. **Phased rollout:**
    - **Phase 0** shadow (L0, compare to human outcomes);
    - **Phase 1** recommend (L1);
    - **Phase 2** act with approval (L2);
    - **Phase 3** supervised autonomy (L3) for steps meeting thresholds over a sustained period, e.g. ≥98% proposal accuracy over 8 weeks with zero control breaches.
    Define promotion and demotion criteria.

## Judgement calls
- **Batch approvals carefully.** Approving 200 agent actions at once with one click is often a rubber stamp. Use sampling with risk-based selection instead, and measure review quality.
- **Don't automate around a missing control.** If the human process lacked a check, add it before the agent inherits the gap.
- **Prefer structured tool outputs** (JSON with validation) over free text for anything that changes a system of record.
- **Keep humans skilled.** If agents do 95% of the work, plan how people stay competent to handle the 5%, and to take over in an outage.
- **Vendor agent platforms still need your controls.** Configuration, permissions and logs are your responsibility.

## Red flags
- An agent given a human's full credentials "for the pilot".
- Write access to payment or master data without dual control.
- No action-level log, or logs that don't capture the model version and context.
- No defence against instructions hidden in emails, PDFs or web pages the agent reads.
- Autonomy set by enthusiasm rather than measured accuracy.
- Cost per case unknown.

## Variants by context
- **Finance (reconciliation, close, AP exceptions):** postings via approved journals only; limits per entity and amount; reconciliation evidence attached; auditor-readable logs.
- **Customer operations (onboarding, servicing):** customer communications at L1-L2 initially; identity verification remains a strong control; complaint and vulnerability detection routes to humans.
- **Healthcare administration (pre-authorisation, coding):** clinical judgement stays human; payer submissions only after approval; protected health data handling.
- **IT operations:** runbook automation with change-management integration; blast-radius limits; automatic rollback.
- **Procurement:** vendor onboarding checks are good agent work; bank-detail changes always require independent verification.

## Output format

```markdown
## Agentic Workflow: [process]
**Goal and metrics:** ...  |  **Process owner:** ...  |  **Control owner:** ...

| Step | Today (who, system) | Design: Rules / AI-assisted / Agent / Human | Autonomy (L0-L4) | Tools and access (R/W, scope) | Escalation triggers | Controls |
|---|---|---|---|---|---|---|

**Handoff design:** ...
**Security and injection defences:** ...
**Logging and audit trail:** ...
**Metrics and thresholds:** ...
**Phased autonomy plan:** phase - criteria to promote - criteria to demote
**Cost and latency controls:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Each step is justified as rules, AI-assisted, agent or human; the simplest viable option is chosen.
- [ ] Autonomy is set per step, with promotion and demotion criteria.
- [ ] Least-privilege tools matrix with read/write separation and limits.
- [ ] Segregation of duties, approval limits and the kill switch are defined.
- [ ] Injection and untrusted-content defences are included.
- [ ] Action-level audit logging is specified.
- [ ] Metrics include cost per case and override rates.

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
- `ai-opportunity-scan`: Find where AI can create real value in a function or business, grounded in processes and pain points.
- `responsible-ai-review`: Review an AI system before launch for fairness, transparency, privacy, safety, security and accountability.
- `operating-model`: Design how the organisation will work: structure, processes, people, technology, governance and locations.
- `raci-builder`: Clarify who is Responsible, Accountable, Consulted and Informed for each activity or decision.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
