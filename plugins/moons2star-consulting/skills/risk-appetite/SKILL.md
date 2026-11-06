---
name: risk-appetite
description: "Designs a board risk appetite framework the way risk committees and regulators expect: risk capacity, appetite, tolerance and limits distinguished; an overall statement tied to strategy; category statements (strategic, credit, market, liquidity, operational, cyber, AI and model, conduct, compliance, ESG and climate, reputational); measurable metrics with green / amber / red thresholds; cascade to business limits; escalation and breach governance; and a test that it actually constrains decisions. Aligned to FSB Principles (2013), COSO ERM (2017), ISO 31000 and SEBI LODR Reg 21. Use for ERM set-up, annual board review, or regulator or rating-agency readiness."
---

# Risk Appetite Statement and Framework

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a risk appetite framework that actually changes decisions. Metrics are measurable and reported, thresholds trigger action, and it cascades into limits that management works within. Not a page of adjectives.

## Get the vocabulary right (most frameworks fail here)
- **Risk capacity:** the maximum risk the organisation can bear before breaching regulatory capital or liquidity minimums, covenants, solvency, or its licence to operate. A hard ceiling.
- **Risk appetite:** the aggregate level and types of risk the board is *willing* to take to achieve strategy. Set inside capacity, with a buffer.
- **Risk tolerance:** the acceptable variation around appetite for a specific metric; the amber zone that triggers attention.
- **Risk limits:** quantitative allocations of appetite to businesses, products, counterparties and portfolios, used day to day.
- **Risk profile:** the actual current risk position, measured against all of the above.

(Definitions consistent with the FSB *Principles for an Effective Risk Appetite Framework*, 2013, and COSO ERM 2017.)

## Design principles
1. **Strategy first.** Appetite is the risk side of the strategy. Start from what the strategy needs you to take (growth in unsecured lending, entering a new market, deploying AI) and set appetite for that, not from a generic list.
2. **Seek, accept, minimise, avoid.** State openly which risks the organisation *seeks* for reward (e.g. credit risk in chosen segments), which it accepts, which it minimises (operational), and which it has **zero appetite** for (e.g. bribery, wilful regulatory breach, harm to patient safety).
3. **Measurable or it doesn't exist.** Every category has 1-3 metrics that are already, or will be, reported, with green / amber / red thresholds.
4. **Forward-looking.** Include stress or scenario metrics (e.g. capital ratio under a severe-but-plausible stress), not only current-state ratios.
5. **Cascade.** Board appetite → executive limits → business-unit limits. Limits must sum within appetite.
6. **Breach governance.** Pre-agree who is told, how fast, what remediation is required, and when the board must decide.
7. **Use test.** Evidence that appetite is used in strategy, the plan, pricing, product approval, capital allocation and incentives. If nobody can cite a decision it changed, it's decoration.

## Method
1. **Context:** strategy, business model, regulatory minimums (capital, liquidity, licence conditions), covenants, rating targets, stakeholder expectations.
2. **Capacity:** quantify the binding constraints (e.g. CRAR minimum and internal buffer; liquidity coverage; net debt/EBITDA covenant; solvency ratio for insurers).
3. **Overall statement (half a page):** purpose, what risks the organisation seeks and avoids, and a few headline metrics (earnings volatility, capital, liquidity, reputation).
4. **Category statements:** for each material category, a qualitative appetite level (Averse / Minimal / Cautious / Open / Seeking), a one-paragraph position, and metrics:
   - **Strategic:** concentration in one product or market; % of earnings from new businesses.
   - **Credit:** NPA / delinquency by segment; single-name and sector concentration; expected loss.
   - **Market and liquidity:** liquidity coverage; funding concentration; asset-liability gaps; FX open position.
   - **Operational and resilience:** losses as % of revenue; critical-service downtime beyond impact tolerance.
   - **Cyber:** critical vulnerabilities overdue; recovery-test success; major incidents.
   - **AI and model:** high-tier systems without validation; fairness-KRI breaches; incidents (see `ai-risk-register`).
   - **Conduct and customer:** complaints per 10,000 customers; mis-selling findings; vulnerable-customer outcomes.
   - **Compliance:** regulatory breaches (zero appetite for wilful breaches); overdue regulatory actions.
   - **ESG and climate:** emissions intensity vs pathway; exposure to high-transition-risk sectors; safety (LTIFR, zero fatalities ambition).
   - **People:** regretted attrition in critical roles; key-person dependency.
   - **Reputational:** usually captured through drivers (conduct, ESG, cyber) plus a qualitative statement.
5. **Thresholds:** for each metric, set **appetite (green), tolerance or early warning (amber), and limit (red)** and confirm red sits inside capacity. Calibrate with history, peers, stress results and the plan. Thresholds the plan itself would breach are a strategy conversation, not a footnote.
6. **Cascade:** allocate to business units or portfolios; show that the sum stays within appetite.
7. **Escalation:**
   - **Amber:** risk owner action plan within X days; report to the risk committee.
   - **Red:** immediate notice to the CRO and risk committee chair; board informed by the next meeting or earlier; remediation or a formal decision to accept with a timebound exception.
8. **Integration:** where appetite is used in the business (product approval, pricing, capital allocation, credit policy, AI deployment approvals, incentives).
9. **Review:** annually with the plan, and on material change. The risk management committee recommends; the board approves.

## Judgement calls
- **Fewer metrics, better data.** 20-35 board-level metrics in total is common for complex groups; 10-20 for simpler firms. Hundreds means nobody reads them.
- **Avoid thresholds set where you already are.** If every metric is green from day one, the thresholds were set to the risk profile, not to appetite.
- **Zero appetite needs care.** "Zero appetite for operational losses" is impossible and gets ignored. Use zero only for conduct you can actually choose to avoid: fraud, bribery, wilful breach, knowingly unsafe products.
- **Qualitative still matters** for reputation and culture, but anchor it to observable indicators.
- **Appetite must survive a bad quarter.** If a breach is always met with "temporary, accept", the framework has no teeth. Track repeat exceptions.
- **Link to incentives.** Remuneration and performance assessments should reflect risk outcomes (malus and clawback where applicable).

## Sector variants
- **Banks and NBFCs:** capital (CRAR/CET1) and liquidity (LCR/NSFR where applicable) dominate capacity. Credit concentration, interest-rate risk in the banking book, outsourcing and digital lending conduct. Align with RBI expectations for the entity's category and ICAAP. Verify current directions.
- **Insurers:** solvency ratio vs the regulatory minimum; underwriting and reserving risk; catastrophe accumulation; claims conduct. Align with IRDAI corporate governance and risk-management requirements.
- **Listed non-financial companies:** leverage and covenants; liquidity runway; customer and supplier concentration; commodity and FX; project risk; safety; cyber; ESG. SEBI LODR Reg 21 requires a risk management committee for the top 1,000 listed entities and a board-approved risk management policy. Verify current applicability and meeting requirements.
- **Healthcare:** patient safety (zero appetite for avoidable harm), clinical governance, data protection.
- **Tech and AI-heavy firms:** model risk, AI conduct, data protection, availability, third-party concentration (cloud and model providers).

## Output format

```markdown
## Risk Appetite Framework: [organisation], FY[..]
### 1. Overall risk appetite statement
...
### 2. Capacity (binding constraints)
| Constraint | Regulatory / contractual minimum | Internal buffer | Capacity used today |
|---|---|---|---|
### 3. Category appetite
| Category | Level | Position (1-2 sentences) | Metric | Green (appetite) | Amber (tolerance) | Red (limit) | Current | Owner |
|---|---|---|---|---|---|---|---|---|
### 4. Cascade to business limits (summary)
### 5. Escalation and breach governance
| Status | Who is told | By when | Required action |
|---|---|---|---|
### 6. Use test: where appetite is embedded
### 7. Review and approval
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and texts this skill draws on, with dates and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, the deep dive for detailed criteria, and the sources before citing any law, standard or date.

## Quality check before you reply
- [ ] Capacity, appetite, tolerance and limits are distinguished; red thresholds sit inside capacity with a buffer.
- [ ] The overall statement links to strategy and states which risks are sought vs avoided.
- [ ] Every category has measurable metrics with three thresholds and an owner.
- [ ] At least one forward-looking (stress or scenario) metric.
- [ ] Escalation rules are explicit; exceptions are time-bound.
- [ ] Zero-appetite statements are used only where avoidance is genuinely possible.
- [ ] The plan is checked against thresholds; conflicts are surfaced.
- [ ] Regulatory specifics are flagged for verification.

## House rules
- Never invent facts, figures, quotes or sources. Label estimates "(est.)" and list assumptions openly.
- If key inputs are missing, ask up to 3 short questions, or proceed with clearly stated assumptions if the user wants speed.
- Plain English; define technical terms on first use.
- Use the user's currency and regulatory context.
- Regulatory minimums and applicability change; recommend verification with the CRO, Company Secretary or counsel.
- Remind users not to paste confidential data they are not permitted to share.

## Limitations and disclaimer
- **Decision support, not professional advice.** This skill provides a structured method and general information. It is not legal, financial, investment, tax, accounting, regulatory, medical or other professional advice. It does not replace qualified advisers or your organisation's own review and approval processes.
- **AI can be wrong.** Claude can produce confident but incorrect facts, numbers, citations or legal references. Check anything you will rely on, sign or publish.
- **Point-in-time content.** Frameworks, laws, thresholds and dates referenced reflect the author's research as of November 2026 and may since have changed. Confirm against current official sources.
- **Only as good as the inputs.** Claude knows only what you share in the conversation; missing or inaccurate context leads to weaker output.
- **Your data, your responsibility.** Do not share confidential, personal or price-sensitive information unless your organisation's policies and applicable law allow it.
- **No warranty, no adviser relationship.** Provided "as is" under CC BY 4.0, without warranty of any kind. Using it creates no adviser-client relationship with the author, who accepts no liability for decisions made using it.
- **Skill-specific:** Not legal, company-secretarial or audit advice. Regulatory references (Companies Act, SEBI LODR, SS-1, sector regulators) must be confirmed with your Company Secretary, counsel or assurance provider before use.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `risk-assessment`: project-level risks.
- `ai-risk-register`: AI metrics.
- `scenario-planning`: stress scenarios.
- `board-paper`: approval paper for the framework.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
