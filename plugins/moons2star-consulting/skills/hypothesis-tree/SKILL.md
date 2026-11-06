---
name: hypothesis-tree
description: "Structures hypothesis-driven problem solving: a governing hypothesis stated as a full answer, the supporting claims that must all hold (logically sufficient), for each claim the analysis, data, confirmation threshold and kill criterion, prioritisation by fragility and consequence, a genuine alternative hypothesis, deliberate disconfirmation tests to counter confirmation bias, and an evidence log that updates the tree as results arrive. Use when time is short and an informed answer exists, to focus research and due diligence, or to show a sponsor exactly what evidence would change the recommendation."
---

# Hypothesis Tree

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** speed with discipline. You start from your best answer, then try hard to prove it wrong, so you converge on the truth faster and can show exactly what the recommendation rests on.

## The senior standard
1. **State a complete answer early,** as a recommendation with a reason, not a topic. "We should exit retail banking in Country X because returns won't exceed the cost of equity" is a hypothesis; "retail banking performance" is not.
2. **Claims must be necessary and sufficient.** Each supporting claim is necessary (if it fails, the hypothesis weakens materially), and together they suffice.
3. **Pre-commit to thresholds.** Write what number confirms and what number kills each claim before you look.
4. **Seek disconfirmation.** At least one test per key claim should be designed to break it. Confirmation bias is the biggest risk in this method.
5. **Keep a real alternative alive.** Name the alternative hypothesis and the evidence that would favour it.
6. **Update visibly.** Mark claims confirmed, killed or reshaped as evidence arrives, and change the answer if needed.

## Before you start: diagnose
- The key question and decision; the time available.
- What is known already; expert intuition; available data.
- Stakeholder positions (where bias may come from).

## Method
1. **Governing hypothesis:** answer the key question in one sentence, with "because".
2. **Supporting claims (3-5):** what must be true. Typical structure:
   - **Desirability:** is it worth it?
   - **Feasibility:** can we do it?
   - **Viability:** does it pay?
   - **Risk:** is it within appetite?
   - **Alternatives:** is it better than the options?
3. **For each claim:**
   - the test (analysis);
   - data needed and source;
   - confirmation threshold;
   - kill criterion;
   - owner and time.
4. **Prioritise:** test first the claims that are most likely to be wrong and most damaging if wrong (fragility × consequence).
5. **Design disconfirmation:** for the top claims, specify the evidence that would prove them false, and actively look for it (e.g. interview lost customers, not just happy ones).
6. **Alternative hypothesis:** write it in full; note the evidence that would favour it.
7. **"What would change our mind":** a short list for the sponsor.
8. **Evidence log:** per claim, results, source, date, and status (confirmed / killed / reshaped).
9. **Update the governing hypothesis** as needed; communicate changes promptly.

## Judgement calls
- **Hypotheses are tools, not positions.** Teams that "own" a hypothesis defend it. Rotate a devil's advocate.
- **Early answers can anchor.** If the evidence is thin, generate 2-3 competing hypotheses and test their key distinguishing claims first.
- **Good-enough evidence:** set the precision needed for the decision; don't over-research claims that can't flip the answer.
- **Qualitative claims** (e.g. "the team can execute") still need tests: references, track record, pilot results.

## Red flags
- A hypothesis that is a topic or a question.
- Claims that are interesting but not necessary.
- No kill criteria; thresholds set after seeing the data.
- Only confirming evidence sought.
- An alternative hypothesis that is a straw man.

## Variants by context
- **Investment / M&A due diligence:** claims on the market, competitive position, management, synergies, valuation and risks; kill criteria tied to price.
- **Market entry:** desirability (demand), feasibility (licences, partners), viability (unit economics), risk (regulation).
- **Turnaround:** a root-cause hypothesis, then a fix hypothesis with measurable milestones.
- **Product / AI pilot:** a value hypothesis with pilot metrics as tests (see `ai-pilot-design`).

## Output format

```markdown
## Hypothesis Tree: [key question]
**Governing hypothesis:** We should ... because ...

| # | Supporting claim (must be true) | Test / analysis | Data / source | Confirms if | Kills if | Fragility × consequence | Owner / date | Status |
|---|---|---|---|---|---|---|---|---|

**Disconfirmation tests:** ...
**Alternative hypothesis:** ... (evidence that would favour it: ...)
**What would change our mind:** ...
**Evidence log:**
| Date | Claim | Finding | Source | Status change |
|---|---|---|---|---|
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] The governing hypothesis is a full answer with "because".
- [ ] Claims are necessary and together sufficient.
- [ ] Every claim has thresholds and a kill criterion, set in advance.
- [ ] Testing is prioritised by fragility × consequence.
- [ ] Explicit disconfirmation tests and a real alternative hypothesis.
- [ ] An evidence log, and a process for updating the answer.

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
- **Skill-specific:** Framing reflects only the context you provide. Confirm the problem definition with your sponsor and stakeholders.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `issue-tree`: Break a big question into a logical tree of smaller questions you can actually answer.
- `research-plan`: Plan exactly what to find out, from which sources, in what order, before searching anything.
- `red-team-review`: Stress-test a plan, argument or document like a tough, fair critic, before your audience does.
- `pre-mortem`: Imagine the project has failed, explain why, and fix those causes now.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
