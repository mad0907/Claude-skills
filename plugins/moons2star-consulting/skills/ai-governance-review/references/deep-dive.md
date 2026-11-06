# AI Governance Review: scoring criteria and evidence

## Maturity scale (use for both Design and Operating)
| Score | Label | Meaning |
|---|---|---|
| 1 | Absent / ad hoc | Nothing defined, or depends on individuals |
| 2 | Emerging | Partially defined; inconsistent; not applied to all systems |
| 3 | Defined | Documented and approved; applied to most in-scope systems |
| 4 | Managed | Applied consistently; measured; exceptions tracked; independently checked |
| 5 | Optimised | Continuously improved from metrics, incidents and horizon scanning; benchmark-grade |

**Operating can never score higher than Design + 1.** Things rarely work well without being defined. A Design score above Operating by 2+ is a finding in itself ("paper governance").

## Domain criteria and evidence

| Domain | What "3 - Defined" looks like | What "4-5" adds | Evidence to request |
|---|---|---|---|
| 1. Strategy and appetite | Board-approved AI strategy with stated no-go areas | Quantified appetite and tolerances; reviewed annually | Board minutes, appetite statement |
| 2. Policy | AI policy plus GenAI acceptable-use policy approved | Standards per tier; mapped to frameworks; attested by staff | Policy docs, attestation records |
| 3. Accountability | Named exec owner; committee with ToR; RACI | Second-line independence; competence plans; board committee oversight in its ToR | ToR, committee minutes, RACI |
| 4. Inventory | Register covering in-house and major vendor AI | Automated discovery; shadow-AI monitoring; lifecycle status maintained | Register extract; discovery method |
| 5. Classification and impact | Tiering method applied; impact assessments for high tier | Assessments include affected persons, rights and fairness; re-run on change | 3 sample assessments |
| 6. Data | Lawful basis and purpose checks before use | Data lineage; representativeness testing; IP and licence checks; DPDP-aligned retention | Data protection impact assessments, data sheets |
| 7. Development and validation | Testing standard; independent validation for high tier | Fairness metrics by group; robustness and adversarial testing; model cards | Validation reports |
| 8. GenAI and agents | Grounding and content filters; logging | Red-team programme; prompt-injection testing; agent autonomy tiers; human approval for consequential actions; action-level audit trail | Red-team reports; agent permission matrix |
| 9. Third-party | Vendor AI due-diligence questionnaire | Contract clauses (no training on our data without consent, change notice, audit, incident notice, exit); concentration review | 2 sample contracts |
| 10. Monitoring and change | Go-live approval; basic performance monitoring | Drift alerts; override and complaint KPIs; re-approval on vendor model change; tested kill switch | Dashboards; change log |
| 11. Incidents and redress | AI incident definition; route to existing incident process | AI-specific root cause analysis; disclosure to affected people; appeal route; regulator notice playbook | Incident files; customer notices |
| 12. People and literacy | Training for builders and approvers | Role-based literacy for all users; board training; speak-up data | Training records |

## Rapid discovery playbook (when no inventory exists; 2-4 weeks)
1. **Procurement scan:** vendor master and contracts with keywords (AI, ML, machine learning, GPT, LLM, copilot, assistant, model, prediction, scoring, automation).
2. **SaaS and IT asset logs:** look for AI features enabled in existing platforms (CRM, HR, ITSM, office suites).
3. **Network and proxy logs:** traffic to public GenAI services; identify volume by department (not individuals) for a no-blame view.
4. **Business-unit survey (10 questions):** what AI do you use, for what decision, on what data, and who owns it.
5. **Developer repositories and cloud accounts:** model endpoints, ML pipelines, API keys for model providers.
6. **Reconcile into a single register;** tier it; confirm owners.

## Proportionality guide
| Organisation profile | Right-sized governance |
|---|---|
| <15 AI use cases, mostly vendor copilots, no customer-facing decisions | GenAI acceptable-use policy, simple register, one accountable exec, quarterly review in the existing risk committee |
| Mid-size with some customer-impacting AI | AI policy plus tiering; AI risk committee with second-line chair; validation for high tier; vendor clauses; board report twice a year |
| Large or regulated (BFSI, health, public sector), or high-risk uses (credit, hiring, claims, medical) | Full framework aligned to NIST AI RMF / ISO/IEC 42001; independent model validation; red-teaming; quarterly board reporting; internal audit cycle; consider certification |

## GenAI and agent control checklist
- Approved model and providers list; data-classification rules for what can go into each.
- Retrieval grounding with source citations for factual answers; refusal when no source is found.
- Input and output filtering (PII, toxicity, policy violations); jailbreak and prompt-injection testing, including indirect injection via documents, emails and web content.
- Agents: least-privilege tools; read/write separation; spend and volume limits; human approval for external, financial, irreversible or customer-affecting actions; rate limits; sandboxed execution.
- Logging: prompts, retrieved sources, outputs, tool calls and approvals, kept per retention policy (DPDP Rules require some logs to be kept at least a year for specified purposes; verify).
- Evaluation: task-specific test sets, regression tests on model upgrades, periodic red-team exercises.
- Kill switch tested; fallback process documented.
- Disclosure to users that they are interacting with AI where required or expected (e.g. EU AI Act Art. 50 transparency).
