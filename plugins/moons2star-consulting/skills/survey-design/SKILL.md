---
name: survey-design
description: "Designs surveys that produce decision-grade data: objectives and analysis plan written before any questions, target population and sampling frame, sample size from required precision and subgroup cuts, question types matched to what is measured, neutral single-concept wording, balanced scales, logical flow and skip logic, length and mobile limits, bias controls (order, acquiescence, social desirability, leading wording), screening and attention checks, pilot testing, consent and data protection, and the tables to be produced. Use for customer, employee, market, pricing, satisfaction, needs or concept surveys."
---

# Survey Design

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a survey that answers the decision's questions with known precision, from the right people, with questions that measure what you think they measure, and an analysis plan agreed before the data arrives.

## The senior standard
1. **Analysis plan first.** Write the tables and charts you'll produce, and the decision each informs, before writing questions. Any question that feeds no table is cut.
2. **Who, precisely.** Define the population and sampling frame; know who is missing (non-customers? lapsed users? offline segments?).
3. **Sample size from precision.** About ±3 points needs roughly 1,000 responses; ±5 points needs about 400. Every subgroup you'll compare needs its own adequate n (≥100 to read; ~300+ to detect modest differences).
4. **One concept per question; neutral words.** No double-barrelled, leading or loaded questions; define terms; specify the time frame.
5. **Balanced scales, consistently applied.** The same scale direction throughout; a midpoint where a neutral answer is legitimate; "don't know" or "not applicable" where real.
6. **Short and mobile-first.** Under ~10 minutes; fatigue degrades quality in later questions.
7. **Pilot it.** 5-10 cognitive interviews or a soft launch catches confusing questions before they cost you the study.

## Before you start: diagnose
- The decision; key questions; the hypotheses to test.
- Population and frame (CRM list, panel, employees, website visitors); expected response rate.
- Subgroups to compare (segment, region, tenure, role).
- Mode (online, phone, in-person), language(s), incentives, timing.
- Constraints: consent, data protection, anonymity (especially for employees).

## Method
1. **Objectives and analysis plan:** the decision → questions → tables / charts → the survey questions needed.
2. **Population, frame and sampling:** random or stratified from the frame; quotas for key subgroups; plan weighting if the sample will differ from the population.
3. **Sample size:** the margin of error at 95% ≈ 1.96 × √(p(1−p)/n). Plan for subgroup needs and expected response rates (invites = required n ÷ response rate).
4. **Question design by measurement type:**
   - Behaviour (frequency, recency, spend): specific time frames.
   - Attitude or satisfaction: balanced 5- or 7-point scales.
   - Importance: forced trade-offs (ranking, max-diff) rather than "rate everything important".
   - Willingness to pay: methods designed for price research; treat stated intent cautiously.
   - Demographics and firmographics: at the end, unless they are screeners.
5. **Wording:** simple, specific, neutral; avoid jargon, negatives and assumptions; balanced response options; mutually exclusive, exhaustive categories.
6. **Flow:** screeners → warm-up → core topics (general → specific) → sensitive items → demographics → thanks. Use skip logic; randomise option order where order bias is likely.
7. **Bias controls:**
   - Order effects: randomise.
   - Acquiescence: avoid agree/disagree batteries where possible.
   - Social desirability: anonymity, indirect questions.
   - Recall: short time frames.
8. **Quality controls:** attention checks; speeder and straight-liner flags; open-text sense checks; duplicate checks.
9. **Pilot:** cognitive interviews plus a soft launch (5-10% of sample); fix and finalise.
10. **Consent and data protection:** purpose, use, retention, anonymity statement; minimal personal data.
11. **Field plan:** timing, reminders, incentives, monitoring of quotas and response rates.

## Judgement calls
- **Stated vs revealed:** surveys over-state intent ("likely to buy"). Discount purchase intent; use behavioural data where available.
- **Net scores** (e.g. promoters minus detractors) are simple but lose information. Report the full distribution too.
- **Open questions are expensive** to analyse; use 1-3 well-placed ones ("Why did you give that score?").
- **Employee surveys:** a minimum reporting group size (e.g. ≥10) to protect anonymity; communicate actions afterwards, or participation falls.
- **Longitudinal tracking:** keep wording and scales identical between waves, or comparisons break.

## Red flags
- No analysis plan; questions "nice to know".
- Subgroups too small to compare.
- Leading or double-barrelled wording; unbalanced scales.
- 25-minute surveys; no mobile testing.
- No pilot; no quality checks; consent missing.

## Variants by context
- **Customer satisfaction / loyalty:** relationship vs transactional; driver analysis needs consistent attribute ratings.
- **Market sizing / needs:** a sampling frame beyond your own customers; screening for category users.
- **Pricing:** structured price-research methods; careful framing; caution on stated willingness to pay.
- **Employee engagement:** anonymity, validated item sets, action-planning follow-through.
- **Concept testing:** monadic design (each respondent sees one concept) to avoid comparison bias.

## Output format

```markdown
## Survey Design: [study], for [decision]
**Objectives and analysis plan:**
| Decision question | Table / chart | Survey questions |
|---|---|---|

**Population and frame:** ... **Sampling:** ... **Target n:** __ (±__ pts); subgroups: ...; invites needed: __ at __% response
**Questionnaire:** numbered questions with response options, skip logic and randomisation notes
**Quality controls:** ...
**Pilot plan:** ...
**Consent and data protection statement:** ...
**Length:** __ min (mobile tested)
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Every question maps to an analysis-plan table and a decision.
- [ ] Population, frame and sample size with precision; subgroups adequately sized.
- [ ] Neutral, single-concept wording; balanced scales; logical flow.
- [ ] Bias and quality controls; pilot planned.
- [ ] Consent and data protection; length within ~10 minutes.

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
- **Skill-specific:** Research quality depends on the sources available to Claude in your session. Verify key facts against primary sources.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `survey-analysis`: Turn survey results into a few significant, decision-relevant insights with honest caveats.
- `pricing-strategy`: Set or reset prices using value, cost and competition, with tiers and a test plan.
- `customer-segmentation`: Group customers by needs and value so you can focus, price and serve them differently.
- `interview-guide`: Write a crisp guide for expert, customer or employee interviews that gets real answers, not opinions.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
