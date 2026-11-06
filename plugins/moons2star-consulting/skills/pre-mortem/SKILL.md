---
name: pre-mortem
description: "Runs a prospective-hindsight pre-mortem on a plan, investment, launch or strategy: sets a vivid failure scenario at a future date, generates failure stories independently before discussing them to avoid groupthink, clusters them into root causes and broken assumptions, rates likelihood and severity, designs preventive actions, tripwires with pre-agreed responses, and plan changes, and records who owns what. Use before committing to a plan or investment, when a team seems overconfident, or before irreversible commitments."
---

# Pre-mortem

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** the failure modes your team already suspects but hasn't said, surfaced safely before launch, and converted into concrete changes and early-warning tripwires.

## The senior standard
1. **Assume failure as a fact.** "It is [date]. The project failed badly. Why?" Imagining failure as certain releases more and better explanations than asking "what could go wrong?"
2. **Independent generation first.** Everyone writes failure reasons silently before any discussion, to counter groupthink and seniority bias.
3. **Psychological safety.** The most junior or the most sceptical voices often know the real risks. The leader speaks last.
4. **Root causes and broken assumptions.** Cluster stories into causes; name the assumption each one breaks.
5. **Change the plan, not just the risk log.** The output is plan changes and tripwires, not a longer list.
6. **Tripwires have pre-agreed responses.** Decide now what you'll do if the signal appears, while judgement isn't clouded by sunk cost.

## Before you start: diagnose
- The plan or decision, its success criteria, timeline and key assumptions.
- Participants: a cross-functional mix, including frontline, sceptics, and someone external if possible.
- Format: a 60-90 minute workshop, or an asynchronous written exercise.

## Method
1. **Brief:** the plan in 5 minutes; success criteria; the main assumptions.
2. **Set the scene:** "It is [date, e.g. 18 months from now]. The project has failed clearly: [define failure, e.g. benefits <30% of plan, a major incident, cancelled]."
3. **Silent generation (5-10 min):** each person writes 3-7 reasons, as specific stories.
4. **Round-robin share:** one reason per person per round until exhausted; no debate yet; capture verbatim.
5. **Cluster** into themes (people, process, technology, market, money, politics, external); identify root causes and broken assumptions.
6. **Rate** each cluster on likelihood (1-5) and severity (1-5). Discuss outliers; prioritise the top 5-8.
7. **For each priority cause:**
   - **Preventive action** (what we change now), with an owner and a date.
   - **Tripwire:** an observable early signal with a threshold.
   - **Pre-agreed response** if the tripwire fires (pause, add resources, change scope, stop).
8. **Plan changes:** consolidate into explicit changes to scope, timeline, budget, governance or design.
9. **Close:** "What's the failure we're still not talking about?" Then capture any final items.
10. **Record and follow up:** add to the risk register; review the tripwires at each SteerCo.

## Judgement calls
- **Facilitate neutrally.** If the sponsor facilitates, people self-censor. Use a neutral facilitator.
- **Don't let it become a complaint session.** Steer toward specific, actionable failure mechanisms.
- **A pre-mortem with no plan changes probably failed.** Push for at least 2-3 real changes.
- **Repeat at major gates** with fresh eyes. Failure modes change as the project progresses.

## Red flags
- Generic risks ("lack of resources") without mechanisms.
- The leader opens with their own view.
- No tripwires or pre-agreed responses.
- Outputs filed and never revisited.

## Variants by context
- **Investment decisions:** failure = value destruction; include valuation, integration, market and key-person causes.
- **Technology roll-outs:** data, integration, adoption, cutover and vendor causes.
- **Strategy:** competitor response, customer adoption, capability gaps, execution bandwidth.
- **Events and launches:** logistics, communications, safety, reputational triggers.
- **AI deployments:** model errors, misuse, data leakage, adoption, regulatory and trust failures.

## Output format

```markdown
## Pre-mortem: [plan], failure date [..]
**Failure defined as:** ...  |  **Participants:** roles

| Root cause (cluster) | Example failure stories | Broken assumption | L | S | Preventive action (owner, date) | Tripwire (threshold) | Pre-agreed response |
|---|---|---|---|---|---|---|---|

**Changes to the plan:** ...
**Still not talking about:** ...
**Follow-up:** added to the risk register; tripwires reviewed at [forum]
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Failure defined concretely at a future date.
- [ ] Independent generation before discussion (or simulated, if done solo).
- [ ] Root causes and broken assumptions identified.
- [ ] Top causes have preventive actions, tripwires and pre-agreed responses.
- [ ] Concrete plan changes; a follow-up mechanism.

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
- **Skill-specific:** Plans and estimates are starting points. Validate effort, cost and people impacts with the teams who will deliver them, and follow your HR and legal processes for people changes.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `risk-assessment`: Identify, score and plan responses to the risks of a project, decision or business.
- `red-team-review`: Stress-test a plan, argument or document like a tough, fair critic, before your audience does.
- `hypothesis-tree`: Start from a likely answer, then list exactly what must be true and how you would prove or kill it.
- `implementation-roadmap`: Turn a recommendation into a phased roadmap with workstreams, milestones, dependencies and quick wins.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
