---
name: survey-analysis
description: "Analyses survey data rigorously: data cleaning (speeders, straight-liners, duplicates, attention checks), response-rate and non-response bias review, weighting to the population with effective sample size, full distributions not only averages or net scores, cross-tabs by planned subgroups with base sizes, margins of error and significance testing that separate real differences from noise, driver analysis with its limits, coding open text, and findings written as decision implications with confidence levels. Use when survey results arrive, or when someone presents survey percentages as facts."
---

# Survey Analysis

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** findings you can defend: which differences are real, which are noise, how sure you can be, and what the results mean for the decision, without overclaiming from small subgroups or skewed samples.

## The senior standard
1. **Clean before you count.** Remove speeders, straight-liners, failed attention checks and duplicates. Document the rules and how many responses were removed.
2. **Know who answered.** Response rate and profile vs the population. If the sample skews (e.g. too many happy customers), weight it and say so.
3. **Base sizes everywhere.** Every percentage shows its n. Subgroups under ~100 are indicative only; under ~30, don't report percentages.
4. **Uncertainty is part of the answer.** Margins of error and significance tests (or confidence intervals) on key comparisons. "Higher" means statistically and practically higher.
5. **Distributions, not just averages.** A 3.5 average can hide polarisation. Show the full spread and top-2 / bottom-2 box results.
6. **Correlation is not causation.** Driver analysis shows association; confirm causes with behavioural data or experiments.
7. **Findings drive decisions:** each finding gets a so-what and a confidence level.

## Before you start: diagnose
- The analysis plan and decision; the questionnaire; the population and sampling design.
- The raw data file and field report (invites, completes, dates, mode).
- Known population figures for weighting (segment mix, region, size).

## Method
1. **Cleaning:** apply the quality rules; report the before and after counts.
2. **Response and representativeness:** response rate; sample vs population profile; non-response concerns.
3. **Weighting (if needed):** weight to known population margins; report the effective sample size ≈ (Σw)² ÷ Σw², and use it for margins of error.
4. **Toplines:** full distributions for key questions; top-2 box and bottom-2 box; net scores with their components.
5. **Cross-tabs:** the planned subgroups only (avoid fishing); base sizes shown.
6. **Significance:** a two-proportion z-test or chi-square for proportions; t-tests for means; flag differences significant at 95%; adjust or be cautious with many comparisons.
7. **Driver analysis:** correlation or regression of attributes against the overall outcome; combine with stated importance; plot importance vs performance; caveat as association.
8. **Open text:** code into themes (n per theme); select typical quotes.
9. **Findings:** full-sentence insights with numbers, n, significance and a so-what; confidence high / medium / low.
10. **Limitations:** coverage gaps, non-response, self-report, timing.

## Judgement calls
- **Statistically significant but trivial** (e.g. 1 point on n = 20,000) is not a finding; focus on differences that matter for the decision.
- **Non-significant isn't "no difference".** It may be an underpowered comparison; say "not detectable with this sample".
- **Net scores:** small shifts are often within noise; the margin of error on a net score is larger than on a single proportion.
- **Multiple comparisons:** with 40 cross-tabs, about 2 will be "significant" by chance at 95%; pre-specify key tests.
- **Stated intent:** discount purchase or switching intentions; validate with behaviour (churn data).

## Red flags
- Percentages without base sizes.
- "Segment A is higher" with overlapping intervals.
- Averages only; polarised distributions hidden.
- No cleaning or weighting notes.
- Driver correlations presented as causes.
- Cherry-picked cross-tabs.

## Variants by context
- **Customer satisfaction / loyalty:** link to retention data; driver analysis; verbatim themes.
- **Employee surveys:** minimum group sizes for anonymity; benchmark to previous waves (same wording); action priorities.
- **Market studies:** weight to population; size estimates with ranges; screen-out rates as incidence.
- **Concept tests:** monadic comparisons with significance; discount top-box intent.
- **Tracking studies:** wave-on-wave changes with significance; seasonality.

## Output format

```markdown
## Survey Analysis: [study] (n = __ clean, of __ completes; response rate __%; fieldwork dates)
**Bottom line:** ...

**Cleaning and weighting:** removed __ (rules); weighted to [margins]; effective n __; MOE ±__ pts

| Finding (full sentence) | Evidence (%, n) | Significant? | Confidence | So what |
|---|---|---|---|---|

**Key distributions:** ...
**Driver analysis (association, not causation):** ...
**Open-text themes (n):** ...
**Limitations:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Cleaning rules and counts; response rate and representativeness reviewed.
- [ ] Weighting and effective n reported where used.
- [ ] Base sizes on all figures; small bases flagged.
- [ ] Margins of error and significance on key comparisons.
- [ ] Distributions shown; drivers caveated; findings have a so-what and confidence.

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
- `survey-design`: Design a short, unbiased survey that produces numbers you can actually use.
- `exhibit-builder`: Design a complete, board-ready exhibit: title, chart, callouts, source, and the code to draw it.
- `insight-synthesis`: Turn analysis outputs into true insights: what it means, why it matters, what to do.
- `chart-selection`: Pick the right chart for the message, and avoid charts that confuse or mislead.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
