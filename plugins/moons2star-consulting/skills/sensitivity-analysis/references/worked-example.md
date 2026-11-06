# Worked example (illustrative; fictional figures; recompute with real data)

**Decision:** build a new 10,000-units-a-year assembly line.
- Base: volume 10,000/yr; price ₹4,500; unit variable cost ₹2,900; fixed cost ₹1.2 Cr/yr; capex ₹3.0 Cr; 5-year life; 12% discount rate; no salvage value.
- **Decision metric:** NPV ≥ 0.
- **As first presented:** contribution 10,000 × ₹1,600 = ₹1.6 Cr/yr, less fixed ₹1.2 Cr = ₹0.4 Cr/yr; × 3.605 (5-yr annuity at 12%) = ₹1.44 Cr, less ₹3.0 Cr capex → **NPV ≈ −₹1.56 Cr**.

**Correction caught in review:** most of the ₹1.2 Cr is shared overhead that exists anyway. **Only ₹0.5 Cr is incremental.**
- Incremental operating cash = 1.6 − 0.5 = ₹1.1 Cr/yr.
- PV = 1.1 × 3.605 = ₹3.97 Cr.
- **Base NPV ≈ +₹0.97 Cr.**

*Lesson: test what is incremental before testing sensitivities.*

## Tornado (incremental base, NPV ₹ Cr)
| Driver | Low | High | Range source | NPV @low | NPV @high | Swing |
|---|---|---|---|---|---|---|
| Volume | 7,500 | 11,000 | Order pipeline P10/P90 | −0.47 | 1.55 | 2.02 |
| Price | ₹4,200 | ₹4,600 | Last 3 yrs' realised prices | −0.11 | 1.33 | 1.44 |
| Unit variable cost | ₹3,150 | ₹2,850 | Commodity range | 0.07 | 1.15 | 1.08 |
| Capex | ₹3.6 Cr | ₹2.9 Cr | Vendor quotes ±, contingency | 0.37 | 1.07 | 0.70 |
| Incremental fixed | ₹0.7 Cr | ₹0.45 Cr | Staffing plan | 0.25 | 1.15 | 0.90 |

## Switching values
| Driver | Switching value | % from base | Within plausible range? |
|---|---|---|---|
| Volume | ~8,320 | −17% | **Yes (fragile)** |
| Price | ~₹4,232 | −6.0% | **Yes (fragile)** |
| Unit variable cost | ~₹3,170 | +9% | At the edge |
| Capex | ~₹3.97 Cr | +32% | No |

## Scenarios
| Scenario | Story | Settings | NPV | Meets? |
|---|---|---|---|---|
| Price war | A competitor enters | Price ₹4,250, volume 9,000 | −0.42 | No |
| Commodity spike | Steel +15% | Unit cost ₹3,100 | 0.25 | Yes (thin) |
| Strong demand | Export order | Volume 11,000, price ₹4,550 | 1.73 | Yes |

## Verdict and responses
**Fragile on volume and price.**
| Critical driver | Reducible? | Response | Owner | Trigger |
|---|---|---|---|---|
| Volume | Partly | Secure 2 anchor contracts covering ≥6,000 units with take-or-pay before committing capex | CCO | No signed contracts by Mar → defer |
| Price | Partly | Price-escalation clause linked to the steel index; value-based pricing for premium variants | CCO | Realised price < ₹4,400 for 2 quarters |
| Unit cost | Hedge | Quarterly steel contracts with a band | CPO | Index +10% |
