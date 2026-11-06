# Worked example (illustrative; fictional general insurer, India, 14 candidate use cases)

**Weights:** Value 35, Feasibility 30 (Data 12, Tech 9, Integration 9), Adoption 20, Time 15. Agreed with the COO and CRO on 3 Feb.

| Use case | Value | Data | Tech | Integr. | Adoption | Time | Weighted (/5) | Risk tier | Gate | Quadrant | Owner |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Motor claims document triage (extract, classify, route) | 4 | 4 | 4 | 3 | 4 | 4 | **3.9** | Limited | Standard controls | Quick win | Head Claims Ops |
| Servicing agent-assist (answers with policy citations) | 4 | 3 | 4 | 3 | 4 | 4 | **3.7** | Limited | Grounding + logging required | Quick win | Head Service |
| Health claims fraud scoring | 5 | 4 | 3 | 3 | 3 | 3 | **3.6** | **High** (affects claim outcomes) | **Blocked until** validation function and fairness testing exist (est. Q3) | Strategic bet | CRO / Head Claims |
| Motor own-damage claim auto-settlement (agent) | 5 | 3 | 2 | 2 | 3 | 2 | **3.0** | **High** | Blocked: needs agent controls plus human approval above ₹50k | Strategic bet | Head Claims |
| Underwriting submission summariser (commercial lines) | 3 | 3 | 4 | 4 | 4 | 4 | **3.6** | Limited | Standard | Quick win | Head UW |
| Renewal churn prediction | 3 | 4 | 4 | 3 | 2 | 3 | 3.2 | Limited | Standard | Fill-in (no committed owner) | — |
| Marketing copy GenAI | 2 | 5 | 5 | 5 | 4 | 5 | 3.9 | Minimal | Policy only | Fill-in (low value, nearly free: do via enterprise tool) | CMO |
| Voice bot for first notice of loss | 3 | 2 | 3 | 2 | 2 | 2 | 2.4 | Limited | — | Park | — |
| ... | | | | | | | | | | | |

**Wave 1 (0-6 months):**
1. Claims document triage: highest score; builds the **document AI layer** that the fraud and auto-settlement cases need.
2. Servicing agent-assist: builds the **retrieval and grounding layer**; human in the loop.
3. Underwriting summariser: reuses the retrieval layer.
4. **Foundation: AI validation and fairness-testing capability** (second line). It is the prerequisite for the two high-risk bets.

**Wave 2 (6-12 months):** health fraud scoring, once the governance gate is passed, then a pilot of auto-settlement for claims under ₹50k with human approval.

**Parked:** FNOL voice bot (revive if vernacular speech-to-text accuracy exceeds 90% in testing). Churn prediction (revive when the Retention head commits as owner).

**Sensitivity:** raising Value to 45% (cutting Adoption to 10%) moves fraud scoring into rank 1. It stays in wave 2 anyway because of the gate. Wave 1 is robust.

**Review:** quarterly at the AI SteerCo, plus after each pilot decision.
