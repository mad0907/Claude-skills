# moons2star Consultant's Toolkit for Claude

**84 ready-to-use Claude skills for consultants, executives and board members**, created by **Dr. Munmun Das** ([moons2star.in](https://moons2star.in)).

### 👉 [Open the website: browse, copy, download and try every skill](https://mad0907.github.io/Claude-skills/)
*No GitHub or technical knowledge needed. Start there.*

---

## What's inside

| | |
|---|---|
| **84 skills in 11 packs** | Problem framing, evidence, market, strategy, numbers, storytelling, delivery, **boardroom and governance**, **AI transformation**, **leader's desk**, and **end-to-end playbooks** |
| **Real methods, not one-line prompts** | Each skill tells Claude when to use it, what to ask you, the step-by-step method, the output template, a quality check, a worked example and pitfalls to avoid |
| **In-depth, every skill** | All 84 skills follow the same structure: the senior standard, a diagnosis step, method, judgement calls, red flags, variants by context, an output template and a quality check. Each comes with a worked example (with its arithmetic checked) and a sources file of the public standards and laws it draws on |
| **Safe by design** | Every skill tells Claude never to invent facts or sources, to label estimates, and to flag legal or regulatory points for verification |
| **Built for leaders** | Indian and global context (₹ / lakh / crore, BRSR, board practice), plain English, answer first |

## Three ways to use it

| Way | Who it's for | How |
|---|---|---|
| **1. Copy and paste** | Everyone, any Claude plan | On the [website](https://mad0907.github.io/Claude-skills/), open a skill → **Copy & open Claude** → paste → Enter |
| **2. Add one skill** | Claude Pro / Max / Team / Enterprise | Download a skill .zip → Claude **Settings → Capabilities → Skills → Upload skill** |
| **3. Install all 84** | Claude desktop app or Claude Code | Desktop: **Customize → Plugins → + → Add marketplace** → `mad0907/Claude-skills` → install **moons2star-consulting**. Claude Code: see below |

```text
/plugin marketplace add mad0907/Claude-skills
/plugin install moons2star-consulting@moons2star
```

Then call any skill by name, e.g. `/moons2star-consulting:issue-tree`, or just describe your task and Claude picks the right skill. New here? Start with `/moons2star-consulting:start-here`.

A plain-English, step-by-step guide is in **[HOW-TO-USE.md](HOW-TO-USE.md)**.

## All 84 skills

### Frame the problem (7)
*Get the question right before anyone builds a slide.*

| Skill | What it gives you |
|---|---|
| [`problem-statement`](plugins/moons2star-consulting/skills/problem-statement/SKILL.md) | Turn a vague ask into one sharp, decision-focused question with scope and success criteria. |
| [`audience-brief`](plugins/moons2star-consulting/skills/audience-brief/SKILL.md) | Profile who you are persuading: what they care about, what they already believe, and what would change their mind. |
| [`issue-tree`](plugins/moons2star-consulting/skills/issue-tree/SKILL.md) | Break a big question into a logical tree of smaller questions you can actually answer. |
| [`hypothesis-tree`](plugins/moons2star-consulting/skills/hypothesis-tree/SKILL.md) | Start from a likely answer, then list exactly what must be true and how you would prove or kill it. |
| [`mece-check`](plugins/moons2star-consulting/skills/mece-check/SKILL.md) | Audit any list, structure or storyline for overlaps and gaps, then fix it. |
| [`stakeholder-map`](plugins/moons2star-consulting/skills/stakeholder-map/SKILL.md) | Map who matters, where they stand, and the plan to move each of them. |
| [`engagement-workplan`](plugins/moons2star-consulting/skills/engagement-workplan/SKILL.md) | Turn the issue tree into a week-by-week plan: analyses, owners, data, meetings and deliverables. |

### Gather evidence (7)
*Find, test and combine facts you can stand behind.*

| Skill | What it gives you |
|---|---|
| [`research-plan`](plugins/moons2star-consulting/skills/research-plan/SKILL.md) | Plan exactly what to find out, from which sources, in what order, before searching anything. |
| [`source-validation`](plugins/moons2star-consulting/skills/source-validation/SKILL.md) | Grade every source and claim for reliability so you never put a weak number in front of a board. |
| [`research-synthesis`](plugins/moons2star-consulting/skills/research-synthesis/SKILL.md) | Turn piles of notes, reports and links into a few clear findings with evidence and implications. |
| [`interview-guide`](plugins/moons2star-consulting/skills/interview-guide/SKILL.md) | Write a crisp guide for expert, customer or employee interviews that gets real answers, not opinions. |
| [`interview-synthesis`](plugins/moons2star-consulting/skills/interview-synthesis/SKILL.md) | Turn many interview notes into patterns, quotes and numbers, with how strongly each is supported. |
| [`survey-design`](plugins/moons2star-consulting/skills/survey-design/SKILL.md) | Design a short, unbiased survey that produces numbers you can actually use. |
| [`survey-analysis`](plugins/moons2star-consulting/skills/survey-analysis/SKILL.md) | Turn survey results into a few significant, decision-relevant insights with honest caveats. |

### Understand the market (8)
*Size it, segment it, and see who wins and why.*

| Skill | What it gives you |
|---|---|
| [`market-sizing`](plugins/moons2star-consulting/skills/market-sizing/SKILL.md) | Size a market top-down and bottom-up, reconcile the two, and show every assumption. |
| [`customer-segmentation`](plugins/moons2star-consulting/skills/customer-segmentation/SKILL.md) | Group customers by needs and value so you can focus, price and serve them differently. |
| [`competitor-benchmark`](plugins/moons2star-consulting/skills/competitor-benchmark/SKILL.md) | Compare competitors on the factors that matter to customers and economics, and spot where to win. |
| [`five-forces`](plugins/moons2star-consulting/skills/five-forces/SKILL.md) | Judge how attractive an industry is and what drives profits, using the five forces framework with evidence. |
| [`pestel-scan`](plugins/moons2star-consulting/skills/pestel-scan/SKILL.md) | Scan political, economic, social, technological, environmental and legal shifts, and rank what really matters. |
| [`value-chain`](plugins/moons2star-consulting/skills/value-chain/SKILL.md) | Map where value and cost sit across the chain, and find where to compete, cut or integrate. |
| [`jobs-to-be-done`](plugins/moons2star-consulting/skills/jobs-to-be-done/SKILL.md) | Understand the real 'job' customers hire you for, and the outcomes they measure you on. |
| [`pricing-strategy`](plugins/moons2star-consulting/skills/pricing-strategy/SKILL.md) | Set or reset prices using value, cost and competition, with tiers and a test plan. |

### Shape the strategy (7)
*Turn analysis into real choices with clear trade-offs.*

| Skill | What it gives you |
|---|---|
| [`swot-tows`](plugins/moons2star-consulting/skills/swot-tows/SKILL.md) | Do SWOT properly: evidence-based factors, then turn them into concrete strategic moves (TOWS). |
| [`vrio-analysis`](plugins/moons2star-consulting/skills/vrio-analysis/SKILL.md) | Test which resources and capabilities give a lasting advantage, and which are just table stakes. |
| [`growth-options`](plugins/moons2star-consulting/skills/growth-options/SKILL.md) | Lay out all the ways to grow (core, adjacent, new) and size and rank them. |
| [`strategic-options`](plugins/moons2star-consulting/skills/strategic-options/SKILL.md) | Compare 2-5 real options against agreed criteria, with trade-offs made explicit, and recommend one. |
| [`portfolio-matrix`](plugins/moons2star-consulting/skills/portfolio-matrix/SKILL.md) | Plot business units or products by attractiveness and strength, and decide invest, hold, fix or exit. |
| [`scenario-planning`](plugins/moons2star-consulting/skills/scenario-planning/SKILL.md) | Build 3-4 plausible futures from key uncertainties, and find moves that work across them. |
| [`build-buy-partner`](plugins/moons2star-consulting/skills/build-buy-partner/SKILL.md) | Decide whether to build a capability, acquire it, or partner, with a clear rationale. |

### Run the numbers (8)
*Business cases, models and metrics a CFO will trust.*

| Skill | What it gives you |
|---|---|
| [`business-case`](plugins/moons2star-consulting/skills/business-case/SKILL.md) | Build a decision-ready business case: options, costs, benefits, NPV, risks and the ask. |
| [`financial-model-spec`](plugins/moons2star-consulting/skills/financial-model-spec/SKILL.md) | Design a clean, auditable financial model: structure, drivers, sheets and checks, ready to build. |
| [`unit-economics`](plugins/moons2star-consulting/skills/unit-economics/SKILL.md) | Work out whether each customer, order or unit makes money, and which levers fix it. |
| [`sensitivity-analysis`](plugins/moons2star-consulting/skills/sensitivity-analysis/SKILL.md) | Find which assumptions really move the answer, and what has to be true for the decision to flip. |
| [`break-even-payback`](plugins/moons2star-consulting/skills/break-even-payback/SKILL.md) | Quickly find the break-even volume, payback period and margin of safety for a decision. |
| [`kpi-driver-tree`](plugins/moons2star-consulting/skills/kpi-driver-tree/SKILL.md) | Break a top metric into the drivers people can act on, with owners and targets. |
| [`kpi-dashboard`](plugins/moons2star-consulting/skills/kpi-dashboard/SKILL.md) | Design a one-page dashboard leaders will actually use: right metrics, targets, layout and alerts. |
| [`cost-takeout`](plugins/moons2star-consulting/skills/cost-takeout/SKILL.md) | Build a structured cost-reduction plan: baseline, levers, sizing, phasing and risks to service. |

### Tell the story (12)
*Storylines, slides and memos that get to a decision.*

| Skill | What it gives you |
|---|---|
| [`scqa-storyline`](plugins/moons2star-consulting/skills/scqa-storyline/SKILL.md) | Build the storyline every executive document needs: Situation, Complication, Question, Answer. |
| [`pyramid-structure`](plugins/moons2star-consulting/skills/pyramid-structure/SKILL.md) | Structure any argument top-down: answer first, grouped support, evidence below. |
| [`executive-summary`](plugins/moons2star-consulting/skills/executive-summary/SKILL.md) | Write a one-page executive summary a busy leader can act on in two minutes. |
| [`insight-synthesis`](plugins/moons2star-consulting/skills/insight-synthesis/SKILL.md) | Turn analysis outputs into true insights: what it means, why it matters, what to do. |
| [`action-titles`](plugins/moons2star-consulting/skills/action-titles/SKILL.md) | Rewrite slide titles so each one states the takeaway, and the titles alone tell the story. |
| [`ghost-deck`](plugins/moons2star-consulting/skills/ghost-deck/SKILL.md) | Draft the whole deck as titles and sketched exhibits before doing the analysis, so the work stays focused. |
| [`chart-selection`](plugins/moons2star-consulting/skills/chart-selection/SKILL.md) | Pick the right chart for the message, and avoid charts that confuse or mislead. |
| [`exhibit-builder`](plugins/moons2star-consulting/skills/exhibit-builder/SKILL.md) | Design a complete, board-ready exhibit: title, chart, callouts, source, and the code to draw it. |
| [`slide-copy-editor`](plugins/moons2star-consulting/skills/slide-copy-editor/SKILL.md) | Tighten slide text: fewer words, clearer claims, consistent style, no jargon. |
| [`deck-quality-check`](plugins/moons2star-consulting/skills/deck-quality-check/SKILL.md) | A senior-partner style review of a deck: storyline, logic, evidence, numbers and visual consistency. |
| [`speaker-notes`](plugins/moons2star-consulting/skills/speaker-notes/SKILL.md) | Write natural speaker notes and a timing plan, with likely questions and crisp answers. |
| [`decision-memo`](plugins/moons2star-consulting/skills/decision-memo/SKILL.md) | Write a crisp memo that frames a decision, the options, the recommendation and what is being asked. |

### Deliver and change (8)
*Plans, roles, risks and the people side of change.*

| Skill | What it gives you |
|---|---|
| [`implementation-roadmap`](plugins/moons2star-consulting/skills/implementation-roadmap/SKILL.md) | Turn a recommendation into a phased roadmap with workstreams, milestones, dependencies and quick wins. |
| [`operating-model`](plugins/moons2star-consulting/skills/operating-model/SKILL.md) | Design how the organisation will work: structure, processes, people, technology, governance and locations. |
| [`raci-builder`](plugins/moons2star-consulting/skills/raci-builder/SKILL.md) | Clarify who is Responsible, Accountable, Consulted and Informed for each activity or decision. |
| [`change-plan`](plugins/moons2star-consulting/skills/change-plan/SKILL.md) | Plan the people side of change: impact by group, messages, training, resistance and adoption measures. |
| [`risk-assessment`](plugins/moons2star-consulting/skills/risk-assessment/SKILL.md) | Identify, score and plan responses to the risks of a project, decision or business. |
| [`pre-mortem`](plugins/moons2star-consulting/skills/pre-mortem/SKILL.md) | Imagine the project has failed, explain why, and fix those causes now. |
| [`steerco-update`](plugins/moons2star-consulting/skills/steerco-update/SKILL.md) | Write a crisp steering committee update: status, decisions needed, risks, and next steps. |
| [`benefits-tracker`](plugins/moons2star-consulting/skills/benefits-tracker/SKILL.md) | Make sure promised benefits are defined, owned, measured and actually delivered. |

### Boardroom and governance (8)
*Board papers, oversight questions, risk, ESG and AI governance.*

| Skill | What it gives you |
|---|---|
| [`board-paper`](plugins/moons2star-consulting/skills/board-paper/SKILL.md) | Write a board paper directors can read in 10 minutes: purpose, recommendation, analysis, risks and the resolution. |
| [`board-question-bank`](plugins/moons2star-consulting/skills/board-question-bank/SKILL.md) | Generate the sharp, fair questions a non-executive director should ask on any paper or topic. |
| [`ai-governance-review`](plugins/moons2star-consulting/skills/ai-governance-review/SKILL.md) | Assess how well an organisation governs AI: policy, roles, inventory, risk, controls, and board oversight. |
| [`ai-risk-register`](plugins/moons2star-consulting/skills/ai-risk-register/SKILL.md) | Build a risk register for AI use cases: classify, score, control and assign owners. |
| [`risk-appetite`](plugins/moons2star-consulting/skills/risk-appetite/SKILL.md) | Draft a board risk appetite statement with qualitative positions and measurable limits. |
| [`integrity-check`](plugins/moons2star-consulting/skills/integrity-check/SKILL.md) | Screen a plan, proposal or engagement for bribery, money-laundering, tax, health-product, competition and other legal and ethical red lines before it goes out. |
| [`esg-materiality`](plugins/moons2star-consulting/skills/esg-materiality/SKILL.md) | Identify and prioritise the sustainability topics that matter most, using double materiality. |
| [`brsr-readiness`](plugins/moons2star-consulting/skills/brsr-readiness/SKILL.md) | Check readiness for India's Business Responsibility and Sustainability Report, including data gaps and assurance. |

### AI transformation (7)
*Find, prove and scale AI use cases responsibly.*

| Skill | What it gives you |
|---|---|
| [`ai-opportunity-scan`](plugins/moons2star-consulting/skills/ai-opportunity-scan/SKILL.md) | Find where AI can create real value in a function or business, grounded in processes and pain points. |
| [`ai-use-case-prioritizer`](plugins/moons2star-consulting/skills/ai-use-case-prioritizer/SKILL.md) | Score and rank AI use cases on value, feasibility and risk, and pick the first wave. |
| [`ai-business-case`](plugins/moons2star-consulting/skills/ai-business-case/SKILL.md) | Build an honest business case for an AI use case, including model, data, change and run costs. |
| [`data-readiness-check`](plugins/moons2star-consulting/skills/data-readiness-check/SKILL.md) | Check whether the data for an AI or analytics use case is available, good enough, legal to use and accessible. |
| [`ai-pilot-design`](plugins/moons2star-consulting/skills/ai-pilot-design/SKILL.md) | Design an AI pilot that proves value with clear success criteria, guardrails and a scale decision. |
| [`agentic-workflow-design`](plugins/moons2star-consulting/skills/agentic-workflow-design/SKILL.md) | Redesign a process for AI agents working with people: steps, tools, handoffs, controls and metrics. |
| [`responsible-ai-review`](plugins/moons2star-consulting/skills/responsible-ai-review/SKILL.md) | Review an AI system before launch for fairness, transparency, privacy, safety, security and accountability. |

### Leader's desk (6)
*Everyday tools for meetings, negotiations and messages.*

| Skill | What it gives you |
|---|---|
| [`meeting-brief`](plugins/moons2star-consulting/skills/meeting-brief/SKILL.md) | A one-page brief before any important meeting: objective, people, positions, your asks and your lines. |
| [`red-team-review`](plugins/moons2star-consulting/skills/red-team-review/SKILL.md) | Stress-test a plan, argument or document like a tough, fair critic, before your audience does. |
| [`negotiation-prep`](plugins/moons2star-consulting/skills/negotiation-prep/SKILL.md) | Prepare a negotiation: interests, BATNA, ZOPA, trade-offs, opening position and concession plan. |
| [`first-90-days`](plugins/moons2star-consulting/skills/first-90-days/SKILL.md) | Plan a new leadership role: diagnose, build relationships, secure early wins, and set direction. |
| [`executive-email`](plugins/moons2star-consulting/skills/executive-email/SKILL.md) | Write a short email or message that gets a senior person to read, decide and reply. |
| [`workshop-design`](plugins/moons2star-consulting/skills/workshop-design/SKILL.md) | Design a workshop or offsite that produces decisions, not just discussion. |

### Playbooks (6)
*End-to-end flows that chain several skills together.*

| Skill | What it gives you |
|---|---|
| [`start-here`](plugins/moons2star-consulting/skills/start-here/SKILL.md) | Not sure which skill to use? Describe your situation and get the right skills in the right order. |
| [`playbook-strategy-review`](plugins/moons2star-consulting/skills/playbook-strategy-review/SKILL.md) | End-to-end strategy review: from the question to a recommended strategy and roadmap, in guided stages. |
| [`playbook-board-pack`](plugins/moons2star-consulting/skills/playbook-board-pack/SKILL.md) | Prepare a complete board submission: paper, summary, risks, resolution, and rehearsal of directors' questions. |
| [`playbook-investment-case`](plugins/moons2star-consulting/skills/playbook-investment-case/SKILL.md) | From idea to approval-ready investment case: sizing, economics, model, sensitivity, risks and the ask. |
| [`playbook-ai-roadmap`](plugins/moons2star-consulting/skills/playbook-ai-roadmap/SKILL.md) | Build an AI roadmap for a business or function: opportunities, priorities, cases, governance and adoption. |
| [`playbook-market-entry`](plugins/moons2star-consulting/skills/playbook-market-entry/SKILL.md) | Decide whether, where and how to enter a new market, from attractiveness to entry mode and launch plan. |

## Limitations and disclaimer

These skills are **decision support, not professional advice**. They give Claude a structured method and general information; they are not legal, financial, investment, tax, accounting, regulatory or medical advice, and they don't replace qualified advisers or your organisation's review and approval processes.

- **AI can be wrong.** Verify facts, numbers, citations and legal references before relying on them.
- **Point in time.** Laws, standards and dates referenced (e.g. SEBI/BRSR, EU AI Act, DPDP Rules) reflect research as of November 2026 and may have changed.
- **Inputs matter.** Output quality depends on the context you provide.
- **Data care.** Don't share confidential, personal or price-sensitive data unless your policies and the law allow it.
- **As is.** Provided under CC BY 4.0 without warranty; no adviser-client relationship is created, and the author accepts no liability for decisions made using it.

Every skill carries this disclaimer plus a skill-specific limitation.

## Repository layout

```text
.claude-plugin/marketplace.json        ← lets people add this repo as a plugin marketplace
plugins/moons2star-consulting/         ← the plugin (84 skills, each a folder with SKILL.md)
docs/                                  ← the website (GitHub Pages) + downloadable .zip files
tools/build.py, tools/catalog.json     ← rebuilds website data and zips after you edit a skill
HOW-TO-USE.md                          ← guide for non-technical users
MAINTAINER.md                          ← how to publish and update (for the owner)
```

## Contributing

Suggestions are welcome. Open an issue, or propose an improvement to a skill's `SKILL.md`.

## Licence and credit

Skills and written content: **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**. You can use, adapt and share them, including commercially, with credit to **"Dr. Munmun Das / moons2star"** and a link to this repository. Website code: MIT. See [LICENSE](LICENSE).

*Independent project; not affiliated with or endorsed by the maker of Claude or any consulting firm. Claude is a trademark of its respective owner. The frameworks referenced (issue trees, Five Forces, SCQA and others) are widely taught management tools.*

---
**moons2star** · Dr. Munmun Das · [moons2star.in](https://moons2star.in) · [LinkedIn](https://www.linkedin.com/in/dr-munmun-das-5aa05316/)
