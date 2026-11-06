---
name: exhibit-builder
description: "Designs and produces a presentation-grade exhibit (chart or table) from data: confirms the message and computes what is needed to show it, selects the chart, writes the action title and subtitle with units and period, adds one to three callouts, applies consistent formatting, source and footnotes, checks numbers against the source, and generates the visual as an image or chart code when tools allow, or a precise build spec otherwise. Use to turn data into a slide-ready visual, rebuild a messy chart, or make exhibits consistent across a deck."
---

# Exhibit Builder

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** a finished exhibit that a senior reader trusts and understands in five seconds: a correct calculation, the right chart, a clear title, focused highlights, and a source line.

## The senior standard
1. **Numbers are right.** Recompute from the source data in code; reconcile totals to known figures (P&L, reported KPIs).
2. **One message per exhibit,** stated as the action title.
3. **Chart fits the message** (see `chart-selection`).
4. **Callouts guide the eye:** 1-3 annotations pointing to the key number or change.
5. **Consistency across the deck:** units, decimals, colours, fonts, period labels, sort conventions.
6. **Provenance:** source line, date or period, definitions and estimates footnoted.
7. **Print and accessibility test:** readable in black and white and by colour-blind readers; legible when projected.

## Before you start: diagnose
- The data (file or table), the message, the audience, and the template or brand colours if any.
- Calculations needed (shares, growth, indices, bridges, averages, cumulative).
- Output format: image, chart code, or a spec for a designer.

## Method
1. **Load and check the data:** totals, missing values, outliers, units, period definitions.
2. **Compute** the derived metrics in code (e.g. share of profit, CAGR, contribution to change); keep a calculation note.
3. **Confirm the message** against the results. If the data doesn't support the intended title, change the title.
4. **Choose the chart** and specify the layout: orientation, sort, scale, highlight colour, grey context.
5. **Title and subtitle:** the action title (≤15 words); the subtitle with units, period and scope.
6. **Callouts:** label the key bar or point with its value; add a bracket or arrow for differences; an annotation for an event.
7. **Formatting:**
   - rounded numbers (e.g. ₹ Cr to 1 decimal, % to whole numbers unless small);
   - consistent thousand separators (Indian lakh/crore or international, as the audience expects);
   - remove clutter.
8. **Source and footnotes:** data source, extraction date, definitions, estimates marked "(est.)".
9. **Produce:** generate the exhibit (image or chart code) if tools are available; otherwise a build spec with exact values.
10. **QA:** numbers vs source; title vs visual; consistency with other exhibits; accessibility.

## Judgement calls
- **Rounding can change stories** (e.g. 49.6% shown as 50%). Check that rounded figures still support the title.
- **Indian vs international number formats:** use lakh/crore for Indian audiences and millions/billions for global ones. Never mix them in one deck.
- **Annotate events** (price change, outage, policy) on time series. It prevents misreading.
- **When data quality is weak,** say so in a footnote and soften the title.

## Red flags
- Totals that don't match reported figures.
- A title claiming more than the visual shows.
- Inconsistent colours or units across exhibits.
- No source line.
- A chart produced by a tool's defaults (legend, gridlines, 3D, rainbow).

## Variants by context
- **Board exhibits:** fewer callouts; trend plus target; conservative claims.
- **Due diligence:** data-room source references per exhibit; normalisation adjustments shown.
- **Dashboards:** standard templates; automated refresh; consistent scales.
- **Public reports:** stricter sourcing; accessibility; alt text.

## Output format

```markdown
## Exhibit: [id]
**Title:** ...
**Subtitle:** units, period, scope
**Chart:** type and spec (or generated image / code)
**Key values:** ...
**Callouts:** ...
**Source:** ... | **Notes:** definitions, estimates
**Calculation note:** how the derived figures were computed
**QA:** reconciled to [figure] ✓ | title supported ✓ | consistent formats ✓
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Numbers are computed in code and reconciled to the source.
- [ ] The title states the message and is supported by the visual.
- [ ] Chart choice and design follow good practice; 1-3 callouts.
- [ ] Source, period, units and footnotes are present.
- [ ] Consistent formats; readable in black and white.

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
- `chart-selection`: Pick the right chart for the message, and avoid charts that confuse or mislead.
- `action-titles`: Rewrite slide titles so each one states the takeaway, and the titles alone tell the story.
- `deck-quality-check`: A senior-partner style review of a deck: storyline, logic, evidence, numbers and visual consistency.
- `insight-synthesis`: Turn analysis outputs into true insights: what it means, why it matters, what to do.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
