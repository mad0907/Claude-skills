# Worked example (illustrative; fictional Indian manufacturing group, Finance function, 140 people)

**Intent:** reduce close time and cost-to-serve; improve cash.
**Baseline:**
- 9-day monthly close.
- 210,000 supplier invoices a year with 22% touchless processing.
- DSO of 68 days.
- 14 legal entities on one ERP, with 2 acquired entities on a small-business accounting package.
- Intercompany mismatches take ~600 hours a month.

| # | Process step | Use case | Type | Value mechanism and rough size (est.) | Data | People / risk | Agentic readiness | Class |
|---|---|---|---|---|---|---|---|---|
| 1 | AP invoice capture | For AP clerks, AI extracts invoice data and matches to PO/GRN, routing only exceptions, so that touchless rises from 22% to 60% | Gen + rules | 210k × 38% newly touchless × 7 min = ~9,300 hrs/yr ≈ 5 FTE redeployable | 3 yrs of invoices in ERP + PDFs | Internal; low | n/a | Quick win (ERP feature already licensed, unused) |
| 2 | AP exceptions | For AP leads, AI explains the likely reason for each exception and drafts the vendor query | Gen | 30% faster exception closure; fewer late-payment penalties | Exception history | Internal | n/a | Build |
| 3 | AR cash application | For AR team, AI matches remittances (email/PDF) to open items | Gen + Pred | Unapplied cash down 40%; ~2 days DSO improvement × ₹11 Cr daily revenue ≈ ₹22 Cr cash released (one-off) | Bank files, remittance emails | Internal | n/a | Build |
| 4 | Collections | For collectors, AI predicts invoices likely to go overdue and drafts tailored reminders | Pred + Gen | DSO -3 to -5 days (est.) | 3 yrs AR history | Customer-facing emails: human sends | n/a | Build |
| 5 | Intercompany reconciliation | An agent pulls balances from both entities, matches, proposes adjustments under ₹1 lakh for approval, escalates the rest | **Agent** | ~600 hrs/month → ~150; close -1.5 days | ERP APIs yes; acquired entities via export only | Postings: approval required | Process docs Partial; APIs Partial (acquired entities); reversible Yes (approval gate); outcome measurable Yes; owner Yes; logging Yes → **proceed with ERP entities; acquired entities later** | Platform (agent orchestration) |
| 6 | Close commentary | For FP&A, AI drafts variance commentary from trial balance and driver data | Gen | 3-4 days of analyst time per month; faster board pack | TB + drivers | Internal; numbers must be verified | n/a | Quick win |
| 7 | Vendor master changes | Bank-detail change requests verified by AI against documents, with call-back for anomalies | Pred + Gen | Fraud-loss avoidance (one avoided incident can exceed ₹1 Cr) | Change history | Fraud risk: human approval mandatory | n/a | Build |
| 8 | Travel and expense audit | AI flags out-of-policy claims | Pred | Audit coverage 5% → 100%; leakage ~0.8% of spend | T&E system | Employee-facing: fairness | n/a | Quick win (vendor feature) |
| 9 | Month-end journal approvals | **Fix the process first:** 40% of manual journals are recurring and should be automated by rule | Non-AI | 2,000 journals/month | — | — | — | Process fix |

**Themes and shared foundations:**
- **Document AI layer:** serves use cases 1, 3 and 7.
- **Agent orchestration with an approval workflow and audit log:** serves use case 5, and later the AP exceptions.
- **Finance data model:** the trial balance plus drivers.

**Quick wins:** 1, 6, 8. **Fix first:** 9.

**Next:** prioritise. Use cases 3 and 5 likely lead on value, and 1 on speed.
