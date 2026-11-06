# Worked example (illustrative; fictional private hospital group, 9 hospitals, India)

## Inventory and tiering (extract)
| ID | System | Purpose | Owner | Source | Decision impact | Impact | Autonomy | Scale | Data | Tier | Rationale |
|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-01 | Chest X-ray triage | Flags suspected abnormalities to prioritise the radiologist queue | Head of Radiology | Vendor (regulated device; check registration) | Recommends | 3 | 2 | 2 | 3 | **H** | Clinical; sensitive health data; affects time to diagnosis |
| AI-02 | Discharge-summary drafter (LLM) | Drafts the summary for doctor edit | CMO | Vendor LLM via enterprise platform | Recommends | 2 | 2 | 3 | 3 | **H** | Total 10; errors could reach patients and other providers |
| AI-03 | Insurance pre-auth assistant (agent) | Fills TPA portals from records; submits on approval | Head of RCM | In-house agent | Acts (after approval) | 2 | 2 | 2 | 3 | **H** | Total 9; external submissions; financial impact |
| AI-04 | Patient messaging-app bot | Appointments, FAQs | Head of Patient Experience | Vendor | Informs | 2 | 3 | 3 | 2 | **H** | Total 10; public-facing; may receive symptom questions |
| AI-05 | Staff rostering optimiser | Proposes nurse rosters | CNO | Vendor | Recommends | 2 | 2 | 1 | 2 | **M** | Employment-adjacent; fairness of shifts |
| AI-06 | Marketing copy GenAI | Drafts campaign text | CMO Marketing | Public tool | Informs | 1 | 1 | 1 | 1 | **L** | Must not receive patient data (policy) |

## Risks (extract)
| ID | Risk (cause - event - impact) | Category | L | I | Inh. | Key controls (owner, evidence) | Res. | Decision | Action | KRI |
|---|---|---|---|---|---|---|---|---|---|---|
| AI-01 | Because the model was trained mainly on adult data from other populations, it may miss abnormalities in paediatric patients, delaying diagnosis | Accuracy / fairness | 3 | 5 | 15 | Use restricted to adults ≥18 (configuration); radiologist reads all films (SOP audit) | 6 | Reduce | Local validation study on 2,000 films incl. age bands (Head Radiology, Q2) | Sensitivity by age band; missed-finding reports |
| AI-02 | Because LLMs can generate plausible but wrong text, a drug dosage may be stated incorrectly and pass doctor review, causing patient harm | Accuracy (hallucination) | 3 | 5 | 15 | Medication section pulled verbatim from the pharmacy system, not generated; doctor attestation; 2% weekly audit sample | 6 | Reduce | Structured-field enforcement for all numeric data (CMIO, 60 days) | Error rate in audit sample (threshold 0.5%); edit-distance trend |
| AI-03 | Because the agent reads clinical notes, hidden text in an uploaded external report could instruct it to submit altered claim data (indirect prompt injection) | Security / autonomy | 2 | 4 | 8 | Human approval before each submission; agent cannot change amounts; content sanitisation | 4 | Accept (CRO, to Mar 2027) | Red-team test quarterly | Blocked injection attempts; rejected submissions |
| AI-04 | Because patients ask symptom questions, the bot may give medical advice, causing harm and regulatory exposure | Conduct / safety | 4 | 4 | 16 | Symptom keywords route to a nurse helpline; disclaimer; no diagnosis intents | 8 | Reduce | Expand escalation lexicon in 3 languages; weekly transcript review (Head PX) | Escalation rate; unsafe-response audit count |
| AI-05 | Because the optimiser learns from historical rosters, it may perpetuate unfavourable night-shift allocation to junior or female nurses | Fairness | 3 | 3 | 9 | CNO approves rosters; monthly distribution report | 6 | Reduce | Add fairness constraint (max nights per person) | Night-shift share by cohort |

## Board summary (quarter)
- 6 systems (H 4, M 1, L 1); 2 added, 0 retired.
- Top residual risks: AI-04 bot safety (8); AI-01 paediatric accuracy (6, use restricted); AI-02 dosage hallucination (6).
- KRI breach: AI-02 audit error rate 0.9% in week 7 → root cause was a template change; fixed; monitoring weekly.
- Risk accepted: AI-03 injection residual 4, accepted by the CRO until Mar 2027 subject to quarterly red-team testing.
- DPDP readiness: notices and consent for AI-04 and AI-02 data flows to be updated before May 2027 (verify scope with the DPO).
