# Worked example (illustrative; fictional meal-kit subscription, unit = customer, monthly boxes)

## Contribution waterfall (per box)
| Line | ₹ | % of gross |
|---|---|---|
| Gross price | 2,400 | 100% |
| Discounts (avg, incl. first-box offers) | −288 | −12% |
| Refunds and credits | −48 | −2% |
| **Net revenue** | **2,064** | 86% |
| Food cost | −1,150 | −48% |
| Packaging (insulated) | −140 | −6% |
| Delivery | −220 | −9% |
| Payment fees (2%) | −41 | −2% |
| Customer support (variable) | −35 | −1.5% |
| **Contribution** | **478** | **20%** |

## Acquisition
| Channel | Spend (₹ L/month) | New customers | Paid CAC | Fully loaded CAC (incl. team, agency, tools) |
|---|---|---|---|---|
| Social ads | 42 | 2,300 | 1,826 | 2,050 |
| Search | 18 | 1,250 | 1,440 | 1,620 |
| Referral (₹500 credit each side) | 8 | 900 | 889 | 980 |
| **Blended** | 68 | 4,450 | 1,528 | 1,710 |

## Retention (cohort average, last 6 cohorts)
- Boxes ordered per customer: month 1 = 1.0; month 2 = 0.55; month 3 = 0.41; month 6 = 0.26; month 12 = 0.15.
- 12-month cumulative ≈ 4.1 boxes per acquired customer. A 24-month cap adds ~1.0 box.
- **LTV (24-month cap, 12% annual discount)** ≈ 5.0 boxes × ₹478 ≈ **₹2,350**.
- **LTV:CAC** (fully loaded, blended) ≈ 1.4: well below a healthy level. **CAC payback** ≈ 10 months (cumulative contribution passes ₹1,710 at ~3.6 boxes), which looks fine, but most customers churn soon after, so there is little value beyond payback.
- **Weakest links:** steep month-2 drop-off (45% never reorder) and social CAC.

## Levers (computed with code; illustrative)
| Lever | Change | Contribution / box | LTV | LTV:CAC |
|---|---|---|---|---|
| Month-2 retention | 0.55 → 0.65 (onboarding and menu fit) | — | +₹420 | 1.6 |
| Shift 30% of social spend to referral | Blended CAC 1,710 → 1,420 | — | — | 1.7 |
| Delivery density (2 days/week per zone) | −₹45/box | 523 | +₹225 | 1.5 |
| First-box discount 40% → 25% | Fewer but stickier customers; CAC +10% | +₹35 avg | +₹180 | 1.4 |
| **Combined (retention + referral + density)** | | 523 | ~₹2,990 | **2.1** |

**Path:** fix month-2 retention first (onboarding call, swap-friendly menus, a "skip a week" option), rebalance acquisition towards referrals, and densify delivery days. Re-test with the next 3 cohorts before scaling spend.
