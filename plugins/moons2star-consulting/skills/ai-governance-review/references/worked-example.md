# Worked example (illustrative; fictional organisation)

**Organisation:** a mid-size Indian NBFC; 4,200 staff; digital personal loans and MSME lending; one EU-based fintech partner.
**Trigger:** the Audit Committee asked for assurance after a news story on biased lending algorithms.
**Evidence:** 31 documents; 14 interviews; samples of 6 AI systems; vendor contracts for 3.

**Overall:** AI governance is **emerging (Design 2.3, Operating 1.6)**. The biggest exposure is the **credit-underwriting scorecard v4 and the collections-prioritisation model**. Both influence decisions about borrowers. Neither has been tested for fairness across groups since launch, and neither has a re-approval trigger when the vendor updates the model. Staff use of public GenAI tools is widespread (est. 1,100 weekly users from proxy data) with no sanctioned alternative.

| # | Domain | Design | Operating | Key evidence | Finding | Priority |
|---|---|---|---|---|---|---|
| 1 | Strategy and appetite | 2 | 1 | Digital strategy mentions AI; no no-go areas | No board-level stance on AI in credit decisions | High |
| 3 | Accountability | 2 | 2 | CTO "owns AI"; no second-line role | Builders approve their own models | High |
| 4 | Inventory | 1 | 1 | None; discovery found 23 systems (9 vendor-embedded) | Unknown footprint | Critical |
| 7 | Validation | 3 | 2 | Model-risk policy covers statistical models | Not applied to vendor models; no fairness metrics | High |
| 8 | GenAI / agents | 1 | 1 | Collections chatbot pilot live with 2,000 borrowers | No grounding, no logging of conversations | Critical |
| 9 | Third-party | 2 | 1 | Contracts silent on model changes and data use | Vendor retrained the model on NBFC data without notice | High |
| 10 | Monitoring | 2 | 2 | Model discrimination power (AUC) monitored monthly | No drift-by-segment, override or complaint tracking | Medium |
| 11 | Incidents and redress | 1 | 1 | No AI incident category | Borrowers cannot get reasons for decline in plain language | High |
| ... | | | | | | |

**Priority findings**
1. **No inventory.** You cannot govern what you cannot see. → Complete the register for all 23 systems and tier them (CRO, 30 days).
2. **Collections chatbot live without controls.** → Restrict to FAQ-only answers grounded in the approved knowledge base; log all conversations; human handover for hardship or dispute; re-launch only after red-team testing (COO, 2 weeks).
3. **Credit models untested for fairness.** → Run a disparity analysis by gender, age band and geography proxy; set tolerance thresholds; add to monthly monitoring (CRO, 60 days).
4. **Vendor model change without notice.** → Amend contracts: no training on NBFC data without written consent; 30-day change notice; audit rights; incident notice within 24 hours (General Counsel, 90 days).
5. **Shadow GenAI.** → Launch an enterprise GenAI tool with data protection; publish an acceptable-use policy; block uploads of customer data to public tools (CIO, 60 days).

**Regulatory mapping (verify with counsel)**
| Obligation | Applies? | Date | Status |
|---|---|---|---|
| RBI expectations on board-approved AI policy, inventory, audit (FREE-AI; check for final directions) | Likely | Check | Gap |
| DPDP Act and Rules: notice, consent, rights, security, breach notice | Yes | 13 May 2027 (most duties) | Partial |
| RBI digital lending directions: disclosures, grievance redress | Yes | In force | Partial |
| EU AI Act: credit scoring of EU persons via the partner is Annex III high-risk | Possibly | 2 Dec 2027 (post-Omnibus) | Needs legal view |

**Roadmap**
- **90 days:** register and tiering; chatbot controls; interim GenAI policy and tool; AI Risk Committee chaired by the CRO; Audit Committee to oversee AI governance (update its ToR).
- **6 months:** AI policy and tiered standards; fairness testing and thresholds; vendor contract amendments; plain-language decline reasons; AI incident process.
- **12 months:** internal audit review; role-based literacy programme; ISO/IEC 42001 gap assessment; annual report AI disclosure.
