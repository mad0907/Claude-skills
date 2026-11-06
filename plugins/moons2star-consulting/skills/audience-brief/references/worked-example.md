# Worked example (illustrative; fictional manufacturer, proposal to migrate 4 data centres to hybrid cloud)

**The ask:** approve ₹31 Cr over 24 months for hybrid-cloud migration, replacing a ₹48 Cr hardware refresh. Decision at the Audit and Risk Committee on 12 May, then the board.
**Fallback ask:** approve Phase 1 (₹9 Cr: non-critical workloads) and a cost review after 6 months.

| Person | Role | Measured on / worries | Believes now | Needs to believe | Likely first question | Style |
|---|---|---|---|---|---|---|
| CFO | Influencer (recommends to the board) | Free cash flow; opex creep | "Cloud always costs more over time" | "3-year TCO is 12% lower; opex controls exist" | "What happens to run-rate in year 3?" | Numbers first |
| Audit and Risk Committee Chair | Decision gate | Cyber, data residency, vendor concentration | "Cloud = loss of control" | "Controls are stronger than today; exit plan exists" | "Where is our data, and who can access it?" | Risk-focused, formal |
| COO | Blocker (plants depend on uptime) | Plant uptime | "Migration will disrupt production" | "Plant systems stay on-site; phased cutover" | "What's the downtime plan?" | Practical |
| Independent director (ex-tech) | Influencer | Architecture quality | Neutral, sceptical of vendors | "Multi-cloud-ready design; no lock-in" | "How portable is this?" | Technical |
| CEO | Decision-maker (with board) | Strategy, cost, speed | Supportive if the board is comfortable | "Board risks are addressed" | "Are the CFO and COO aligned?" | Headline |

**Objections → evidence / concession**
1. "Costs will creep after year 2." → A 5-year TCO with reserved-capacity pricing, monthly cost governance and tagging, and a cost-overrun trigger to the CFO.
2. "Data residency and DPDP compliance." → Data stays in India regions; a processor contract mapped to DPDP obligations; DPO sign-off.
3. "Plant downtime." → **Concession:** plant OT systems stay on-premise; only IT workloads move.
4. "Vendor lock-in." → Containerised workloads; an exit plan with tested data export.

**Altitude and format:**
- 6-page paper plus a 10-slide summary.
- TCO table on page 2.
- Architecture detail in the appendix.
- Avoid acronyms; define "hybrid cloud" in one line.

**Pre-wiring:**
| Who | When | Message | Ask / listen for | Owner |
|---|---|---|---|---|
| CFO | 2 weeks before | TCO and cost controls | Agree assumptions; invite challenge | CIO |
| COO | 2 weeks before | OT stays on-site | Confirm the cutover windows | CIO + Plant IT |
| ARC Chair | 10 days before | Risk and controls summary | Which assurance she wants (e.g. internal audit review) | CIO + CRO |
| Independent director | 1 week before | Architecture walkthrough | Concerns on portability | Chief Architect |
