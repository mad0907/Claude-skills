# Worked example (illustrative; fictional general insurer, GenAI policy-question assistant on web and messaging channels)

**Decision:** **Launch with conditions**, restricted to existing policyholders' questions about motor and home policies. No claims-decision content. Hindi launch deferred.
**Tier:** Limited (informational; customer-facing). **Affected people:** policyholders, including elderly and first-time digital users. **Review depth:** standard plus GenAI-specific testing.

| Area | Evidence | Finding | Rating | Required action | When | Owner | Due |
|---|---|---|---|---|---|---|---|
| Purpose | Business case; contact-centre data | 38% of calls are policy-wording questions; 24x7 benefit | Satisfactory | — | — | Head Service | — |
| Fairness | Test set by language and age-band proxy | Hindi answers less accurate (89% vs 97% English) | Needs improvement | Defer Hindi; improve retrieval and evaluation; retest | Before Hindi launch | AI lead | Feb |
| Transparency | UI mock-ups | AI disclosure present; no "talk to a human" on the first screen | Needs improvement | Add a human-handover option on every screen | Before | Product | 2 wks |
| Privacy | Data-flow map; vendor contract | Chat logs retained 3 yrs by default; vendor may use data to improve models | **Unacceptable** as is | Retention set to policy (e.g. 1 yr unless needed for complaints, aligned with DPDP Rules); contract amendment: no training on our data | Before | DPO / Legal | 3 wks |
| Accuracy / groundedness | 800-question test set with answers from policy wordings | 96.1% correct; 2.4% partially correct; **1.5% wrong on add-on cover exclusions** | Needs improvement | Answers must cite the clause; refuse if no source is found; add 150 add-on questions to the test set; target ≥99% on exclusions | Before | AI lead | 3 wks |
| Security | Red-team (300 prompts incl. indirect injection via uploaded PDFs) | 4 jailbreaks produced off-topic content; no data leakage | Needs improvement | Stricter input/output filters; disable PDF upload at launch | Before | Security | 2 wks |
| Human oversight | Escalation design | Handover to agents available 8am-10pm only | Needs improvement | Out-of-hours: create a callback ticket; never "no help available" | Before | Head Service | 2 wks |
| Contestability | Complaint process | Bot-related complaints not tagged | Needs improvement | Tag and review weekly | After | Complaints | 4 wks |
| Third party | Vendor documentation | Model-change notice not contractual | Needs improvement | 30-day notice clause; regression test on each change | Before | Procurement | 3 wks |

**Monitoring:** weekly 2% transcript QA; groundedness score; accuracy by language; complaints and escalations; jailbreak attempts. **Re-review** on model change, a new language, new products, or any serious incident.

**Legal questions:** confirm disclosure and record-keeping obligations under insurance-regulator rules for digital channels; DPDP notice wording for chat (DPO).

**Sign-offs:** Head Service (owner), CRO, DPO, General Counsel. Next review in 6 months.
