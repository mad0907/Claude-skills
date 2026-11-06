---
name: pestel-scan
description: "Scans the macro environment (political, economic, social, technological, environmental, legal) for a specific business, market and horizon: factors specific to the business rather than generic, evidence and dates, impact and certainty ratings, time-sensitivity flags for laws, rates and incentives that change, separation of trends from critical uncertainties, opportunities as well as threats, top factors with implications and observable signposts, and handoff to scenarios and the risk register. Use for strategy refreshes, market entry, investment cases, scenario work and board horizon scanning."
---

# PESTEL Scan

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a focused view of the external shifts that will actually move this business. Each factor comes with evidence, a sense of how big and how certain it is, what to do about it, and what to watch.

## The senior standard
1. **Specific, not generic.** "Interest rates" belongs only if they materially affect this business (e.g. financing for customers, the cost of debt). Each factor names the mechanism of impact.
2. **Evidence with dates.** Laws, rates, incentives and policies change. Every factor cites its source and date, and time-sensitive ones are flagged for live checks.
3. **Impact × certainty.** High-impact, high-certainty factors go into the base plan; high-impact, low-certainty factors become scenario axes or risks.
4. **Both directions.** Each factor can create opportunity or threat; often both for different segments.
5. **From scan to action.** The top 5-8 factors get implications, owners and signposts.
6. **Horizon-appropriate.** Short horizons emphasise policy and economic cycles; long horizons emphasise demographics, technology and climate.

## Before you start: diagnose
- The business, market, geography and horizon.
- The decision the scan informs (entry, investment, strategy).
- Existing risk registers and scenario work.

## Method
1. **Brainstorm 4-8 factors per category**, specific to the business:
   - **Political:** government priorities, trade policy, industrial incentives, stability, public procurement.
   - **Economic:** growth, inflation, rates, FX, commodity prices, consumer demand, credit availability.
   - **Social:** demographics, urbanisation, income distribution, preferences, workforce skills, trust.
   - **Technological:** AI and automation, digital public infrastructure, platform shifts, cost curves, cybersecurity.
   - **Environmental:** climate physical risks, transition policy, resource scarcity, circularity, disclosure requirements.
   - **Legal:** sector regulation, data protection, consumer protection, labour codes, competition, tax.
2. **For each factor:** description of the trend; evidence and date; mechanism of impact on the business; impact (H/M/L); certainty (H/M/L); opportunity or threat; time-sensitivity flag.
3. **Prioritise:** plot impact vs certainty; select the top 5-8.
4. **Implications for each top factor:** what it means for strategy, operations and finances; actions (exploit, prepare, hedge, monitor); owner.
5. **Signposts:** observable indicators with thresholds that tell you the factor is materialising.
6. **Handoffs:** high-impact, low-certainty factors → `scenario-planning`; threats → `risk-assessment`; ESG items → `esg-materiality`.

## Judgement calls
- **Avoid laundry lists.** 30 factors with no prioritisation are less useful than 8 well-evidenced ones.
- **Distinguish announced from enacted.** Draft rules and proposals carry different certainty from notified law.
- **Local beats national.** State-level policies, incentives and labour rules often matter more for site decisions.
- **Second-order effects:** e.g. AI adoption → skill shifts → wage changes → location economics.

## Red flags
- Generic factors with no mechanism of impact.
- Undated regulatory claims stated as current.
- No prioritisation; no implications or signposts.
- Opportunities ignored.

## Variants by context
- **Market entry:** emphasise political stability, regulation and licensing, incentives, tax, FX, labour and land.
- **Manufacturing location:** incentives, infrastructure, power costs and reliability, labour availability, environmental clearances.
- **Financial services:** monetary policy, credit cycle, digital public infrastructure, regulatory change, data protection.
- **Healthcare:** public-funding schemes, pricing regulation, demographics and disease burden, technology adoption.
- **Technology:** AI regulation, data localisation, talent supply, export controls.

## Output format

```markdown
## PESTEL Scan: [business / market], [geography], horizon [..]

| Category | Factor | Trend and evidence (source, date) | Mechanism of impact | Impact | Certainty | Opp / Threat | Verify (time-sensitive) |
|---|---|---|---|---|---|---|---|

**Priority grid:** high impact / high certainty: ... | high impact / low certainty: ...
**Top factors → implications → actions → owner → signpost (threshold)**
1. ...
**Handoffs:** scenarios ... | risk register ... | ESG ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Factors are specific, with a mechanism of impact.
- [ ] Evidence is dated; time-sensitive items flagged for verification.
- [ ] Impact and certainty rated; the top 5-8 prioritised.
- [ ] Implications, actions, owners and signposts for the top factors.
- [ ] Opportunities included; handoffs to scenarios and risks.

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
- **Skill-specific:** Claude may not have current market data unless you provide it or it can search the web. Treat any market figures it suggests as estimates to verify.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `scenario-planning`: Build 3-4 plausible futures from key uncertainties, and find moves that work across them.
- `five-forces`: Judge how attractive an industry is and what drives profits, using the five forces framework with evidence.
- `risk-assessment`: Identify, score and plan responses to the risks of a project, decision or business.
- `esg-materiality`: Identify and prioritise the sustainability topics that matter most, using double materiality.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
