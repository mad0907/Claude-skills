# Worked example (illustrative; fictional D2C skincare brand, 5-year plan for a Series A raise)

**Purpose / decisions:**
1. How much capital is needed, and when, to reach EBITDA break-even?
2. Which channel mix maximises contribution?
3. What happens if CAC rises 30%?

**Audience:** board and investors. **Horizon:** monthly for 24 months, then quarterly to Y5. **Currency:** ₹ lakh.

## Sheet map
| Sheet | Contents | Key outputs |
|---|---|---|
| Cover | Purpose, version, check summary | All checks green? |
| Inputs | Drivers by theme; scenario columns; selector | — |
| Time | Period index, month/quarter flags, launch flags | — |
| Rev_D2C | Sessions × conversion × AOV; new vs repeat cohorts | D2C revenue, orders |
| Rev_Marketplace | Units × net realised price (after commission and returns) | Marketplace revenue |
| Rev_Retail | Doors × throughput × trade margin (from month 13) | Retail revenue |
| COGS | Unit cost by SKU family; MOQ price breaks | Gross margin |
| Marketing | Spend by channel; CAC by channel; payback | New customers |
| People | Headcount plan × loaded cost | Payroll |
| Opex | Fulfilment per order, payment fees, tech, rent | Contribution, EBITDA |
| WC | Inventory days (by MOQ cycles), receivable days (marketplace 15-30), payable days | Working capital |
| Capex_Dep | Moulds, warehouse fit-out | Depreciation |
| Funding | Equity rounds; venture debt | Cash, runway |
| Statements | P&L, BS, CF | — |
| Outputs | Dashboard; scenario comparison; CAC sensitivity grid | Peak funding need, break-even month |
| Checks | BS balance, cash tie, cohort totals, no errors | Pass/fail |
| Log | Changes and open issues | — |

## Key assumptions (extract)
| Driver | Unit | Base | Downside | Upside | Source | Owner |
|---|---|---|---|---|---|---|
| Site conversion | % | 2.1 | 1.7 | 2.5 | Last 6 months' analytics | Growth lead |
| AOV | ₹ | 1,150 | 1,050 | 1,250 | Order data | Growth lead |
| 6-month repeat rate | % of cohort | 32 | 24 | 38 | Cohort analysis | CRM lead |
| Blended CAC | ₹ | 780 | 1,015 (+30%) | 700 | Channel data | Marketing |
| Marketplace commission + returns | % of GMV | 28 + 6 | 30 + 9 | 26 + 5 | Contracts, history | Ops |
| Inventory days | days | 75 | 95 | 65 | Supplier MOQ cycles | Supply chain |

**Scenario design:** the selector switches linked sets. The downside combines lower conversion, higher CAC and higher returns (all of which fall in a weaker market).

**Calibration:** months 1-6 of the model are set to reproduce Jan-Jun actuals within ±3% on revenue and contribution before forecasting.

**Checks:** BS balances in all periods; CF closing cash = BS cash; cohort customer counts reconcile to orders; marketplace receivables never negative; flag any month with cash < 3 months of burn.

**Outputs:** peak funding need and month; EBITDA break-even month; runway by scenario; a CAC × repeat-rate sensitivity grid on cumulative burn.
