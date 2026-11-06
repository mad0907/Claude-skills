---
name: vrio-analysis
description: "Tests whether resources and capabilities create sustained competitive advantage using the VRIO lens (valuable, rare, costly to imitate, organised to exploit), with evidence for each test, imitation barriers (history, causal ambiguity, social complexity, IP, network effects, scale), capability decomposition into the routines that make it work, and implications for investment, protection, divestment and M&A. Use to define right to win, test an investment or acquisition thesis, decide where to invest in capabilities, or check claimed strengths."
---

# VRIO Analysis

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** an honest view of what actually differentiates the organisation, what is merely table stakes, and what is an advantage the organisation owns but isn't using. Each conclusion comes with the evidence and the investment implication.

## The senior standard
1. **Capabilities over assets.** Durable advantage usually sits in how things are done (integrated routines, know-how, relationships, data plus the processes that use it) rather than in things that can be bought.
2. **Valuable means customers or economics show it.** It raises willingness to pay or lowers cost in a way that shows up in margins, share or retention.
3. **Rare is relative to the competitive set** customers actually choose between.
4. **Costly to imitate needs a mechanism:**
   - **History:** decades of accumulation.
   - **Causal ambiguity:** competitors can't see what makes it work.
   - **Social complexity:** culture, relationships.
   - **Legal protection:** IP, licences.
   - **Network effects or scale.**
5. **Organised is often the binding constraint.** Structures, incentives, systems and decision rights determine whether the advantage is exploited.
6. **Advantages decay.** Assess how long imitation would take and how technology (especially AI) changes it.

## Before you start: diagnose
- Strategic question: right to win in what market or segment, against whom?
- Candidate resources and capabilities (from management, customer research, performance data).
- Evidence: margins vs peers, customer choice drivers, retention, cost benchmarks, patent and licence positions, talent data.

## Method
1. **List candidates:** tangible assets, intangible assets (brand, data, IP, licences, relationships) and capabilities (e.g. "underwriting thin-file MSMEs", "launching products in 9 months", "running complex projects in remote sites").
2. **Decompose key capabilities** into routines, people, data, systems and partners, to see where the advantage really lives.
3. **Apply V-R-I-O in sequence** with evidence:
   - **V:** link to customer value or cost (metrics).
   - **R:** how many competitors have it at comparable quality?
   - **I:** the imitation mechanism and estimated time and cost to replicate; substitutes.
   - **O:** structures, processes, incentives and leadership attention that exploit it.
4. **Classify:**
   - not valuable → competitive disadvantage;
   - valuable but not rare → parity;
   - valuable, rare, imitable → temporary advantage;
   - V, R, I but not organised → unused advantage;
   - all four → sustained advantage.
5. **Durability:** how long until imitation or substitution (technology shifts, AI, regulation)?
6. **Implications:**
   - **Sustained:** invest, protect (IP, talent retention), extend to adjacent markets.
   - **Unused:** fix organisation (incentives, structures, data access).
   - **Temporary:** exploit fast, build the next advantage.
   - **Parity:** run efficiently, don't over-invest.
   - **Disadvantage:** fix, partner or exit.
7. **Link to strategy and M&A:** which capabilities to build, buy or partner for (see `build-buy-partner`).

## Judgement calls
- **Data is rarely an advantage on its own.** Proprietary, relevant data plus the processes and talent to use it, plus feedback loops, can be.
- **AI erodes some advantages** (codified expertise, content production) and strengthens others (proprietary data, distribution, trust, integration).
- **Culture claims need behaviour evidence:** speed of decisions, retention of top performers, customer outcomes.
- **Beware the founder's favourite capability.** Test it like any other.

## Red flags
- Everything rated "yes" on all four.
- Assets listed without the capability that makes them useful.
- No imitation mechanism stated.
- "Organised" ignored, so unused advantages go unfixed.
- No investment implications.

## Variants by context
- **M&A thesis:** VRIO on the target's claimed advantages; integration risks to "Organised" after the deal.
- **Technology / platform firms:** network effects, switching costs, ecosystem, developer adoption.
- **Industrial:** process know-how, cost position, scale, licences and permits, customer qualifications.
- **Services / consulting / GCC:** talent models, domain IP, client relationships, delivery systems.

## Output format

```markdown
## VRIO Analysis: [organisation], right to win in [market]

| Resource / capability | Key routines / components | V (evidence) | R (evidence) | I (mechanism, time to copy) | O (evidence) | Result | Durability |
|---|---|---|---|---|---|---|---|

**Sustained advantages:** ... → invest / protect / extend
**Unused advantages:** ... → organisational fixes
**Temporary advantages:** ... → exploit, build next
**Parity / disadvantage:** ... → efficiency / fix / partner / exit
**Implications for strategy and M&A:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Capabilities are decomposed, not just assets listed.
- [ ] Each V/R/I/O judgement is evidenced; the imitation mechanism and time are stated.
- [ ] Results are classified correctly; unused advantages are identified.
- [ ] Durability is considered, including technology and AI shifts.
- [ ] Clear investment and organisational implications.

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
- `swot-tows`: Do SWOT properly: evidence-based factors, then turn them into concrete strategic moves (TOWS).
- `strategic-options`: Compare 2-5 real options against agreed criteria, with trade-offs made explicit, and recommend one.
- `build-buy-partner`: Decide whether to build a capability, acquire it, or partner, with a clear rationale.
- `ai-opportunity-scan`: Find where AI can create real value in a function or business, grounded in processes and pain points.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
