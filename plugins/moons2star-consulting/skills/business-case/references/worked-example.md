# Worked example (illustrative; fictional figures; recompute with real data)

**Proposal:** automate accounts payable at a 5,000-employee manufacturer (180,000 invoices a year, 22 AP staff).

**Recommendation and ask:** approve ₹3.4 Cr one-off, in 2 tranches, plus ₹0.62 Cr a year run cost.
- NPV @ 12% (5 yrs) ≈ ₹4.1 Cr; IRR ≈ 38%; payback ≈ 2.3 years.
- **Break-even:** NPV turns negative if touchless processing reaches only 34% (plan: 65%).

## Options
| Option | Description | NPV (₹ Cr) | Notes |
|---|---|---|---|
| Baseline | Current process; volumes +6%/yr → 2 more AP hires by Y3; late-payment penalties continue | — | Reference |
| Do-minimum | Enable e-invoicing intake + rules-based matching in the existing ERP | 1.6 | Cheap; caps touchless at ~40% |
| **Proposed** | Do-minimum + AI capture and exception handling + supplier portal | **4.1** | Recommended |
| Outsource AP | Third-party BPO | 2.2 | Lower control; 3-year lock-in |

## Incremental cash flows (₹ Cr, proposed vs baseline)
| | Y0 | Y1 | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|---|---|
| One-off (software set-up, integration, migration, change, internal backfill, 15% contingency) | -3.40 | | | | | |
| Recurring (licences, support, 0.5 FTE admin) | | -0.62 | -0.64 | -0.66 | -0.68 | -0.70 |
| Hiring avoided (2 planned AP hires from Y2; +2 more by Y4) | | | 0.30 | 0.30 | 0.60 | 0.60 |
| Attrition not backfilled (4 roles over Y1-Y2, redeployed elsewhere: counted only when budget is cut) | | 0.30 | 0.60 | 0.60 | 0.60 | 0.60 |
| Early-payment discounts captured (ramp 30% → 80%) | | 0.25 | 0.55 | 0.70 | 0.75 | 0.80 |
| Duplicate / erroneous payments avoided | | 0.15 | 0.25 | 0.30 | 0.30 | 0.30 |
| Late-payment penalties avoided | | 0.10 | 0.15 | 0.15 | 0.15 | 0.15 |
| **Net** | **-3.40** | **0.18** | **1.21** | **1.39** | **1.72** | **1.75** |

(Recompute NPV, IRR and payback with code; the figures above are illustrative.)

## Sensitivity
| Change | NPV (₹ Cr) |
|---|---|
| Touchless 50% instead of 65% | 2.3 |
| Discounts captured −40% | 2.9 |
| One-off cost +25% | 3.3 |
| 6-month delay | 3.2 |
| Downside (all of the above, linked) | 0.4 |

## Benefits register (extract)
| Benefit | Type | Owner | Baseline | Target | How banked |
|---|---|---|---|---|---|
| Hiring avoided | Cash-releasing | CFO / CHRO | Plan: +4 AP FTE by Y4 | 0 added | Headcount plan revised |
| Early-payment discounts | Cash-releasing | Treasurer | ₹0.2 Cr/yr captured | ₹1.0 Cr/yr | Finance-income budget |
| Faster close (AP cut-off −1 day) | Non-financial | Controller | 9-day close | 8-day | — |

## Stage gates
- **Tranche 1 (₹1.6 Cr):** do-minimum plus the AI capture pilot on 2 plants.
- **Tranche 2 (₹1.8 Cr):** released if, after 3 months on the pilot plants, touchless is ≥50%, the exception backlog is ≤2 days, and duplicate payments are down ≥50%.
- **Kill / rethink:** touchless <40% after 4 months → stop at do-minimum.

**Post-implementation review:** month 18.
