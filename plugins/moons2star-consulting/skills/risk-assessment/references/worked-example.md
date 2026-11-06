# Worked example (illustrative; fictional Indian digital lender launching in Indonesia in 2027)

**Objectives:**
- Launch by Q3 2027.
- 100,000 active borrowers by end-2028.
- Credit loss ≤4%.
- No regulatory sanctions.

**Scales:**
- **Impact 5:** >$5M loss, launch delay >12 months, regulatory sanction or licence risk.
- **Impact 4:** $2-5M or a 6-12 month delay.
- **Likelihood 5:** >50% in the horizon.
- **Likelihood 4:** 30-50%.
- **Likelihood 3:** 10-30%.

| # | Risk | Cat. | L | I | Inh. | Controls (effectiveness) | Res. | vs appetite | Treatment | Owner | Due | KRI |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Because licences require a local partner, approval may take 12-18 months, delaying launch and burning ~$4M | Regulatory | 4 | 5 | 20 | Local counsel engaged (effective) | 15 | Outside | **Reduce:** shortlist 3 licensed partners; pursue partnership and licence in parallel | Head Strategy | Feb 2027 | Regulator meeting scheduled by Feb |
| 2 | Because we lack local credit data, underwriting models may under-predict default, causing losses above 4% | Credit / model | 3 | 4 | 12 | Bureau partnership (partial); conservative limits (effective) | 8 | Within tolerance | Reduce: test-and-learn limits; champion-challenger models | CRO | Ongoing | 30+ DPD on first cohorts >6% |
| 3 | Because aggressive third-party collection practices are common, agents may breach conduct rules, causing sanctions and reputational damage | Conduct | 3 | 5 | 15 | Code of conduct (design only) | 12 | Outside | Reduce: in-house collections for 90 days; call recording; complaint triggers | Head Ops | Before launch | Complaints per 1,000 loans |
| 4 | Because personal data crosses borders for model training, we may breach local data-protection law | Legal / privacy | 3 | 5 | 15 | Not yet designed | 15 | Outside | **Avoid:** train in-country; anonymise; legal opinion | DPO | Q1 2027 | — |
| 5 | Because one cloud region hosts all services, an outage may halt disbursements | Technology | 2 | 4 | 8 | Multi-zone (effective) | 4 | Within | Accept (CTO, to Dec 2027) | CTO | — | Uptime <99.9% monthly |

**Heat map:** inherent 3 red, 2 amber → residual 1 red (#1), 3 amber, 1 green.
**Concentration:** risks 1 and 3 both depend on partner selection, so it is a key decision.
**Issue (not a risk):** the country head is not yet hired (already happening) → issue log.
