---
name: swot-tows
description: "Produces an evidence-based SWOT that is relative to competitors and specific to a strategic question, then converts it into a TOWS matrix of concrete strategic options (strengths-opportunities, strengths-threats, weaknesses-opportunities, weaknesses-threats), prioritised by impact, feasibility and time, with what must be true for each. Use for strategy offsites, business-unit reviews, market entry, investment theses, or whenever someone asks for a SWOT and you want it to lead to decisions."
---

# SWOT to TOWS

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a SWOT that survives challenge, because every item is evidenced and comparative, and that ends in a short list of strategic moves rather than four boxes of adjectives.

## The senior standard
1. **Anchor to a question.** "SWOT for our company" is too broad. "SWOT for winning mid-market banking clients in the Gulf by 2028" produces useful content.
2. **Strengths and weaknesses are relative.** A strength is only a strength if it beats the alternatives customers have. "Good people" is not a strength unless it shows up in measurable outcomes better than competitors'.
3. **Internal vs external, strictly.** S and W are about the organisation (capabilities, assets, costs, culture). O and T are external (customers, competitors, technology, regulation, macro). Plans are not opportunities.
4. **Evidence or delete.** Each item cites a fact, metric, customer quote or benchmark.
5. **Fewer, ranked items.** 3-6 per quadrant, ranked by importance to the question.
6. **The value is in TOWS.** Combine quadrants to generate options, then prioritise.

## Before you start: diagnose
- The strategic question, the horizon and the decision-maker.
- Evidence available: financials, market data, customer research, competitor benchmarks, capability assessments, employee surveys.
- The relevant competitor set and customer segments.

## Method
1. **Frame** the question and the comparison set (whose alternatives do customers consider?).
2. **External scan first** (it frames what strengths matter): opportunities and threats from customers, competitors, technology, regulation and macro (use `pestel-scan` and `five-forces` outputs if available). Rate each by impact and likelihood or timing.
3. **Internal assessment relative to competitors:** capabilities, assets, cost position, brand, relationships, data, talent, culture, financial capacity. Cite evidence; use `vrio-analysis` to test claimed strengths.
4. **Rank** within each quadrant; keep 3-6.
5. **TOWS matrix:**
   - **SO (offence):** use strengths to capture opportunities.
   - **ST (defence via strength):** use strengths to blunt threats.
   - **WO (fix to grow):** overcome weaknesses to capture opportunities (build, partner, buy).
   - **WT (protect):** minimise weaknesses and avoid threats (retreat, restructure, hedge).
   Generate 2-4 concrete options per cell: verb + object + measurable intent.
6. **Prioritise options:** impact, feasibility (capabilities, capital), time to value and risk. Pick 3-6 to develop.
7. **For each priority option:** what must be true (assumptions to test), first steps, owner.

## Judgement calls
- **The same fact can be a strength and a weakness.** A large branch network is reach (S) and fixed cost (W). Name both sides honestly.
- **Opportunities that everyone has aren't advantages.** Note which opportunities you are better placed to capture than rivals, and why.
- **Threats deserve as much attention as opportunities.** Teams under-weight them. Use pre-mortem thinking.
- **WT options are often the most valuable** and the least discussed (exit, simplify, shrink to profitable core).

## Red flags
- "Strong brand", "great culture", "loyal customers" with no evidence.
- Internal plans listed as opportunities ("launch app").
- 15 items per box.
- No TOWS; the analysis stops at the SWOT.
- Options that are vague ("leverage synergies").

## Variants by context
- **Board strategy day:** focus on 2-3 strategic questions; pre-read SWOT; TOWS workshop.
- **Investment thesis / due diligence:** a SWOT of the target vs peers; emphasise threats to the investment case.
- **Personal or functional strategy** (e.g. IT or HR function): compare with internal customer expectations and external providers.
- **Public sector:** opportunities from policy and funding; threats from fiscal constraints and public trust.

## Output format

```markdown
## SWOT to TOWS: [strategic question], [horizon]
**Comparison set:** ...

| Strengths (relative, evidenced) | Weaknesses (relative, evidenced) |
|---|---|
| 1. ... (evidence) | 1. ... (evidence) |
| **Opportunities** (impact, timing) | **Threats** (impact, likelihood) |
| 1. ... | 1. ... |

### TOWS options
| | Opportunities | Threats |
|---|---|---|
| **Strengths** | SO: ... | ST: ... |
| **Weaknesses** | WO: ... | WT: ... |

### Priority options
| Option | Cell | Impact | Feasibility | Time | Risk | What must be true | First step / owner |
|---|---|---|---|---|---|---|---|
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Anchored to a specific question and comparison set.
- [ ] Every item is evidenced; strengths are relative to competitors.
- [ ] Internal and external are correctly separated; no plans listed as opportunities.
- [ ] 3-6 ranked items per quadrant.
- [ ] TOWS options are concrete, then prioritised, with what must be true.

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
- `vrio-analysis`: Test which resources and capabilities give a lasting advantage, and which are just table stakes.
- `pestel-scan`: Scan political, economic, social, technological, environmental and legal shifts, and rank what really matters.
- `competitor-benchmark`: Compare competitors on the factors that matter to customers and economics, and spot where to win.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
