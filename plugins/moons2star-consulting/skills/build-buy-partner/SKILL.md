---
name: build-buy-partner
description: "Decides how to acquire a needed capability (build in-house, buy via acquisition or licence, partner via alliance, joint venture or outsourcing) by assessing strategic importance and differentiation, urgency, internal capability gap, availability and fit of targets or partners, total cost over time, control and IP, integration and cultural risk, data ownership, flexibility and exit; with route-specific guardrails, hybrid sequencing and decision criteria. Use for technology and AI platform choices, capability gaps in strategy, M&A versus organic debates, outsourcing and GCC decisions, or market access."
---

# Build, Buy or Partner

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a reasoned choice of route for a specific capability, with the guardrails that make that route work (contract terms, integration plan, exit options), and a sensible sequence if a hybrid is best.

## The senior standard
1. **Differentiation decides control.** Capabilities that create competitive advantage warrant control (build or buy). Necessary but generic capabilities can be sourced (partner, outsource, license).
2. **Speed vs control vs cost.** Building is slow but controlled; buying is fast but expensive and risky to integrate; partnering is fast and flexible but shares value and control. Make the trade-off explicit.
3. **Be honest about the capability gap.** Can the organisation really build this (talent, leadership, time), or is "build" a default born of pride?
4. **Total cost over the life of the capability,** including integration, switching and exit, not just the year-one price.
5. **Data and IP terms are strategic.** In AI and technology especially, who owns data, models, fine-tuning and outputs determines future advantage.
6. **Design the exit before you enter.** Partnerships and outsourcing need termination rights, transition support and data return.

## Before you start: diagnose
- The capability, why it is needed, and by when (the strategic driver).
- How differentiating it is (customer value, uniqueness) and how fast it changes.
- Internal starting point: talent, assets, track record.
- Market landscape: potential targets, licensors, partners, vendors; their maturity.
- Constraints: capital, regulation (data localisation, outsourcing rules), risk appetite.

## Method
1. **Strategic importance × internal capability** (2×2):
   - **High importance, strong base** → build (or accelerate with a small acqui-hire).
   - **High importance, weak base** → buy, or partner-then-build.
   - **Low importance, strong base** → maintain efficiently or outsource.
   - **Low importance, weak base** → partner, outsource or license.
2. **Urgency:** a time-to-market window may override the default (e.g. partner now, build later).
3. **Options per route:**
   - **Build:** team, investment, timeline, risks.
   - **Buy:** targets (fit, valuation range, integration complexity, cultural fit, key-person risk), or licensing.
   - **Partner:** alliance, JV or outsourcing; partner candidates; what each side contributes and receives; governance.
4. **Compare routes** on time to value, total cost (3-5+ years), control and IP, data ownership, talent, integration risk, flexibility and exit, regulatory implications, and strategic optionality. Quantify where possible.
5. **Recommend a route or hybrid sequence** (e.g. partner for 18 months → build the differentiating layer → renegotiate or exit the partnership).
6. **Guardrails by route:**
   - **Build:** milestones, talent plan, kill criteria, budget gates.
   - **Buy:** walk-away price, diligence focus (technology, people, IP, data, liabilities), retention packages, an integration management office, synergy tracking.
   - **Partner / outsource:** scope, SLAs, governance board, IP and data clauses, model and data usage limits (for AI), audit rights, step-in rights, termination and transition, exclusivity limits, pricing mechanics.
7. **Decision criteria for revisiting** (e.g. when the partner's roadmap diverges or the internal team reaches maturity).

## Judgement calls
- **Acqui-hire vs acquisition:** buying a small team can accelerate a build. Retention is the whole value, so design for it.
- **JVs are hard.** They need aligned incentives, clear governance and exit mechanics. Use them when complementary assets are essential and neither side can go alone.
- **For AI platforms,** keep the differentiating layers (proprietary data pipelines, domain workflows, evaluation sets, guardrails) in-house. Rent commodity capabilities (foundation models, infrastructure), with portability in mind.
- **Outsourcing doesn't outsource accountability.** Regulators and customers still hold you responsible.
- **GCC (captive) vs outsourcing:** a captive gives control, IP and talent depth; outsourcing gives speed and flexibility. Hybrid models (build-operate-transfer) can bridge them.

## Red flags
- "Build" chosen with no realistic talent plan.
- Acquisition justified by "capability" with no integration or retention plan.
- Partnership contracts silent on data, IP, exit or model training.
- Comparing year-1 cost only.
- No plan to revisit the choice.

## Variants by context
- **AI and technology:** foundation models (partner or rent), proprietary data and workflows (build), specialised point solutions (buy or license); portability and lock-in.
- **Market access:** distributor or partner vs subsidiary vs acquisition of a local player; regulatory licences.
- **Manufacturing capability:** contract manufacturing vs own plant vs acquisition; IP protection; quality control.
- **Shared services / GCC:** captive vs outsource vs build-operate-transfer; location; talent market.

## Output format

```markdown
## Build / Buy / Partner: [capability]
**Strategic importance:** differentiating / necessary-generic - why
**Internal starting point:** strong / partial / weak - evidence
**Urgency:** ...

| Criterion | Build | Buy (target / licence) | Partner (alliance / JV / outsource) |
|---|---|---|---|
| Time to value | | | |
| 5-year total cost | | | |
| Control and IP | | | |
| Data ownership | | | |
| Talent | | | |
| Integration / execution risk | | | |
| Flexibility and exit | | | |
| Regulatory | | | |

**Recommendation:** route or hybrid sequence - rationale - trade-off accepted
**Guardrails:** ...
**Revisit triggers:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Strategic importance and internal capability are assessed with evidence.
- [ ] All three routes are considered, with concrete options.
- [ ] Total cost over time and exit costs are included.
- [ ] Data, IP and model-usage terms addressed where relevant.
- [ ] Route-specific guardrails are defined.
- [ ] Revisit triggers set.

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
- **Skill-specific:** Strategic recommendations reflect only the information provided. Test them with people who know your market, organisation and constraints.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `strategic-options`: Compare 2-5 real options against agreed criteria, with trade-offs made explicit, and recommend one.
- `business-case`: Build a decision-ready business case: options, costs, benefits, NPV, risks and the ask.
- `ai-business-case`: Build an honest business case for an AI use case, including model, data, change and run costs.
- `vrio-analysis`: Test which resources and capabilities give a lasting advantage, and which are just table stakes.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
