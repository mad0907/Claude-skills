# Worked example (illustrative; fictional telecom operator, churn prediction for postpaid customers)

**Decision:** which postpaid customers to target with retention offers each month.
**Method:** supervised model predicting churn within 90 days.
**Overall:** **Partial.** A pilot is feasible on a 14-month MVD. One blocker (consent wording for using network-quality data in marketing) must be cleared first.

| Source | Needed for | Access | History / volume | Quality | Labels | Representativeness | Legal / privacy | Owner | Rating |
|---|---|---|---|---|---|---|---|---|---|
| Billing | Tenure, ARPU, plan changes, payment delays | Nightly extract | 4 yrs; 6.2M accounts | Good; 0.4% missing ARPU | — | All circles | Contract necessity; marketing use per privacy notice: check | Billing IT | Ready |
| CRM (disconnection reasons) | **Churn label** | API | 4 yrs | Reason codes changed in Mar 2025; 31% "Other" | Churn date reliable; **reason unreliable** | — | — | Customer Ops | Partial |
| Network quality (dropped calls, data speeds by cell) | Experience features | Data lake, 2-day lag | 14 months only | Cell-to-customer mapping 85% complete | — | Rural circles under-covered | **Using network data for marketing targeting needs purpose review and possibly a notice update (DPDP)** | Network Analytics | Partial / **Blocker (legal)** |
| Call-centre transcripts | Complaint themes | Vendor-hosted | 18 months; 3 vendors | Different taxonomies | — | Mostly urban, English/Hindi | Contains personal data; vendor transfer terms | Customer Service | Not ready (improvement) |
| Retention offers history | Uplift modelling later | Spreadsheets | 2 yrs | Inconsistent | Offer accepted Y/N | — | — | Retention team | Not ready (improvement) |

**Checks:**
- **Leakage:** the "port-out request" flag occurs 3-7 days before churn and must be excluded from features.
- **Label noise:** a re-label sample of 300 "Other" disconnections found 40% were actually price-related.
- **Representativeness:** rural circles have half the network data coverage. Report model performance by circle, and don't use the model in rural circles until validated.

**Blocker:** confirm with the DPO that network-quality data can be used for retention targeting. Options: a legitimate-use analysis under DPDP, or a privacy-notice update ahead of May 2027 obligations.

**Minimum viable dataset:**
- Billing and CRM churn dates (4 years).
- Network features (last 14 months).
- 18 urban circles only.
- It cannot tell us churn reasons or offer effectiveness.

**Remediation plan:**
| Action | Owner | Effort | Date |
|---|---|---|---|
| DPO opinion on network data use | DPO | 2 weeks | 30 Nov |
| Fix CRM reason codes (mandatory field, 12 codes) | Customer Ops | 4 weeks | Jan |
| Standardise transcript taxonomy across vendors | Service + Procurement | 3 months | Q1 |
| Log retention offers in CRM | Retention | 6 weeks | Feb |
