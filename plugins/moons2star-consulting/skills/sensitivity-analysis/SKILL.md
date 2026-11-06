---
name: sensitivity-analysis
description: "Tests how robust a decision is to uncertainty: identifies the drivers that matter, sets evidence-based ranges, runs one-at-a-time tornado analysis, break-even (switching) values, linked scenarios, and where useful probabilistic simulation; separates uncertainty that can be reduced by research from uncertainty that must be managed by design (staging, options, hedges); and states in plain words what has to be true for the decision to hold. Use for any number-based recommendation, investment case, pricing, budget or valuation, or when someone asks what happens if we are wrong."
---

# Sensitivity Analysis

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a clear answer to "How wrong can we be and still be right?" It names the few assumptions that decide the outcome, shows how far each can move before the decision flips, and says what to do about them.

## The senior standard
1. **Decision first.** Sensitivity is about whether the *decision* changes, not whether NPV moves. Define the decision threshold (NPV < 0, IRR < hurdle, covenant breach, cash < minimum).
2. **Evidence-based ranges.** Ranges come from history, peer data, pilot variance or expert elicitation, never a blanket ±10%.
3. **Switching values are the headline.** "NPV turns negative if volumes are 22% below plan" is more useful than a table of outputs.
4. **Linked scenarios beat independent swings.** In a downturn, volume, price and receivable days move together. Build coherent stories.
5. **Know when to simulate.** Monte Carlo helps when several uncertain drivers interact and the distribution of outcomes matters (e.g. covenant breach probability). Otherwise it adds false precision.
6. **Close the loop.** Each critical driver gets a response: research it, stage the investment, hedge it, contract it, or monitor it with a trigger.

## Before you start: diagnose
- The model or formula, and the base case.
- The decision metric and threshold.
- Candidate drivers and what evidence exists on their uncertainty.
- Correlations (which drivers move together) and constraints (capacity caps, contractual floors).

## Method
1. **List the drivers** in the model; shortlist the 6-12 most likely to matter.
2. **Set ranges** per driver: low and high (e.g. a 10th to 90th percentile view), with the source of the range stated.
3. **One-at-a-time analysis:** move each driver to its low and high while holding others at base; record the output; compute the swing; rank (tornado).
4. **Switching values:** for the top 3-5 drivers, find the value at which the decision metric hits its threshold, expressed as a % change from base, and compare it with the plausible range. If the switching value lies within the range, the decision is fragile on that driver.
5. **Linked scenarios:** 2-4 coherent stories (e.g. "slow adoption", "cost inflation", "competitive price war") with consistent driver movements; output for each.
6. **Two-way grids** for the two most important interacting drivers (e.g. price × volume, CAC × retention).
7. **Probabilistic simulation** (optional): distributions for key drivers, with correlations; outputs as a probability of meeting the threshold, P10/P50/P90. Report assumptions transparently.
8. **Interpret:**
   - Which drivers matter.
   - How confident we are in each.
   - Is the decision robust or fragile?
   - What is reducible uncertainty (research, a pilot, supplier quotes) vs irreducible (macro)?
9. **Responses:** for each critical driver: research action, design response (stage gate, option, phasing), contractual response (take-or-pay, price escalation clause), hedge, or a monitoring trigger.
10. **Compute everything with code.** Show the tables and a short narrative.

## Judgement calls
- **Asymmetric ranges are normal.** Costs overrun more often than they underrun; adoption disappoints more often than it surprises.
- **Don't flex what's contractually fixed.** Focus on what is genuinely uncertain.
- **Correlation matters more than precision.** Two drivers that fail together create the real downside.
- **Communicate in the audience's terms:** "We break even at 81 patients a day; we plan 95; the nearby clinic averages 88."
- **If the decision flips within the plausible range,** recommend design changes (staging, smaller first step), not just "monitor closely".

## Red flags
- A blanket ±10% on everything.
- A tornado chart with no conclusion.
- Scenarios where drivers move inconsistently (downturn with higher prices).
- Monte Carlo with arbitrary distributions and no correlations, presented as precise probabilities.
- No link from sensitivity to actions.

## Variants by context
- **Capex / projects:** capex overrun, schedule delay, ramp-up, utilisation, commodity prices, FX.
- **Product / pricing:** price elasticity, volume, mix, competitor response.
- **Lending / credit:** default rates, recovery rates, funding cost, prepayment.
- **Start-up:** CAC, conversion, retention, burn; runway sensitivity.
- **Budget / plan:** the top 5 revenue drivers and cost inflation; the reforecast triggers.

## Output format

```markdown
## Sensitivity Analysis: [model], decision metric = [metric], threshold = [..]
**Base case:** ...  |  **Verdict:** Robust / Fragile on [driver] - one line

### Tornado (one at a time)
| Driver | Low | Base | High | Range source | Output @low | Output @high | Swing |
|---|---|---|---|---|---|---|---|

### Switching values
| Driver | Switching value | % from base | Within plausible range? |
|---|---|---|---|

### Scenarios
| Scenario | Story | Key driver settings | Output | Meets threshold? |
|---|---|---|---|---|

### Two-way grid: [driver A] × [driver B]
### (Optional) Simulation: P(meets threshold), P10/P50/P90, key correlations
### What this means and what we'll do
| Critical driver | Reducible? | Response (research / design / contract / hedge / monitor) | Owner | Trigger |
|---|---|---|---|---|
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] The decision metric and threshold are defined.
- [ ] Ranges are evidence-based and sourced; asymmetry considered.
- [ ] A tornado ranking plus switching values for the top drivers.
- [ ] Coherent linked scenarios.
- [ ] Simulation used only if it adds value, with correlations stated.
- [ ] A plain-language verdict and a response per critical driver.
- [ ] Computed with code; tables shown.

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
- **Skill-specific:** Not investment, tax, valuation or accounting advice. Models and calculations are unaudited; have material numbers independently checked before decisions or disclosure.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `business-case`: Build a decision-ready business case: options, costs, benefits, NPV, risks and the ask.
- `scenario-planning`: Build 3-4 plausible futures from key uncertainties, and find moves that work across them.
- `break-even-payback`: Quickly find the break-even volume, payback period and margin of safety for a decision.
- `financial-model-spec`: Design a clean, auditable financial model: structure, drivers, sheets and checks, ready to build.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
