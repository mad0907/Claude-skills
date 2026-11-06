# Worked example (illustrative; group month-end close across business units, shared services and IT)

Roles:
- **GFC** = Group Financial Controller
- **BUF** = BU Finance Head
- **SSC** = Shared Services Lead
- **SSA** = Shared Services Accountant
- **IT** = ERP Support Lead
- **IA** = Internal Audit

| Activity / decision | GFC | BUF | SSC | SSA | IT | IA |
|---|---|---|---|---|---|---|
| Publish close calendar | A | C | R | I | I | I |
| Post accruals (BU-specific) | I | A | C | R | — | — |
| Prepare intercompany reconciliations | I | C | A | R | — | — |
| Approve intercompany adjustments > ₹50 lakh | **A** | C | R | — | — | I |
| Approve manual journals > ₹1 Cr | A | C | R (prepares) | — | — | I |
| Run ERP period close | I | I | A | — | R | — |
| Review BU results and commentary | C | **A** | R | — | — | — |
| Sign off group consolidation | **A** | C | R | — | — | I |
| Test close controls | I | I | C | — | — | **A/R** |

**Key decisions: decision rights**
| Decision | Recommends | Agrees (veto) | Input | Decides | Performs |
|---|---|---|---|---|---|
| Post a material late adjustment after the close cut-off | SSC | BUF (for own BU) | IA | GFC | SSA |
| Change accounting policy for a BU | BUF | Statutory auditor (consulted), Audit Committee (for material changes) | GFC team | CFO | SSC |

**Checks:**
- Earlier draft had 2 A's on "Review BU results" (BUF and GFC) → fixed: BUF A, GFC C.
- **Segregation of duties:** the SSA prepares journals, and the SSC can't approve its own journals above ₹1 Cr; the GFC approves.
- SSC overloaded at close (R on 5 of 9 rows) → add a close coordinator role.

**Escalation:** a disagreement between BUF and SSC on an adjustment goes to the GFC within 24 hours during close.
