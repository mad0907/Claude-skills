# Worked example (illustrative; fictional group with 14 entities, intercompany reconciliation at month-end)

**Goal:** cut intercompany reconciliation effort from ~600 to ≤150 hours a month and close 1.5 days faster, with zero unapproved postings.
**Process owner:** Group Financial Controller. **Control owner:** Head of Internal Control.

| Step | Today | Design | Autonomy | Tools and access | Escalation triggers | Controls |
|---|---|---|---|---|---|---|
| 1. Extract IC balances by counterparty | Analysts export from ERP | **Rules** (scheduled report) | n/a | ERP read: IC accounts only | Extract failure | Completeness check vs trial balance |
| 2. Match transactions | Spreadsheet matching | **AI-assisted** (fuzzy match on amount, date, reference, FX) | L3 for exact matches; L1 for fuzzy | Read: both entities' ledgers | Match confidence <0.9 | Sample review 5% weekly |
| 3. Investigate mismatches | Emails between entity accountants | **Agent:** gathers invoices, POs and emails; proposes a cause (timing, FX, missing invoice, wrong account) | L1 → L2 | Read: ERP, document store, shared mailbox (IC folder only) | Conflicting evidence; counterparty not responding in 2 days | Evidence attached to every proposal |
| 4. Propose adjusting entries | Accountant drafts journal | **Agent** drafts the journal in the approved template | L2 (approval by entity controller) | Write: **draft** journals only; cannot post | Amount >₹1 lakh; new GL account; cross-currency >2% variance | Agent cannot post or approve; posting by human (segregation of duties) |
| 5. Post entries | Accountant | **Human** | L0 | — | — | Standard journal approval limits |
| 6. Sign-off and reporting | Controller | **Human**, with an agent-drafted summary | L1 | Read | — | Controller attestation |

**Handoffs:** each proposal includes the mismatch, likely cause, evidence links, proposed entry, confidence and open questions. The controller's approve or reject decision and reason are captured to improve matching rules.

**Security:**
- Email and document content is treated as data. The agent cannot follow instructions found in documents.
- Tool calls are allow-listed.
- Outputs are validated against a schema (account codes, entity codes, amount limits).

**Logging:** case ID, sources read, tool calls, proposal, model and prompt version, approver, timestamps. Kept for 8 years with finance records (per policy).

**Metrics and thresholds:**
- Proposal accuracy ≥95% (approved without edit).
- Override rate trend.
- Exceptions ≤15%.
- Hours per close.
- Cost per reconciled pair ≤₹120.
- Zero unapproved postings.

**Phased autonomy:**
- **Phase 0 (1 close):** shadow mode; compare the agent's proposed causes with the accountants'.
- **Phase 1 (2 closes):** L1 recommendations.
- **Phase 2 (from close 4):** L2 drafting for amounts ≤₹1 lakh.
- **Promote to L3 for exact matches** after 3 closes at ≥99% accuracy.
- **Demote** on any control breach or accuracy below 90%.

**Cost and latency:** max 12 tool calls per case; cache entity master data; run overnight in batches; budget alert at 120% of plan.
