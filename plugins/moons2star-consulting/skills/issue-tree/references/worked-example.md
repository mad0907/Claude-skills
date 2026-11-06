# Worked example (illustrative; fictional 400-bed hospital, operating margin fell from 6% to 1% in two years)

**Key question:** why has operating margin fallen from 6% to 1% between FY24 and FY26?
**Type:** diagnostic. **Level-1 logic:** margin = (revenue − operating cost) ÷ revenue; revenue = inpatient + outpatient + other; cost = staff + medical consumables + other operating.

**Early quantification** (bridge, ₹ Cr):
- Revenue +₹48 Cr; costs +₹78 Cr.
- The cost increase is driven by staff (+₹41 Cr) and consumables (+₹22 Cr).
- So the cost branches get priority.

1. **Did revenue per unit of activity fall?**
   1.1 Did the payer mix shift towards lower-tariff payers (government schemes vs private insurance vs cash)?
       - Analysis: revenue and volume by payer, FY24-26 | Data: billing | Owner: Finance | Effort: S | **Priority: H**
   1.2 Did package rates or insurer discounts change?
       - Analysis: realised rate per package, top 30 procedures | Data: contracts, billing | Owner: RCM | M | M
   1.3 Did the case mix shift towards less complex, lower-revenue cases?
       - Analysis: case-mix index trend | Data: medical records | Owner: Medical Admin | M | M
   1.4 Did occupancy or OT utilisation fall?
       - Analysis: occupancy and OT minutes by specialty | Data: HIS | Owner: Operations | S | L (both are stable)
2. **Did cost per unit of activity rise?**
   2.1 Staff cost
       2.1.1 Did agency or contract nurse use rise? (rate × hours) | Data: payroll, vendor invoices | HR | S | **H**
       2.1.2 Did consultant payouts (fee-share %) change? | Data: contracts | Finance | S | **H**
       2.1.3 Did the staffing ratio per occupied bed rise? | Data: rosters, HIS | Nursing | M | M
   2.2 Consumables cost
       2.2.1 Did prices rise (vs CPI and the contracts)? | Data: purchase data | Procurement | S | **H**
       2.2.2 Did usage per case rise (e.g. implants, high-value consumables)? | Data: issue records by case | Pharmacy / OT | M | **H**
       2.2.3 Did wastage or expiry increase? | Data: inventory write-offs | Stores | S | M
   2.3 Length of stay: did ALOS rise for the same case mix? | Data: HIS | Medical Director | M | M
   2.4 Other operating costs (utilities, maintenance, IT) | Data: GL | Finance | S | L (+₹15 Cr; mostly a known energy tariff increase)
3. **Were there one-offs or accounting changes?**
   3.1 Provisions, write-offs (e.g. receivables from government schemes) | Data: GL notes | Finance | S | **H**
   3.2 Classification changes between years | Data: auditor notes | Finance | S | M

**MECE check:** level 1 is a revenue/cost/one-off identity; level 2 for cost uses categories that sum to the total.

**Work first:**
- 2.1.1 agency nurses;
- 2.2.2 consumables per case;
- 2.1.2 consultant payouts;
- 1.1 payer mix;
- 3.1 receivable provisions.

**Pruned:** 1.4 (occupancy is stable at 79-81%); 2.4 (explained by a known tariff increase).
