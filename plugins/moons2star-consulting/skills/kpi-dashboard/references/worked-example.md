# Worked example (illustrative; fictional 300-bed multi-specialty hospital, monthly CEO dashboard)

**Decisions supported:**
1. Where to add or shift capacity (beds, OT slots, doctors).
2. Which service lines need commercial or clinical intervention.
3. Whether quality or safety issues need escalation to the board.
4. Cash and payer actions.

| Metric | Definition / formula | Source | Owner | Freq. | Target | G / A / R rule | Visual | Lead/Lag |
|---|---|---|---|---|---|---|---|---|
| Revenue | Net inpatient + outpatient revenue (after payer discounts) | ERP | CFO | Monthly | Plan | G ≥98% of plan; A 95-98%; R <95% | Bullet + 13-mo line | Lag |
| EBITDA margin | EBITDA ÷ net revenue | ERP | CFO | Monthly | 18% | G ≥17.5; A 16-17.5; R <16 | Line with band | Lag |
| Bed occupancy | Occupied bed-days ÷ available bed-days | HIS | COO | Weekly | 78% | G 75-85; A 70-75 or >88; R <70 | Line | Lead |
| ARPOB | Inpatient revenue ÷ occupied bed-days | HIS + ERP | CFO | Monthly | ₹52k | G ≥plan; A −3%; R −6% | Line | Lag |
| Average length of stay | Inpatient days ÷ discharges (excl. day care) | HIS | Medical Director | Monthly | 4.2 days | G ≤4.3; A 4.3-4.6; R >4.6 | Line, by specialty small multiples | Lead |
| OT utilisation | Used OT minutes ÷ scheduled OT minutes | OT system | COO | Weekly | 80% | G ≥78; A 70-78; R <70 | Bar by theatre | Lead |
| Referral inflow | New referrals from network doctors | CRM | Head Marketing | Weekly | 1,100/mo | Trend: 3 declines = A | Sparkline | Lead |
| Patient experience | Net promoter score, inpatient discharge survey | Survey tool | Head Patient Experience | Monthly | 55 | G ≥55; A 45-55; R <45 | Line | Lag |
| Hospital-acquired infection rate | HAIs per 1,000 patient-days | Infection control | Medical Director | Monthly | ≤1.5 | G ≤1.5; A 1.5-2.0; R >2.0 | Line + count | Lag (safety) |
| Serious safety events | Count of sentinel / serious events | Incident system | Medical Director | Monthly | 0 | Any = R and immediate CEO notice | Count tile | Lag (safety) |
| Insurer receivable days | Insurer receivables ÷ insurer revenue × 30 | ERP | CFO | Monthly | 45 | G ≤45; A 45-55; R >55 | Bar by payer | Lead (cash) |
| Claim denial rate | Denied ÷ submitted claims (value) | RCM system | Head RCM | Monthly | ≤4% | G ≤4; A 4-6; R >6 | Bar by payer | Lead |
| Nurse attrition (annualised) | Leavers ÷ average headcount × 12 | HRMS | CHRO | Monthly | ≤22% | G ≤22; A 22-28; R >28 | Line | Lead |

**Paired to prevent gaming:**
- Length of stay with 30-day readmission rate (in the drill-down).
- OT utilisation with surgical-site infection rate.

**Layout:**
- **Row 1:** status summary (3 R, 4 A, 6 G) and the top 3 exceptions with owners.
- **Row 2:** revenue, EBITDA margin, occupancy, ARPOB.
- **Row 3:** clinical (ALOS, HAI, safety), operations (OT, referrals), cash (receivables, denials), people (attrition).
- **Right panel:** commentary, e.g. "Denial rate 7.1% (R): one insurer changed pre-auth rules on 1 Aug. Action: payer-specific checklist plus training; Head RCM; 30 Sep."

**Data:** "As of" timestamp; HIS and ERP reconciled monthly; definitions owned by the CFO and the Medical Director; any change logged.

**Rhythm:**
- Weekly operations huddle on lead metrics.
- Monthly CEO review.
- Quarterly board version: 8 metrics, 8-quarter trends, plus quality and safety detail.
