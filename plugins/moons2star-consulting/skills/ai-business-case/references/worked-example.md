# Worked example (illustrative; fictional figures; recompute with real data)

**Use case:** scale a GenAI contract-review assistant from 20 pilot users to 400 lawyers and contract managers across a group (India + UK).

**Ask:** ₹14.2 Cr over 3 years, released in 3 stages. This approval is Gate 2 (scale to 150 users): ₹4.6 Cr.

## Baseline (measured over 6 months, 2026)
| Metric | Value | Source |
|---|---|---|
| Contracts reviewed / year | 52,000 | CLM system |
| Avg review time | 95 min | Time study (n=380) |
| Fully loaded cost / hour | ₹3,200 | HR / Finance |
| External counsel spend on overflow reviews | ₹6.5 Cr / yr | AP |
| Cycle time (request → signed) | 11 days | CLM |

## Pilot result (20 users, 12 weeks, 2,900 contracts)
- Time per review fell to 58 min (−39%) on standard templates, but **rose** for non-standard contracts (+8%, from extra checking).
- Standard contracts are 72% of volume.
- Clause-extraction accuracy was 94%. 3.5% of AI flags were false positives, adding ~4 min each to check.

## Benefit mechanisms (Year 3, steady state)
| Benefit | Hard/soft | Formula | Y3 value | Owner | How banked |
|---|---|---|---|---|---|
| Overflow counsel spend avoided | **Hard** | 60% of overflow volume brought in-house × ₹6.5 Cr | ₹3.9 Cr | General Counsel | Legal budget cut from FY29 |
| Hiring avoided (planned growth of 14 FTE for volume growth) | **Hard** | 10 FTE × ₹38 L | ₹3.8 Cr | GC + CHRO | Hiring plan revised |
| Capacity released, redeployed to negotiation support | Soft | Hours released beyond the above | (not counted) | GC | — |
| Cycle time -3 days → earlier revenue recognition on sales contracts | Hard (cash timing) | 3 days × ₹9 Cr daily contracted revenue | ₹27 Cr one-off cash timing (financing benefit ~₹0.3 Cr/yr at 10%) | CFO | Working-capital plan |

## Ramps
| Quarter | Q1 | Q2 | Q3 | Q4 | Y2 | Y3 |
|---|---|---|---|---|---|---|
| Users | 150 | 250 | 350 | 400 | 400 | 400 |
| Adoption (share of eligible reviews) | 35% | 50% | 60% | 65% | 72% | 75% |

## Costs (₹ Cr)
| Item | One-off | Y1 run | Y2 run | Y3 run | Driver |
|---|---|---|---|---|---|
| Integration with CLM, SSO, DLP | 1.6 | | | | Vendor + internal IT |
| Playbooks, clause library, evaluation set (1,000 annotated contracts) | 0.9 | | | | Legal ops |
| Change, training, champions | 0.6 | 0.2 | 0.1 | 0.1 | |
| Licences (400 seats) | | 1.9 | 2.1 | 2.1 | Per seat |
| Usage-based inference (above seat allowance) | | 0.5 | 0.8 | 0.9 | ~22k tokens/review × volume |
| Monitoring, evaluation reruns, re-validation | | 0.3 | 0.3 | 0.3 | 0.5 FTE + tooling |
| Governance (AI risk review, DPIA, audit) | 0.2 | 0.1 | 0.1 | 0.1 | |
| Contingency (15% of one-off) | 0.5 | | | | |

## Returns (computed with code; illustrative)
- NPV @ 12% over 5 years ≈ ₹11.4 Cr; IRR ≈ 41%; payback ≈ 2.1 years.
- **Break-even adoption ≈ 38%** (steady state).

| Scenario | NPV (₹ Cr) |
|---|---|
| Adoption −30% | 5.2 |
| Accuracy −10 pts (rework doubles) | 7.9 |
| Inference price +50% | 10.2 |
| 6-month delay | 8.6 |
| Counsel spend saving only 30% (not 60%) | 6.0 |

## Stage gates
- **Gate 2 (now → 150 users):** ₹4.6 Cr.
- **Gate 3 (→ 400 users), month 6:** adoption ≥50% for 8 consecutive weeks; QA error rate ≤ baseline; inference cost ≤ ₹60 per review. **Kill/hold** if adoption is <35% or the error rate exceeds the baseline.
- **Gate 4 (agentic redlining pilot):** separate case.

## Risks and controls (AI tier: Limited; internal, human decides)
- Confidential data leakage: enterprise tenancy, no training on our data (contract clause), DLP.
- Hallucinated clause interpretations: answers cite clause text; lawyer sign-off is mandatory.
- Vendor lock-in: export of playbooks and annotations; model-agnostic design for clause extraction.
