# Worked example (illustrative; ERP migration for a 14-entity group, go-live planned April 2027)

**Failure defined as:** it is December 2027. Go-live slipped twice, month-end close takes 15 days (from 8), and the programme is 45% over budget.
**Participants:** finance controllers, IT, plant accountants, an implementation-partner lead, internal audit, and 2 frontline AP clerks.

| Root cause | Example stories | Broken assumption | L | S | Preventive action | Tripwire | Response |
|---|---|---|---|---|---|---|---|
| Data migration underestimated | "Vendor master had 30% duplicates"; "Open items didn't reconcile at cutover" | Legacy data is ~90% clean | 4 | 5 | Data profiling now; dedicated cleansing squad of 6 (CFO, Jan) | <70% of vendor records pass validation by month 3 | Add a cleansing vendor; move go-live by one quarter |
| Business SMEs pulled back into day jobs | "Controllers missed design workshops during the audit season" | SMEs can give 50% of their time | 4 | 4 | Backfill 8 SMEs; protect their calendars (CHRO, Dec) | SME attendance <70% for 2 weeks | Escalate to the CFO; pause design sign-off |
| Custom changes bloat scope | "We rebuilt the old reports in the new system" | Standard processes are acceptable | 3 | 4 | Design authority; change requests need a business case (Programme Director) | >25 change requests by the design freeze | Design authority rejects non-essential ones; re-baseline |
| Testing compressed | "UAT squeezed to 2 weeks; close failed in parallel run" | Build finishes on time | 3 | 5 | Two full parallel closes required before go-live (non-negotiable) | Parallel close variance >0.5% | No go-live |
| Partner staffing churn | "Three architects rotated off" | Partner keeps its core team | 3 | 3 | Contractual key-person clause and penalties | Any named architect leaves | Invoke the clause; replacement within 2 weeks |

**Changes to the plan:**
1. Add a 6-week data-cleansing phase now.
2. Make 2 parallel closes a hard gate.
3. Backfill SMEs (₹1.4 Cr added to the budget).
4. A design authority with change control.

**Still not talking about:** "The acquired entities' processes are completely different. We haven't mapped them." → Add a discovery sprint for the acquired entities.

**Follow-up:** all items in the risk register; tripwires reviewed at every monthly SteerCo.
