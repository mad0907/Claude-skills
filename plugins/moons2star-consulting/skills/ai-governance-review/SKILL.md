---
name: ai-governance-review
description: "Assesses an organisation's AI governance against recognised frameworks (NIST AI RMF and GenAI Profile, ISO/IEC 42001 and 23894, OECD AI Principles) and applicable regimes (EU AI Act as amended by the 2026 Digital Omnibus, India's DPDP Act and Rules, MeitY AI Governance Guidelines, RBI FREE-AI and sector rules). Scores 12 domains with evidence, separates design from operating effectiveness, covers GenAI and agentic AI, and produces a risk-prioritised 90-day / 6-month / 12-month roadmap and board reporting pack. Use for board or audit oversight of AI, setting up AI governance, or regulatory and client due-diligence readiness."
---

# AI Governance Review

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** an evidence-based view of whether AI in the organisation is under control. It shows what exists on paper vs what actually works, where the biggest exposures are, and a sequenced plan a board can hold management to.

## Principles that set the senior standard
1. **Governance follows use, not policy.** Start from the real AI footprint, including AI embedded in vendor software and staff use of public GenAI tools. A policy without an inventory is decoration.
2. **Proportionality.** Controls scale with impact on people and the business. Over-governing low-risk use cases kills adoption and pushes use into the shadows.
3. **Design vs operating effectiveness.** "We have a model-validation standard" (design) is not "every high-risk model was validated before go-live and re-validated on drift" (operating). Score both.
4. **Three lines, real independence.** Builders don't approve their own high-risk systems. Second-line risk, compliance and legal own the framework; internal audit tests it.
5. **Lifecycle, not gate.** Risk appears after launch: drift, misuse, new data, vendor model updates, and agent tool changes.
6. **Accountability is personal.** Every AI system has a named business owner who can explain it and stop it.
7. **Regulation is a floor, and a moving one.** Map obligations per jurisdiction and sector, with dates, and keep a horizon scan.

## Scoping questions (ask or state assumptions)
- Sector and jurisdictions: where the organisation operates, and where its customers and the affected people are.
- The AI footprint: in-house models, vendor AI, GenAI copilots, customer-facing chatbots, agents with tool access, and AI in HR, credit, claims, pricing, health or security.
- Existing structures: policy, committee, risk framework, model-risk function, privacy office, CISO.
- Trigger: board request, audit finding, regulator, incident, client due diligence, certification ambition (ISO/IEC 42001).
- Evidence available: documents, interviews, system samples.

## The 12 domains to assess
Score each 1-5 on **Design** and **Operating effectiveness** separately. `references/deep-dive.md` has the criteria per level and the evidence to request.

1. **Strategy and risk appetite for AI:** the board-approved stance on where AI may and may not be used; appetite statements and tolerances.
2. **Policy and principles:** an AI policy or standard aligned to principles (e.g. fairness, transparency, safety, accountability, privacy); acceptable use of GenAI.
3. **Accountability and structure:** board oversight (which committee); executive owner; AI risk or ethics committee; RACI across the three lines; competence of the people in it.
4. **AI inventory:** completeness, including vendor-embedded and shadow AI; fields captured (purpose, owner, data, model, decision impact, tier, status).
5. **Risk classification and impact assessment:** a tiering method (prohibited, high, limited, minimal, or an internal equivalent); impact assessments for high tiers, covering affected persons, rights, safety and financial harm.
6. **Data governance for AI:** lawful basis and consent under DPDP and GDPR where applicable; purpose limitation; data quality and representativeness; IP and licensing of training data; retention.
7. **Development and validation controls:** requirements, test and evaluation sets, bias and fairness testing across groups, robustness, explainability proportionate to use, documentation (model cards), independent validation for high tier.
8. **GenAI and agentic controls:** grounding and hallucination management; content safety; prompt-injection and data-leakage defences; tool permissions and autonomy limits for agents; human-approval points; red-teaming; logging and traceability of agent actions.
9. **Third-party and vendor AI:** due diligence; contract terms on data use for training, model changes, audit rights, incident notice, exit; concentration on a single foundation-model provider.
10. **Deployment, monitoring and change:** go-live approval; performance and drift monitoring; override and complaint tracking; re-approval on material change, including vendor model upgrades; kill switch.
11. **Incidents, transparency and redress:** AI incident definition and reporting; root-cause analysis; disclosure to affected people (that AI is used; explanation of adverse decisions); grievance and appeal routes; regulator notification where required.
12. **People, literacy and culture:** role-based AI literacy (the EU AI Act Art. 4 literacy duty has applied since Feb 2025 for in-scope organisations); a speak-up culture; incentives that don't reward reckless deployment.

Plus a cross-cutting check: **assurance**. Has internal audit or an external party reviewed AI governance? Is the organisation pursuing or ready for ISO/IEC 42001 certification?

## Method
1. **Build or obtain the inventory first.** If none exists, run a rapid discovery: procurement and vendor list scan, IT asset and SaaS logs, business-unit survey, and proxy/network data for public GenAI use. The first finding is often the size of the unknown.
2. **Tier the inventory** with a simple, defensible method (see `ai-risk-register`). Sample all high-tier systems and some limited-tier ones for deep testing.
3. **Collect evidence per domain:** documents (design) plus samples and records (operating), e.g. 5 go-live approvals, 3 validation reports, 1 incident file, a vendor contract, monitoring dashboards.
4. **Interview** the board or committee chair, executive owner, CRO, DPO, CISO, a model owner, a frontline user and internal audit. Look for gaps between what each believes happens.
5. **Map obligations** per jurisdiction and sector with dates (`references/sources.md`). Mark each obligation met, partial or gap, and flag anything needing legal interpretation.
6. **Score** each domain on Design and Operating (1-5) with one-line evidence. Avoid averaging away a critical gap: any domain at 1 on a high-tier system is a priority finding regardless of the overall score.
7. **Prioritise findings** by exposure (impact on people, money and regulation × likelihood × number of systems affected).
8. **Roadmap:**
   - **90 days:** stop the bleeding. Inventory, an interim GenAI acceptable-use policy, a high-tier freeze-or-approve rule, a named accountable owner, and a kill switch on customer-facing agents.
   - **6 months:** build the framework. Policy, tiering, impact assessment, validation standard, vendor clauses, monitoring.
   - **12 months:** embed and assure. Training, metrics, internal audit review, ISO/IEC 42001 readiness if wanted.
9. **Board reporting design:** what the board sees quarterly (see output template).

## Judgement calls
- **Don't recommend a heavyweight framework for a 10-use-case organisation.** Right-size: a single AI risk committee and a two-page standard may beat ISO-style documentation.
- **Shadow GenAI is a governance finding, not a disciplinary one.** Provide a sanctioned, safe tool before banning public ones; bans alone fail.
- **Vendor AI is your AI.** Accountability for outcomes to customers and regulators does not transfer to the vendor.
- **"Human in the loop" must be real.** If reviewers approve 99.8% of AI recommendations in seconds, it's a rubber stamp. Measure override rates and review time.
- **Explainability is proportional.** Credit decline needs reasons a customer can understand; a demand forecast needs performance evidence, not a narrative.
- **Agents change the risk class.** An LLM that drafts is different from one that executes payments or emails customers. Tier by *what it can do*, not *what it is*.

## Red flags
- No inventory, or one that excludes vendor and GenAI use.
- The AI committee is all builders; no risk, legal or business-owner voice.
- Validation only at launch; no drift or performance monitoring.
- Vendor contracts silent on training on your data, model changes and incident notice.
- Customer-facing GenAI with no grounding, no logging, or no tested kill switch.
- Board receives AI only as a "innovation update", never as a risk report.
- Overall maturity "3/5" hiding a "1" on high-tier operating effectiveness.

## Output format

```markdown
## AI Governance Review: [organisation], [date]
**Overall:** [one-paragraph verdict, including the biggest exposure]
**Scope and evidence:** systems sampled, documents reviewed, interviews held

| # | Domain | Design (1-5) | Operating (1-5) | Key evidence | Gap / finding | Priority |
|---|---|---|---|---|---|---|

### Regulatory and standards mapping (verify current position with counsel)
| Obligation / framework | Applies? | Date | Status | Gap |
|---|---|---|---|---|

### Priority findings (top 5)
1. Finding - why it matters - recommendation - owner - date

### Roadmap
| Horizon | Actions | Owner | Outcome / evidence of done |
|---|---|---|---|
| 90 days | | | |
| 6 months | | | |
| 12 months | | | |

### Quarterly board AI report (proposed)
- Inventory count by tier, new and retired; high-tier systems list
- Value delivered vs plan (top use cases)
- Incidents, complaints, overrides, drift alerts; actions
- Regulatory horizon and readiness
- Assurance status (internal audit / external / certification)
```

## Reference files (read when needed)
- `references/deep-dive.md`: detailed criteria, checklists, scales and patterns
- `references/sources.md`: standards, laws and texts this skill draws on, with dates and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, the deep dive for detailed criteria, and the sources before citing any law, standard or date.

## Quality check before you reply
- [ ] The inventory and its completeness are addressed first.
- [ ] Design and operating effectiveness scored separately, with evidence.
- [ ] GenAI and agentic risks covered explicitly, not folded into "models".
- [ ] Vendor AI covered.
- [ ] Obligations mapped with dates and flagged "verify with counsel"; no legal conclusions stated as certain.
- [ ] Findings prioritised by exposure; the roadmap is sequenced and owned.
- [ ] Board reporting defined.
- [ ] Recommendations are proportionate to the organisation's size and AI footprint.

## House rules
- Never invent facts, figures, quotes or sources. Label estimates "(est.)" and list assumptions openly.
- If key inputs are missing, ask up to 3 short questions, or proceed with clearly stated assumptions if the user wants speed.
- Answer first, then support. Plain English; define any jargon.
- Regulatory dates and applicability change. Use `references/sources.md` as a starting point, verify against official texts, and recommend legal review.
- Remind users not to paste confidential system details or personal data they are not permitted to share.

## Limitations and disclaimer
- **Decision support, not professional advice.** This skill provides a structured method and general information. It is not legal, financial, investment, tax, accounting, regulatory, medical or other professional advice. It does not replace qualified advisers or your organisation's own review and approval processes.
- **AI can be wrong.** Claude can produce confident but incorrect facts, numbers, citations or legal references. Check anything you will rely on, sign or publish.
- **Point-in-time content.** Frameworks, laws, thresholds and dates referenced reflect the author's research as of November 2026 and may since have changed. Confirm against current official sources.
- **Only as good as the inputs.** Claude knows only what you share in the conversation; missing or inaccurate context leads to weaker output.
- **Your data, your responsibility.** Do not share confidential, personal or price-sensitive information unless your organisation's policies and applicable law allow it.
- **No warranty, no adviser relationship.** Provided "as is" under CC BY 4.0, without warranty of any kind. Using it creates no adviser-client relationship with the author, who accepts no liability for decisions made using it.
- **Skill-specific:** Not legal advice on AI or data-protection law. This skill does not replace independent model validation, security testing (including red-teaming), or a formal data protection impact assessment.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `ai-risk-register`: build the inventory and tiering.
- `responsible-ai-review`: deep review of one system.
- `agentic-workflow-design`: controls for agents.
- `board-question-bank`: the board's AI questions.
- `risk-appetite`: set the AI appetite statement.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
