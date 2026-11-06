---
name: playbook-ai-roadmap
description: "Builds an AI roadmap for a business or function in guided stages: anchors on business goals and the value pools, scans and generates AI use cases across processes, prioritises on value, feasibility, risk and data readiness, writes business cases for the top use cases, checks data, platform and talent readiness, designs pilots with success metrics and scale gates, designs agentic workflows where justified, sets governance, responsible-AI controls and a risk register aligned to applicable laws and standards, and plans adoption, change, operating model and a 12-24 month sequenced roadmap with KPIs. Use when leadership asks for an AI strategy or roadmap, to reset scattered pilots, or to prepare an AI plan for the board."
---

# Playbook: AI Roadmap

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** an AI plan tied to business value, not technology enthusiasm: a short list of use cases worth doing, proof they can work, the guardrails to do them safely, and a sequence the organisation can actually absorb.

## The senior standard
1. **Business value first.** Start from goals and value pools (revenue, cost, risk, experience), not from models or vendors.
2. **Portfolio, not a wish list.** Quick wins, scalable bets and a few strategic plays, prioritised on value × feasibility × risk.
3. **Data and process readiness decide feasibility.** Most failures are data, integration and adoption, not models.
4. **Pilots are designed to decide:** a baseline, success metrics, a control group where possible, and scale or stop criteria.
5. **Governance proportionate to risk.** Policy, inventory, risk tiering, human oversight, testing, monitoring, aligned to the applicable laws and standards.
6. **Adoption is the value.** Workflow redesign, training, incentives and change management are budgeted.
7. **Measured benefits.** KPIs and benefit tracking from the start; stop what doesn't deliver.

## Before you start: diagnose
- Scope: enterprise or function; business goals; the current AI activity (pilots, tools, shadow use).
- Data and technology landscape; talent; budget.
- Risk appetite and regulatory context (sector rules, data protection, cross-border).
- Sponsor and governance forum; timeline.

## Method (stages and skills)
| Stage | Purpose | Skills | Output |
|---|---|---|---|
| 1. Anchor | Goals, value pools, scope | `problem-statement`, `kpi-driver-tree`, `stakeholder-map` | Value pools and target outcomes |
| 2. Scan | Generate use cases | `ai-opportunity-scan`, `value-chain`, `jobs-to-be-done` | Long list (30-60) |
| 3. Prioritise | Shortlist | `ai-use-case-prioritizer`, `data-readiness-check` | 8-12 prioritised; 3-5 for pilots |
| 4. Cases | Value and cost | `ai-business-case`, `sensitivity-analysis` | Business cases for the top use cases |
| 5. Pilot | Prove it | `ai-pilot-design`, `agentic-workflow-design` (where justified) | Pilot designs with metrics and gates |
| 6. Govern | Safe and compliant | `ai-governance-review`, `responsible-ai-review`, `ai-risk-register`, `risk-appetite` | Policy, controls, risk register |
| 7. Organise and adopt | Operating model, people | `operating-model`, `change-plan`, `raci-builder` | AI operating model; change plan |
| 8. Roadmap | Sequence | `implementation-roadmap`, `kpi-dashboard`, `benefits-tracker` | 12-24 month roadmap, KPIs |
| 9. Communicate | Leadership and board | `scqa-storyline`, `executive-summary`, `playbook-board-pack` | Board paper or deck |

## Judgement calls
- **Buy vs build:** buy for commodity capabilities; build or customise where data or process is a differentiator (`build-buy-partner`).
- **Agentic workflows:** start with bounded, reversible tasks with human approval; expand autonomy with evidence.
- **Shadow AI:** provide approved tools and guidance rather than only bans.
- **High-risk uses** (credit, hiring, health, legal effects on people) need stronger testing, explainability, human review and legal sign-off.
- **Measure end-to-end** (cycle time, quality, cost per case), not just model accuracy.

## Red flags
- A roadmap of technologies, not outcomes.
- 40 pilots and no scale-ups.
- No data-readiness assessment.
- Governance as a policy document only (no inventory, testing or monitoring).
- No change budget; benefits not tracked.

## Variants by context
- **Financial services:** model-risk management, fairness in credit, regulator expectations (e.g. RBI's framework for responsible AI in the financial sector), outsourcing rules.
- **Healthcare:** clinical safety, consent, medical-device regulation where applicable.
- **Public sector:** transparency, citizen rights, procurement rules.
- **Manufacturing:** predictive maintenance, quality vision, safety; OT integration.
- **Function-level (HR, finance, legal, customer service):** a process-by-process scan; workforce impact plans.

## Output format

```markdown
## AI Roadmap: [organisation / function], [horizon]
**Business goals and value pools:** ...
**Portfolio (prioritised):**
| Use case | Value (₹/yr) | Feasibility | Risk tier | Data readiness | Wave |
|---|---|---|---|---|---|

**Pilots (wave 1):** metrics, baseline, gates
**Governance:** policy, inventory, risk tiering, oversight, testing, monitoring
**Operating model and talent:** ...
**Change and adoption:** ...

| Quarter | Initiatives | Milestones | KPIs |
|---|---|---|---|

**Investment and benefits:** ...
**Board asks:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Anchored in business goals and value pools.
- [ ] Prioritised on value, feasibility, risk and data readiness.
- [ ] Business cases and pilots with metrics and scale or stop gates.
- [ ] Governance and responsible-AI controls proportionate to risk and law.
- [ ] Adoption and change budgeted; a sequenced roadmap with KPIs and benefits tracking.

## House rules
- Never invent facts, figures, quotes or sources. Label estimates "(est.)" and list assumptions openly.
- If key inputs are missing, ask up to 3 short questions, or proceed with clearly stated assumptions if the user wants speed.
- Answer first, then support. Plain English; define any jargon.
- Use the user's currency, units, terminology and context (e.g. ₹ and lakh/crore for Indian users).
- Do calculations with code or a spreadsheet when available, not mental arithmetic.
- For legal, regulatory, tax or accounting specifics, flag them for verification against current official sources and qualified advisers.
- Remind users not to paste confidential or personal data they are not permitted to share; suggest anonymising.

## Limitations and disclaimer
- **Decision support, not professional advice.** This skill provides a structured method and general information. It is not legal, financial, investment, tax, accounting, regulatory, medical or other professional advice. It does not replace qualified advisers or your organisation's own review and approval processes.
- **AI can be wrong.** Claude can produce confident but incorrect facts, numbers, citations or legal references. Check anything you will rely on, sign or publish.
- **Point-in-time content.** Frameworks, laws, thresholds and dates referenced reflect the author's research as of November 2026 and may since have changed. Confirm against current official sources.
- **Only as good as the inputs.** Claude knows only what you share in the conversation; missing or inaccurate context leads to weaker output.
- **Your data, your responsibility.** Do not share confidential, personal or price-sensitive information unless your organisation's policies and applicable law allow it.
- **No warranty, no adviser relationship.** Provided "as is" under CC BY 4.0, without warranty of any kind. Using it creates no adviser-client relationship with the author, who accepts no liability for decisions made using it.
- **Skill-specific:** Playbooks chain several skills. Review each stage's output before relying on the next, since errors compound.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `ai-opportunity-scan`: Find where AI can create real value in a function or business, grounded in processes and pain points.
- `ai-use-case-prioritizer`: Score and rank AI use cases on value, feasibility and risk, and pick the first wave.
- `ai-governance-review`: Assess how well an organisation governs AI: policy, roles, inventory, risk, controls, and board oversight.
- `change-plan`: Plan the people side of change: impact by group, messages, training, resistance and adoption measures.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
