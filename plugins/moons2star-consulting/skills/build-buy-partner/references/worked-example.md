# Worked example (illustrative; fictional mid-size general insurer, GenAI underwriting assistant for commercial lines)

**Capability:** an assistant that reads broker submissions (proposals, loss runs, surveys), extracts risk data, flags underwriting-guideline issues and drafts a risk summary and pricing inputs.

**Strategic importance:** **differentiating.** Faster, more consistent quoting in mid-market commercial lines is a stated growth priority. The underwriting rules and loss experience are proprietary.
**Internal starting point:** partial. Strong actuarial and underwriting expertise; a data team of 12; no LLM engineering experience.
**Urgency:** high. Two competitors launched faster quote turnaround; brokers are moving business.

| Criterion | Build | Buy (licensed vertical product) | Partner (insurtech co-development) |
|---|---|---|---|
| Time to value | 12-15 months | 3-4 months | 5-7 months |
| 5-year total cost (est.) | ₹22 Cr (team, platform, evaluation) | ₹18 Cr (licences + integration + per-document fees) | ₹15 Cr + revenue share on new products |
| Control and IP | Full | Low: vendor roadmap; our rules configured, not owned | Shared; negotiate ownership of our rules and evaluation sets |
| Data ownership | Full | Risk: vendor terms allow aggregated model training | Negotiable |
| Talent | Hire 6-8 scarce engineers | Minimal | Build skills alongside the partner |
| Integration / execution risk | High (new skills) | Medium | Medium (partner viability) |
| Flexibility and exit | High | Low (3-year minimum) | Medium (needs a clear exit clause) |
| Regulatory | Full control of outsourcing and data-location compliance | Vendor outside India for some processing → review | Hosting in our cloud tenancy |

**Recommendation: hybrid.**
1. **Partner now** for document extraction and the drafting layer, hosted in our cloud tenancy.
2. **Build in-house** the differentiating layer: underwriting-guideline checks, pricing inputs, an evaluation set of 1,500 historical submissions, and guardrails.
3. **Month 18 review:** bring extraction in-house or switch providers if needed.

*Trade-off accepted:* a slightly slower start than buying, in return for owning the differentiating logic and the data rights.

**Guardrails:**
- **Contract:**
  - no training on our data without written consent;
  - our rules, prompts and evaluation sets are our IP;
  - 30-day notice of model changes, with regression testing;
  - audit rights;
  - termination for convenience after 12 months, with transition support and data return in usable formats;
  - processing in India.
- **Build:** hire a 4-person AI engineering core plus an underwriting product owner; gates at months 4, 8 and 12 on accuracy (≥95% on key fields) and underwriter adoption (≥60%).
- **Governance:** an AI risk tier assessment; human underwriter decides every quote.

**Revisit triggers:**
- The partner's roadmap diverges or its financial health deteriorates.
- The internal team reaches the accuracy target independently.
- Licence pricing rises >25%.
