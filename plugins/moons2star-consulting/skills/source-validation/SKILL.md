---
name: source-validation
description: "Validates sources and specific claims before they enter a deck, memo or board paper: traces each claim to its original source, assesses authority, method, sample, definitions, recency, independence and conflicts of interest, checks for misquotation and context loss, seeks independent corroboration, grades confidence (strong, usable with caveat, do not use), and supplies safe wording that matches the evidence; never invents or assumes a source. Use for any statistic, quote or claim that will be relied upon, when sources disagree, or when a number sounds too neat."
---

# Source Validation

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** protection from the embarrassing statistic. Every claim you present is traced to where it came from, judged on its merits, and worded to match what the evidence actually supports.

## The senior standard
1. **Trace to the original.** A number quoted in an article, report or deck is a lead. Find the primary source (study, filing, official dataset, regulation). If you can't, say so.
2. **Judge the method, not the brand.** A famous publisher can still use a weak sample or a self-serving definition. Check the sample size, method, geography, period and who funded it.
3. **Definitions must match your use.** "AI market", "SME", "digital user" and "active customer" vary widely between sources.
4. **Recency matters by domain.** Technology and market figures age fast; demographic data ages slowly. Flag stale data.
5. **Independence.** Vendor-funded surveys and advocacy reports need corroboration.
6. **Calibrated wording.** Match verbs to confidence: "shows" (strong), "suggests" (moderate), "one survey reports" (weak).
7. **Never fabricate.** If verification is impossible in this session, mark the claim unverified and say what to check.

## Before you start: diagnose
- The claims to validate (exact wording and the number).
- Where each came from (link, document, person).
- How the claims will be used (board decision, external publication, internal discussion). Higher stakes need a higher bar.

## Method
1. **List claims** verbatim, with their current source.
2. **Trace to the original:** follow citations to the primary source; record the chain. Note misquotations or context loss (e.g. a "70% of projects" finding that came from a small, non-random sample).
3. **Assess the source:**
   - **Authority:** official statistics, audited filings, peer-reviewed work > industry surveys > vendor marketing and blogs.
   - **Method:** sample size and selection, response rate, measurement, period, geography.
   - **Definitions:** what exactly was measured.
   - **Recency:** publication and data dates.
   - **Independence:** funding and interests.
4. **Corroborate:** find at least one independent source or sanity check (order-of-magnitude logic, triangulation).
5. **Grade:**
   - **A (strong):** primary, robust method, matching definition, corroborated.
   - **B (usable with caveat):** reasonable but limited; state the caveat.
   - **C (do not use as fact):** untraceable, weak method, conflicted, or contradicted.
6. **Safe wording** per claim, matched to its grade; propose alternatives for grade C claims (another source, or reframing).
7. **Log:** claim | original source | date | method notes | corroboration | grade | safe wording | to-verify actions.

## Judgement calls
- **Widely repeated does not mean true.** Many famous business statistics come from small or unclear studies.
- **For contested topics,** present the range of credible estimates and why they differ.
- **For legal or regulatory claims,** only official texts or authoritative legal commentary count. Note the date and status (draft vs notified).
- **For internal numbers,** validate against the system of record and the owner (Finance for financials).

## Red flags
- Statistics with no traceable original.
- Rounded "magic numbers" (70%, 80/20, 10x) with no method.
- Definitions that don't match the use.
- Vendor-funded studies presented as independent.
- Old data presented as current.

## Variants by context
- **Board papers:** grade A or B only; caveats explicit; dates on all facts.
- **External publications:** stricter standard; permissions for quotes and data; citations.
- **Investment cases:** reconcile with audited data; disclose estimates.
- **AI-generated content:** verify every factual claim and citation independently. AI can produce plausible but false references.

## Output format

```markdown
## Source Validation: [document / topic]

| # | Claim (verbatim) | Original source (chain) | Date | Method / definition notes | Corroboration | Grade | Safe wording |
|---|---|---|---|---|---|---|---|

**Do not use (grade C):** ... → alternatives
**Use with caveat (grade B):** ...
**Actions to verify:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Every claim is traced to an original source, or marked "original not found".
- [ ] Method, definitions, recency and independence assessed.
- [ ] Corroboration attempted for decision-critical claims.
- [ ] Grades assigned; grade C claims not used as fact.
- [ ] Safe wording matches confidence; no invented sources.

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
- `research-synthesis`: Turn piles of notes, reports and links into a few clear findings with evidence and implications.
- `deck-quality-check`: A senior-partner style review of a deck: storyline, logic, evidence, numbers and visual consistency.
- `board-paper`: Write a board paper directors can read in 10 minutes: purpose, recommendation, analysis, risks and the resolution.
- `red-team-review`: Stress-test a plan, argument or document like a tough, fair critic, before your audience does.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
