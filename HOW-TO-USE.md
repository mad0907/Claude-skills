# How to use the moons2star Consultant's Toolkit

*A plain-English guide for leaders, consultants and anyone new to Claude. Created by Dr. Munmun Das.*

**Website:** https://mad0907.github.io/Claude-skills/. Everything below can be done from there.

---

## First, two words explained

- **Skill:** a written method that teaches Claude to do one task well, like a senior colleague's checklist. Example: *Board Paper* tells Claude what a board expects, in what order, and what to check before handing it to you.
- **Plugin:** a bundle of skills you install in one go. This toolkit's plugin is called **moons2star-consulting** and holds all 83 skills.

You do **not** need GitHub, coding or a terminal for Options 1 and 2.

---

## Option 1: Copy and paste (everyone, 1 minute)

Works on any Claude plan, including free.

1. Go to the website and click **Library** (or pick a role under **Learning paths**).
2. Click a skill, for example **Executive Summary**.
3. Click **Copy & open Claude**. Claude opens in a new tab, and the skill is already copied.
4. In Claude's message box, paste: **Ctrl + V** (Windows) or **⌘ + V** (Mac).
5. Replace the last line, *"[Replace this line with your own situation…]"*, with your real task, and press **Enter**.

**Even easier:** use the **Playground** on the website. Choose a skill, type your situation in plain words, and click **Copy & open Claude**. The full prompt is ready.

---

## Option 2: Add a skill to Claude permanently (paid plans, 2 minutes)

For Claude **Pro, Max, Team or Enterprise**.

1. On the website, open a skill and click **Download skill (.zip)**. **Do not unzip it.**
2. Open Claude → click your name → **Settings → Capabilities**.
3. Make sure **code execution** is switched on (Skills need it).
4. Scroll to **Skills** → **Upload skill** → choose the .zip file → switch it **on**.
5. That's it. Next time you ask for something like *"write a board paper for…"*, Claude uses the skill automatically.

*On Team or Enterprise, your administrator may first need to enable Skills for your organisation. Menu names can change. If yours look different, see Claude's help centre: [Using Skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude).*

---

## Option 3: Install all 83 skills at once

**In the Claude desktop app**
1. Open **Customize** (left sidebar) → **Plugins**.
2. Next to **Personal plugins**, click **+** → **Add marketplace** → add from a repository: `mad0907/Claude-skills`.
3. Click **Browse plugins**, find **moons2star-consulting**, and click **Install**.

**In Claude Code (terminal)**
```text
/plugin marketplace add mad0907/Claude-skills
/plugin install moons2star-consulting@moons2star
```
Then type `/moons2star-consulting:` to see all skills, e.g. `/moons2star-consulting:board-paper`.

---

## Where to start: four learning paths

Do one skill a day on a real problem from your week.

| If you are… | Try these, in order |
|---|---|
| **A board director** | Board Question Bank → Board Paper → Risk Appetite → AI Governance Review → ESG Materiality |
| **A CXO or business leader** | Problem Statement → Strategic Options → Decision Memo → Executive Email → Red-Team Review |
| **A consultant or strategy team member** | Issue Tree → Hypothesis Tree → Market Sizing → SCQA Storyline → Action Titles |
| **An AI transformation leader** | AI Opportunity Scan → AI Use-Case Prioritiser → AI Business Case → AI Pilot Design → Responsible AI Review |

Not sure? Use **Start Here** (`start-here`). Describe your goal and it recommends the right skills in the right order.

---

## Tips for great results

1. **Give context.** Who is it for, what decision, what deadline, what numbers you have.
2. **Paste your material** (notes, tables, drafts), but anonymise anything confidential or personal.
3. **Keep talking.** After the first answer, say *"shorter"*, *"make it board-ready"*, *"challenge this as a sceptical CFO"*, or *"now use the Action Titles skill on this"*.
4. **Chain skills.** For example: Problem Statement → Issue Tree → Ghost Deck → Deck Quality Check.
5. **Check before you sign.** Claude is told not to invent facts and to mark estimates, but you are the final reviewer, especially for numbers, laws and regulations.

---

## Frequently asked questions

**Is it free?** Yes. The skills are free under CC BY 4.0. Credit "Dr. Munmun Das / moons2star" if you share or adapt them.

**Does the website store what I type?** No. The Playground runs entirely in your browser.

**Can I use it with other AI tools?** The copy-and-paste prompts work in most AI assistants. The installable skill format is designed for Claude.

**I found an error or have an idea.** Please open an issue on GitHub or message Dr. Munmun Das on [LinkedIn](https://www.linkedin.com/in/dr-munmun-das-5aa05316/).

---
*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in). Independent project, not affiliated with the maker of Claude or any consulting firm.*
