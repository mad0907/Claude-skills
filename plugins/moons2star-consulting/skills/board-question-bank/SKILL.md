---
name: board-question-bank
description: "Generates the questions an experienced independent or non-executive director should ask on a board paper or topic (strategy, M&A, capex, risk, audit, AI, cyber, ESG, people), ranked by what matters most, with what a good answer looks like, red flags in management's answer, follow-ups, and what to ask for ongoing monitoring. Separates oversight from management. Use to prepare for board or committee meetings, or for management to rehearse for scrutiny."
---

# Board Question Bank

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** the 7-10 questions that actually test a proposal, asked in a way that holds management to account without managing for them, plus how to judge the answers.

## The director's frame

A director's job in the room is **oversight and judgement, not operations**. Good questions:
- **Test the basis of the decision:** the assumptions, the evidence, the alternatives considered.
- **Test the fit:** with strategy, risk appetite, capital and capacity.
- **Test the controls:** who is accountable, how the board will know early, what triggers a stop.
- **Test the stakeholder lens:** customers, employees, regulators, investors, community. Directors' duties extend to them (Companies Act 2013, s.166(2)).
- **Are open, specific and fair:** "What would have to be true for this to fail?", not "Why didn't you think of X?"

Avoid questions that pull the board into execution detail ("which vendor for the cooling towers?") unless the detail carries a material risk.

## Before generating questions: read the situation
1. **What is the board being asked to do?** Approve, discuss, note, or ratify something already done (ratification deserves the hardest questions).
2. **Which of the director's duties is most engaged?** Strategy and value, stewardship of capital, risk oversight, compliance and integrity, people and culture.
3. **Where is the information asymmetry largest?** Technical areas (AI, cyber, actuarial, complex accounting) need questions that force plain-English explanation and independent assurance.
4. **What is the history?** Previous approvals, past overruns, prior audit findings, and promises made last time.
5. **Who is in the room?** If you are the Chair, a committee chair or a new director, the right register differs (see `references/deep-dive.md`).

## Method
1. **Identify the 3-5 critical assumptions or judgements** in the paper: the ones that, if wrong, change the decision.
2. **Generate questions across nine lenses.** Do not output all of them; use the lenses to find the best.
   - Strategic fit and alternatives
   - Assumptions and evidence
   - Financial consequences and capital
   - Risk and appetite
   - Execution capacity and accountability
   - Controls, compliance and integrity (including conflicts)
   - Stakeholders, ethics and reputation
   - Technology, data and AI (where relevant)
   - Monitoring and exit
3. **Rank** by impact on the decision × uncertainty × the board's current information gap. Select the top 7-10.
4. **For each top question, write:**
   - why it matters;
   - what a **good answer** contains (evidence, specificity, ownership);
   - **red flags** in an answer;
   - one **follow-up** for a weak answer.
5. **Add 3-5 "ask for" items:** information, independent assurance, or KPIs the board should require before or after approval.
6. **Phrase for the room:** neutral, one question at a time, starting with "Help me understand…", "What would…", "How will we know…".
7. **Optionally, produce a pre-meeting note** to send the Chair or CEO, so management can come prepared. This is good practice for complex items; it avoids ambush and improves the discussion.

## What separates strong from average question sets
- **Average:** "What are the risks?" **Strong:** "Which single assumption, if it's 20% off, makes this value-destroying, and what evidence gives you confidence it isn't?"
- **Average:** "Is this compliant?" **Strong:** "Which approvals or disclosures does this trigger, who has confirmed that, and what's our exposure if a regulator disagrees with our interpretation?"
- **Average:** "Do we have the capability?" **Strong:** "Who is personally accountable, what else are they carrying, and what did we learn from the last project of this size?"
- **Average:** "Is the AI model accurate?" **Strong:** "On what data was it tested, how does accuracy differ across customer groups, who can override it, and how many overrides happened last month?"

## Judging answers: universal red flags
- **Confidence without evidence:** "We're very comfortable", "the team is experienced".
- **Answers that redefine the question,** or move to a different metric.
- **"The consultants / vendor / model says…"** with no management ownership of the judgement.
- **No mention of what would cause a stop or change of course.**
- **New numbers in the room** that were not in the paper.
- **Assurance claimed but not independent:** for example, the first line marking its own homework.
- **Repeated "we'll come back to you"** on fundamentals. That signals a paper not ready for decision. Consider deferring, or approving subject to conditions.

## Topic packs
Use `references/deep-dive.md` for ready, tested question sets by topic:
- strategy and annual plan;
- M&A / investment;
- capex and projects;
- risk and internal control;
- audit committee (financial reporting, auditors, IFC);
- cyber and resilience;
- AI and data (GenAI, agents, model risk);
- ESG, climate and BRSR;
- people, culture, succession and remuneration;
- crisis and incidents;
- related-party transactions.

## Output format

```markdown
## Board questions: [paper / topic], [meeting]
**Decision asked:** ...  |  **Critical assumptions:** 1. ... 2. ... 3. ...

### Top questions
| # | Question | Why it matters | A good answer includes | Red flags | Follow-up |
|---|---|---|---|---|---|

### Ask for (before approval / ongoing)
- ...

### Optional: note to Chair / CEO before the meeting
...
```

## Reference files (read when needed)
- `references/deep-dive.md`: detailed criteria, checklists, scales and patterns
- `references/sources.md`: standards, laws and texts this skill draws on, with dates and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, the deep dive for detailed criteria, and the sources before citing any law, standard or date.

## Quality check before you reply
- [ ] Questions target the decision's critical assumptions, not generic topics.
- [ ] Each top question has "good answer" criteria and red flags.
- [ ] At least one question each on alternatives, risk appetite fit, accountability and monitoring/exit.
- [ ] The stakeholder or ethical lens is covered where relevant.
- [ ] No operational micromanagement; the tone is open and fair.
- [ ] The "ask for" items include an independent assurance point where information asymmetry is high.

## House rules
- Never invent facts, figures, quotes or sources. Label estimates "(est.)" and list assumptions openly.
- If key inputs are missing, ask up to 3 short questions, or proceed with clearly stated assumptions if the user wants speed.
- Answer first, then support. Plain English; define any jargon.
- Use the user's terminology and jurisdiction; Indian company law and SEBI references by default for Indian users.
- For legal or regulatory specifics, flag them for verification with the Company Secretary or counsel.
- Remind users not to paste board papers containing UPSI or confidential data they are not permitted to share; suggest anonymising.

## Limitations and disclaimer
- **Decision support, not professional advice.** This skill provides a structured method and general information. It is not legal, financial, investment, tax, accounting, regulatory, medical or other professional advice. It does not replace qualified advisers or your organisation's own review and approval processes.
- **AI can be wrong.** Claude can produce confident but incorrect facts, numbers, citations or legal references. Check anything you will rely on, sign or publish.
- **Point-in-time content.** Frameworks, laws, thresholds and dates referenced reflect the author's research as of November 2026 and may since have changed. Confirm against current official sources.
- **Only as good as the inputs.** Claude knows only what you share in the conversation; missing or inaccurate context leads to weaker output.
- **Your data, your responsibility.** Do not share confidential, personal or price-sensitive information unless your organisation's policies and applicable law allow it.
- **No warranty, no adviser relationship.** Provided "as is" under CC BY 4.0, without warranty of any kind. Using it creates no adviser-client relationship with the author, who accepts no liability for decisions made using it.
- **Skill-specific:** Not legal, company-secretarial or audit advice. Regulatory references (Companies Act, SEBI LODR, SS-1, sector regulators) must be confirmed with your Company Secretary, counsel or assurance provider before use.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `board-paper`: write or fix the paper the questions test.
- `ai-governance-review` and `ai-risk-register`: depth for AI items.
- `risk-appetite`: test appetite fit.
- `red-team-review`: a full adversarial critique.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
