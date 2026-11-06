# Worked example (illustrative; fictional private bank, complaint-response drafting)

**Hypothesis:** if complaint handlers use an AI assistant that drafts responses grounded in the complaint, account history and approved policy texts, then **average handling time falls ≥30% within 10 weeks**, without the **QA compliance score** falling below baseline (88%) and with **zero** responses containing regulatory-language breaches.

**Scope:**
- 40 handlers across 2 centres (20 AI, 20 control, matched on tenure and QA score).
- Complaint categories: cards, digital banking and charges. **Excludes** fraud and bereavement cases, which stay manual.
- English and Hindi.
- 10 weeks; configuration frozen from week 3.

**Counterfactual:** a parallel control group, plus an 8-week baseline for both groups.

| Group | Metric | Baseline | Threshold | How measured | Frequency |
|---|---|---|---|---|---|
| Value | Avg handling time | 46 min | ≤32 min (−30%) | Case system timestamps | Weekly |
| Value | Complaints closed within 15 days | 81% | ≥88% | Case system | Weekly |
| Quality | QA compliance score | 88% | ≥88% (no worse) | QA team, 10% stratified sample | Weekly |
| Quality | Reopened complaints | 6.5% | ≤6.5% | Case system | Bi-weekly |
| Adoption | % of eligible cases using the draft | — | ≥60% by week 6 | Tool logs | Weekly |
| Adoption | Handler satisfaction (1-5) | — | ≥3.8 | Survey wk 4, 8 | Twice |
| Safety | Responses with regulatory-language breaches | — | 0 critical | QA + automated phrase checks | Daily |
| Safety | Personal data of another customer in a draft | — | 0 | Automated check + QA | Daily |

**Evaluation:**
- **Offline:** 600 historic complaints with approved final responses. Pass criteria before go-live:
  - ≥90% factual consistency with account data;
  - 100% of drafts cite a policy source;
  - zero critical policy breaches in 200 adversarial cases.
- **Online:** 10% QA sample, stratified by category and complexity.
- **Sample size:** ~3,500 complaints per arm over 10 weeks is sufficient to detect a 10% change in the 15-day closure rate.

**Guardrails:**
- Drafts only; the handler edits and sends.
- No drafting for excluded categories.
- Retrieval restricted to approved policy texts.
- Customer data stays in the bank's cloud tenancy, with no vendor training on it.
- All drafts and edits are logged.
- Kill switch with the Head of Complaints.

**Approvals:** AI risk committee (tier: Limited, internal draft with human send); privacy review; security review; communication to the handlers' representative body.

**Decision rules:**
- **Scale** to 300 handlers if all thresholds are met in weeks 6-10 and projected run cost is ≤₹55 per complaint.
- **Iterate** (one 6-week cycle) if handling time is met but QA is 85-88%.
- **Stop** if handling time falls by <15%, or there is any repeated critical breach.

**Scale-up requirements:**
- Integration into the case system (currently a side panel).
- Hindi accuracy improvements.
- Support model.
- Est. ₹2.4 Cr one-off and ₹1.1 Cr per year at 300 users (see the business case).
