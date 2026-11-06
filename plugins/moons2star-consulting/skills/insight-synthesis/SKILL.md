---
name: insight-synthesis
description: "Converts analysis outputs, charts and observations into decision-relevant insights using what, so what and now what, merges observations that share a root cause, quantifies impact, rates confidence, separates insights from mere facts, ranks them by value to the decision, and writes headline-ready insight statements with evidence trails, plus a parked list for the appendix. Use after analysis and before storytelling, when a team has findings but no message, or when preparing a leadership or board narrative from data."
---

# Insight Synthesis

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** five or fewer insights that change what leaders do, each stated in one sentence with a number, a cause, a consequence and an implied action, rather than 30 observations restating the charts.

## The senior standard
1. **An observation is not an insight.** "Sales fell 6% in West" is an observation. "West's 6% drop is entirely from two distributors who lost credit lines; restoring terms recovers about ₹11 Cr a quarter" is an insight: cause, impact and action.
2. **So what, now what.** Every insight answers why it matters (money, risk, customers, strategy) and what should be done.
3. **Root causes over symptoms.** Merge observations that share a cause; the cause is the insight.
4. **Quantify.** Size the impact or opportunity, with a range if uncertain.
5. **Confidence is explicit.** State the evidence strength and what would change the view.
6. **Fewer, stronger.** Rank by impact on the decision. Park the rest.
7. **Surprising and true beats obvious.** Insights that overturn an assumption are the most valuable, and need the strongest evidence.

## Before you start: diagnose
- The decision or question the analysis serves.
- The analyses done and the observations generated (charts, tables, interview themes).
- The audience's current beliefs (what would be surprising?).

## Method
1. **List observations** (what the data shows), one per line, with their source.
2. **Ask "why?"** for each, until you reach a plausible cause supported by evidence; link related observations.
3. **Cluster** by shared cause or theme.
4. **For each cluster, write:**
   - **What:** the pattern, with a number.
   - **So what:** the impact on the decision, money, risk or customers.
   - **Now what:** the implied action.
5. **Quantify** impact: size the prize or the problem (₹, %, customers, time). Use code for arithmetic.
6. **Rate confidence:** high (multiple consistent sources, causal evidence), medium, or low (single source, correlation only). Note the test that would raise confidence.
7. **Rank** by impact × confidence × decision relevance. Keep the top 3-5.
8. **Write headline statements** (≤25 words): subject + finding + consequence. These become action titles.
9. **Park** remaining observations for the appendix, with a one-line reason.

## Judgement calls
- **Correlation vs cause.** Where causality is uncertain, say "is associated with" and propose a test (A/B, natural experiment, interviews).
- **Averages hide insight.** Look at distributions, segments and outliers; the insight often lives in a sub-segment.
- **Counter-intuitive findings** need extra validation before you present them. They are high-value but high-risk.
- **Don't force an action** where the right response is "investigate further". Say what to investigate and why.

## Red flags
- Insights that restate a chart title.
- No numbers; no consequence; no action.
- Too many "insights" (10+).
- Causal claims from correlations without caveats.
- Insights not linked to the decision.

## Variants by context
- **Customer research:** insights about needs and behaviours, with segment sizes and implications for offers.
- **Financial performance:** variance drivers with a bridge, the controllable vs uncontrollable split, and actions.
- **Operational analytics:** bottlenecks and failure modes, with capacity or cost impact.
- **Employee surveys:** drivers of engagement or attrition, by segment, with action areas.
- **Board narrative:** strategic insights tied to strategy, risk and performance.

## Output format

```markdown
## Insights: [topic / decision]

| # | Insight headline (≤25 words) | What (evidence) | So what (impact, quantified) | Now what (action) | Confidence | Test to raise confidence |
|---|---|---|---|---|---|---|

**Parked observations (appendix):** observation - reason parked
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Each insight has what, so what and now what.
- [ ] Root causes are identified; related observations merged.
- [ ] Impact is quantified, with arithmetic done in code.
- [ ] Confidence and causal caveats are stated.
- [ ] 3-5 insights, ranked; the rest parked.
- [ ] Headlines are usable as action titles.

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
- **Skill-specific:** Check that the final message, numbers and claims are accurate and approved before sharing outside your organisation.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `research-synthesis`: Turn piles of notes, reports and links into a few clear findings with evidence and implications.
- `action-titles`: Rewrite slide titles so each one states the takeaway, and the titles alone tell the story.
- `scqa-storyline`: Build the storyline every executive document needs: Situation, Complication, Question, Answer.
- `exhibit-builder`: Design a complete, board-ready exhibit: title, chart, callouts, source, and the code to draw it.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
