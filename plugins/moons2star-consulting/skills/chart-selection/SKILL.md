---
name: chart-selection
description: "Recommends the right chart for a specific message and dataset by identifying the relationship to show (ranking and comparison, change over time, part-to-whole and bridges, distribution, correlation, deviation from target, geography, flow), applying perception principles (position and length over angle and area), and specifying design rules (baselines, sorting, direct labels, one accent colour, message title, annotations, accessibility) while warning against misleading forms. Use whenever you make a chart for a deck, report or dashboard, or need to fix a confusing one."
---

# Chart Selection

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** the chart that makes your point obvious at a glance and can't be accused of misleading, with a precise build specification anyone can follow.

## The senior standard
1. **Message first.** Write the one-sentence takeaway before choosing the chart. The chart exists to prove it.
2. **Match the relationship to the form:**
   - **Comparison or ranking:** sorted bar (horizontal for long labels).
   - **Change over time:** line (many periods) or column (few periods).
   - **Part-to-whole:** stacked bar or 100% bar; a pie only for 2-3 parts.
   - **Bridge or variance:** waterfall.
   - **Distribution:** histogram or box plot.
   - **Correlation:** scatter (bubble size for a third variable).
   - **Deviation from target:** bullet chart or diverging bar.
   - **Flow:** flow diagram.
   - **Geography:** map, only if location matters.
3. **Perception hierarchy.** People judge position and length more accurately than angle, area or colour intensity. Prefer bars and lines.
4. **Honesty.**
   - Bar charts start at zero.
   - Axes are consistent across comparable charts.
   - No 3D.
   - No truncated axes that exaggerate.
   - Dual axes only when essential, and clearly labelled.
5. **Focus.** Grey for context; one accent colour for the point; direct labels instead of legends; annotate the key number.
6. **Accessibility.** Colour-blind-safe palettes; never rely on colour alone; readable font sizes.

## Before you start: diagnose
- The message (one sentence) and the audience.
- The data: number of categories, periods, series; units; precision.
- The medium: slide, report, dashboard, mobile.

## Method
1. **Write the message.**
2. **Classify the relationship** (list above).
3. **Choose the chart,** and one alternative with the trade-off.
4. **Specify:**
   - orientation;
   - axes and scales (start at zero for bars; log only if needed and labelled);
   - sort order (by value, unless there is a natural order);
   - what is highlighted;
   - labels (direct, with rounded numbers);
   - title (the message);
   - subtitle (units, period);
   - source line;
   - annotations.
5. **Check for misleading risks:** truncation, cherry-picked periods, mismatched scales, area distortions.
6. **Simplify:** remove gridlines, borders, legends where direct labels work, and decimal noise.
7. **Describe the final chart precisely** so it can be built in any tool.

## Judgement calls
- **Tables beat charts** when readers need exact values or look up individual numbers.
- **Small multiples** beat one crowded chart for many series or units.
- **Pie charts** are acceptable for one dominant part vs the rest. Avoid them for comparisons.
- **Show uncertainty** (ranges, error bars, forecast bands) when decisions depend on it.
- **Indexing** (base = 100) helps compare growth of differently sized series. Say so in the subtitle.

## Red flags
- Chart chosen before the message.
- Pie with 6+ slices; 3D; gauges.
- Rainbow colours; legends far from the data.
- Bar axis not starting at zero.
- Dual axes implying false correlation.

## Variants by context
- **Board:** fewer, simpler charts; trends with targets; risk heat maps used sparingly.
- **Dashboards:** consistent chart types per metric type; sparklines; bullet charts.
- **Analytical reports:** distributions and scatter plots to show variation, not just averages.
- **Mobile or narrow formats:** horizontal bars; fewer categories; large labels.

## Output format

```markdown
## Chart Recommendation
**Message:** ...
**Relationship:** ...
**Chart:** ... (alternative: ... - trade-off)
**Spec:**
- Orientation / axes / scale: ...
- Sort: ...
- Highlight: ...
- Labels / annotations: ...
- Title: "..." | Subtitle: units, period | Source: ...
**Avoid:** ...
**Misleading-risk check:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] The message is written first; the relationship is classified.
- [ ] The chart matches the relationship; an alternative is considered.
- [ ] Honest scales; zero baseline for bars; no 3D.
- [ ] One accent colour; direct labels; a message title; a source.
- [ ] Accessibility considered.

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
- `exhibit-builder`: Design a complete, board-ready exhibit: title, chart, callouts, source, and the code to draw it.
- `kpi-dashboard`: Design a one-page dashboard leaders will actually use: right metrics, targets, layout and alerts.
- `action-titles`: Rewrite slide titles so each one states the takeaway, and the titles alone tell the story.
- `survey-analysis`: Turn survey results into a few significant, decision-relevant insights with honest caveats.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
