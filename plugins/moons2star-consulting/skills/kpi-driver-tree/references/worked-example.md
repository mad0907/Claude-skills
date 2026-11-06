# Worked example (illustrative; fictional cement plant, 3.0 MTPA clinker capacity, FY baseline)

```
EBITDA / tonne (₹1,050)  = Net realisation/t − Variable cost/t − Fixed cost/t
├─ Net realisation/t (₹5,200)  = Gross price × (1 − trade discounts %) − freight-out/t
│   ├─ Gross price (₹5,600/t)              Owner: Head Sales
│   ├─ Trade discounts (5.4%)              Owner: Head Sales        [lead: weekly discount report]
│   └─ Freight-out (₹96/t)  = lead distance × ₹/t-km               Owner: Head Logistics
├─ Variable cost/t (₹3,280)
│   ├─ Power & fuel/t (₹1,650) = heat consumption (kcal/kg clinker) × fuel cost (₹/kcal) × clinker factor
│   │   │                        + power (kWh/t) × tariff (₹/kWh)
│   │   ├─ Heat consumption (735 kcal/kg)   Owner: Plant Head        [lead: daily kiln data]
│   │   ├─ Fuel mix: alternative fuel share (8%)  Owner: AFR Manager
│   │   ├─ Power (72 kWh/t cement)          Owner: Electrical Head
│   │   └─ Clinker factor (0.70)            Owner: Quality Head
│   ├─ Raw materials/t (₹620)               Owner: Mines Head
│   └─ Packing & other variable (₹1,010)    Owner: Packing Head
└─ Fixed cost/t (₹870) = Fixed cost ÷ volume; volume = capacity × utilisation (78%)
    ├─ Kiln availability (88%) × run-rate (92% of rated)   Owner: Plant Head
    └─ Fixed cost (₹/yr)                                  Owner: Plant Controller
```
(Fuel cost is shown per kcal so the heat-consumption lever is multiplicative.)

**Reconciliation:** the leaves recreate FY EBITDA within 0.8% of reported (the difference is inventory change and one-offs).

## Lever sensitivity (realistic change → EBITDA/t; computed with code; illustrative)
| Lever | Realistic change | ΔEBITDA/t | Annual Δ (₹ Cr, at 3.2 Mt cement) | Owner | Controllability |
|---|---|---|---|---|---|
| Trade discounts | −0.5 pt | +₹28 | +9.0 | Head Sales | Medium |
| Heat consumption | 735 → 715 kcal/kg | +₹24 | +7.7 | Plant Head | High |
| Utilisation | 78% → 82% (fixed-cost absorption) | +₹42 | +13.4 | Plant Head / Sales | Medium |
| Alternative fuel share | 8% → 15% | +₹30 | +9.6 | AFR Manager | Medium |
| Clinker factor | 0.70 → 0.68 (more blending) | +₹22 | +7.0 | Quality Head | High (within standards) |
| Power | 72 → 69 kWh/t | +₹19 | +6.1 | Electrical Head | High |
| Freight lead distance | −10 km | +₹14 | +4.5 | Logistics | Medium |

**Trade-offs:**
- Higher utilisation may require selling into farther markets (more freight) or at higher discounts.
- Alternative fuels can raise heat consumption.
- The clinker factor is constrained by product standards and customer specifications.

**Review rhythm:**
- Daily: heat, power, kiln availability.
- Weekly: discounts, dispatches, lead distance.
- Monthly: EBITDA/t bridge.
