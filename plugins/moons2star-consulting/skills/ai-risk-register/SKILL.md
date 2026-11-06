---
name: ai-risk-register
description: "Builds and maintains an AI risk register: complete inventory (in-house, vendor-embedded, GenAI and agents), a defensible risk-tiering method based on decision impact and autonomy, AI-specific risk taxonomy (fairness, privacy, security and prompt injection, hallucination, explainability, IP, third-party, operational, conduct, reputational), inherent and residual scoring, controls mapped to owners, key risk indicators with thresholds, and a board summary. Aligned to NIST AI RMF, ISO/IEC 23894 and 42001, EU AI Act tiers and India DPDP. Use to start AI governance, prepare audit or regulator reviews, or run quarterly AI risk reporting."
---

# AI Risk Register

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a register that a CRO, an internal auditor and a board can all use. Every AI system is listed, tiered by real-world impact, its specific risks are scored before and after controls, and each one has an owner and early-warning indicators.

## What makes an AI risk register different from a normal one
- **The unit is the AI system or use case, not the department.** The same model used for marketing and for credit decisions is two entries.
- **Risk depends on use and autonomy, not on technology.** A simple rules engine that declines loans can be higher risk than a frontier LLM that drafts internal emails.
- **Risks change after launch:** data drift, vendor model updates, new prompts and tools, new users. The register is a living control, reviewed on change, not annually.
- **Some harms fall on people outside the organisation** (applicants, patients, citizens). Impact must be scored from their side too, not only as enterprise loss.

## Step 1: Inventory fields (minimum)
ID · name · business purpose · business owner · technical owner · lifecycle status (idea / pilot / live / retired) · in-house or vendor (which) · model type (statistical, ML, LLM, agent) · data used (personal? sensitive? children?) · **decision impact** (informs / recommends / decides / acts) · affected persons · volume (decisions per month) · jurisdictions · customer-facing (Y/N) · human oversight point · last validation date · tier.

Discover it properly. Include vendor-embedded AI and staff GenAI use. Scan procurement and contracts, SaaS features, proxy logs for public GenAI, cloud model endpoints, and run a short business-unit survey. (The `ai-governance-review` skill has a full discovery playbook.)

## Step 2: Tier each system (defensible, simple)
Score four factors, 1-3 each:
| Factor | 1 | 2 | 3 |
|---|---|---|---|
| **Impact on people** (rights, money, health, access, employment) | None / internal convenience | Moderate, reversible | Significant or hard to reverse (credit, hiring, claims, medical, legal status, safety) |
| **Autonomy** | Human decides; AI informs | AI recommends; human approves each case | AI decides or acts without per-case human approval |
| **Scale / exposure** | Few users, internal | Hundreds to thousands of cases, or external-facing | Large-scale or public-facing |
| **Data sensitivity** | No personal data | Personal data | Sensitive personal data, children's data, or regulated data |

- **Tier H (high):** Impact = 3, or a total ≥ 9, or legally designated high-risk (e.g. EU AI Act Annex III areas such as creditworthiness, employment and access to essential services, where in scope).
- **Tier M (medium):** total 6-8.
- **Tier L (low):** total ≤ 5.
- **Prohibited / not permitted:** uses the organisation (or law) bars, such as manipulative techniques, or social scoring where prohibited. Check the EU AI Act Art. 5 if in scope.

Document the rationale in one line. Tiering must be explainable to an auditor.

## Step 3: Identify risks with an AI taxonomy
For each H and M system, consider:
1. **Fairness and discrimination:** disparate outcomes across protected or proxy groups.
2. **Accuracy and reliability:** errors, hallucination (GenAI), brittleness on edge cases.
3. **Robustness and drift:** performance decays as data or behaviour shifts; vendor silently changes the model.
4. **Security:** prompt injection (direct and indirect), data exfiltration through the model, model or data poisoning, model theft, insecure plug-ins and tools.
5. **Privacy and data protection:** unlawful basis, purpose creep, retention, training on personal data, re-identification, cross-border transfers (DPDP, GDPR).
6. **Transparency and explainability:** cannot explain adverse decisions; users unaware they are dealing with AI.
7. **Autonomy and control (agents):** actions beyond intended scope; runaway loops; financial or external actions without approval.
8. **Intellectual property and content:** training-data licensing; output infringing others' rights; confidential data leaking into outputs.
9. **Third-party and concentration:** dependence on one model provider; vendor failure; contract gaps.
10. **Conduct and consumer harm:** mis-selling, unfair treatment, vulnerable customers.
11. **Operational resilience:** outage of an AI service in a critical process; no fallback.
12. **Legal and regulatory non-compliance:** sector rules, AI-specific laws.
13. **Reputational and ethical:** public trust, employee trust, misuse.

Write each risk as: **Because [cause], [event] may occur, resulting in [impact on people / business].**

## Step 4: Score, control, assign
- **Inherent risk:** Likelihood (1-5) × Impact (1-5), where Impact is the worse of the enterprise impact and the impact on affected persons.
- **Controls:** preventive (design, testing, access limits, grounding, approvals) and detective (monitoring, KRIs, sampling, complaints analysis). Name each control's **owner** and **evidence** of operation.
- **Residual risk** after controls, compared with appetite: Accept / Reduce / Avoid (do not deploy) / Transfer (contract, insurance).
- **Actions** for gaps: owner and date.

## Step 5: Key risk indicators (examples; set thresholds)
- Selection-rate or approval-rate ratio between groups (e.g. flag below 0.8; a common screening heuristic, not a legal test).
- Error or hallucination rate on a monitored sample; groundedness score.
- Drift metric (population stability index, or performance by segment).
- Human override rate, and median review time (a rubber-stamp signal if it is very low).
- Complaints and appeals mentioning automated decisions.
- Blocked prompt-injection attempts; data-loss-prevention hits on GenAI.
- Agent actions requiring rollback; actions over limit.
- Vendor model-change notices received vs assessed.

## Step 6: Governance rhythm
- **On change:** new system, vendor model update, new data source, new tool for an agent, new user group → re-tier and reassess.
- **Monthly:** KRI review by the AI risk owner.
- **Quarterly:** committee review; board summary.
- **Annually:** full refresh; internal audit sample.

## Judgement calls
- **Tier by the worst realistic use, not the intended use.** If a "drafting assistant" is used to answer customers, tier it as customer-facing.
- **Don't let scoring create false precision.** Use the scores to rank. Discuss the top items in prose.
- **Accepting risk is a decision.** Record who accepted it, why, until when, and under which appetite.
- **Prefer fewer, sharper risks per system** (3-6) over a 40-line generic list copied to every system.

## Output format

```markdown
## AI Risk Register: [organisation / scope], [date], v[x]

### Inventory and tiering
| ID | System | Purpose | Owner | In-house / vendor | Decision impact | Affected persons | Impact | Autonomy | Scale | Data | Tier | Rationale |
|---|---|---|---|---|---|---|---|---|---|---|---|---|

### Risks (H and M tiers)
| ID | System | Risk (cause - event - impact) | Category | L | I | Inherent | Key controls (owner, evidence) | Residual | Decision (accept/reduce/avoid/transfer) | Action (owner, date) | KRI and threshold |
|---|---|---|---|---|---|---|---|---|---|---|---|

### Board summary
- Systems by tier (change since last quarter)
- Top 5 residual risks and status of actions
- KRI breaches and incidents
- Risks accepted outside tolerance (who, why, until when)
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and texts this skill draws on, with dates and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, the deep dive for detailed criteria, and the sources before citing any law, standard or date.

## Quality check before you reply
- [ ] Inventory includes vendor-embedded AI and GenAI use; it notes known gaps in discovery.
- [ ] Tiering uses stated factors with a one-line rationale per system.
- [ ] Risks are system-specific, written as cause-event-impact.
- [ ] Impact considers affected persons, not only the enterprise.
- [ ] Each control has an owner and evidence; each H-tier risk has a KRI with a threshold.
- [ ] Risk acceptances are recorded with an approver and expiry.
- [ ] Legal designations (e.g. EU AI Act high-risk) are flagged for counsel to verify.

## House rules
- Never invent facts, figures, quotes or sources. Label estimates "(est.)" and list assumptions openly.
- If key inputs are missing, ask up to 3 short questions, or proceed with clearly stated assumptions if the user wants speed.
- Plain English; define jargon (e.g. "prompt injection: hidden instructions in content that make the AI do something unintended").
- Regulatory tiers and dates change. See `references/sources.md` and recommend legal review.
- Remind users not to paste personal data or confidential system details they are not permitted to share.

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
- `ai-governance-review`: the organisation-level view.
- `responsible-ai-review`: deep dive on one high-tier system.
- `risk-appetite`: set AI tolerances.
- `agentic-workflow-design`: controls for agents.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
