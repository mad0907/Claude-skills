---
name: data-readiness-check
description: "Assesses whether data for a specific AI, GenAI or analytics use case is available, fit for purpose, legally usable and operationally accessible: availability and history, quality dimensions (completeness, accuracy, consistency, timeliness, uniqueness, validity), label and ground-truth quality, representativeness and bias, unstructured-content readiness for retrieval, lineage and ownership, privacy and consent under DPDP and GDPR, security classification and processing location, and production pipelines. Produces a readiness rating, blockers vs improvements, a minimum viable dataset and a remediation plan. Use before committing to any AI build, pilot or analytics project."
---

# Data Readiness Check

*moons2star Consultant's Toolkit · created by Dr. Munmun Das · [moons2star.in](https://moons2star.in)*

**What this gives you:** an honest answer to "Can we actually do this with our data?" before money is spent. Blockers are separated from nice-to-haves, the legal position is flagged, and you get the smallest dataset that lets a pilot start.

## The senior standard
1. **Fitness for purpose, not general quality.** Data good enough for a dashboard may be useless for a model, and the reverse. Judge it against the specific decision and the method.
2. **Labels and outcomes are the hardest part.** Many predictive projects die because the outcome was never recorded consistently: what was fraud, why the customer left, whether the claim was valid.
3. **Representativeness matters for fairness.** If some groups, regions or products are thin in history, the model will be weakest exactly where errors may hurt most.
4. **GenAI has its own readiness.** Retrieval-based assistants need current, de-duplicated, access-controlled documents with clear ownership. A drive full of outdated versions produces confident wrong answers.
5. **Legal usability is part of readiness.** Collected for one purpose ≠ usable for another. Purpose limitation, consent, retention and cross-border rules apply (India DPDP Act and Rules; GDPR where relevant).
6. **Production, not just a one-off extract.** A pilot on a CSV export is fine. Scale needs a reliable pipeline with monitoring.

## Before you start: diagnose
- The use case and the decision it supports, the method (predictive model, GenAI with retrieval, agent, analytics), and the outcome to predict or the task to perform.
- Candidate sources: systems, owners, formats (tables, documents, images, audio, logs).
- Personal or sensitive data involved? Children's data? Data from other jurisdictions?
- Where the AI will run (on-premise, own cloud, vendor service) and where the data would travel.

## Method
1. **List the data needed:** features or inputs, labels or outcomes (for predictive work), context documents (for GenAI), and feedback signals for monitoring.
2. **For each source, assess:**
   - **Availability and access:** exists? API or extract? Refresh frequency? Who approves access?
   - **History and volume:** how far back; how many examples per class or segment (rare events need special attention).
   - **Quality** on six dimensions: completeness (missing %), accuracy (sample verification against the source of truth), consistency (definitions across systems and time), timeliness (latency vs decision need), uniqueness (duplicates), validity (formats and ranges).
   - **Labels:** how outcomes are recorded; consistency across teams and time; a sample re-label to estimate label noise.
   - **Representativeness:** coverage by segment, region, product, channel and protected or proxy groups; known gaps.
   - **Drift risk:** has the process, product or policy changed, making old data misleading?
   - **Lineage and ownership:** a named data owner; documented transformations.
3. **Unstructured / GenAI readiness** (if relevant):
   - document inventory and duplicates or versions;
   - currency (is the latest version identifiable?);
   - access permissions, which must flow through to the assistant;
   - format quality (scans vs text);
   - language mix;
   - sensitive content;
   - an authoritative "golden" set for the top questions.
4. **Legal and ethical usability:**
   - lawful basis or consent for this purpose;
   - notice given to individuals;
   - sensitive attributes (and whether they are needed for fairness testing);
   - retention limits;
   - cross-border transfer;
   - contractual restrictions on third-party data;
   - IP or licence terms.
   Flag for the DPO or counsel.
5. **Security:** classification; whether data may be sent to an external model service; masking, tokenisation or pseudonymisation options; logging.
6. **Rate each dimension** Ready / Partial / Not ready, with evidence. Give an overall rating.
7. **Separate blockers from improvements:**
   - A **blocker** prevents a valid pilot, e.g. no labels, no lawful basis, no access.
   - An **improvement** raises performance or scalability.
8. **Define the minimum viable dataset (MVD):** the smallest scope of sources, period and segments that allows a meaningful pilot. Note what it cannot tell you.
9. **Remediation plan:** actions, owners, effort and dependencies; what to fix in source systems so the problem doesn't recur.

## Judgement calls
- **Don't let perfect data delay learning.** Start a scoped pilot on the MVD while fixing the root causes in parallel, if the blockers are cleared.
- **Sample and verify.** Look at 50-200 real records with a domain expert; it reveals more than profiling statistics.
- **Beware leakage.** Features recorded after the outcome (e.g. "collections status" when predicting default) make pilots look brilliant and production fail.
- **Synthetic data helps testing, rarely ground truth.** Use it for privacy-safe development and edge cases, not as a substitute for real outcomes.
- **Keep sensitive attributes for testing, carefully.** You may need them, under controls, to check fairness even if the model doesn't use them. Get a legal view.

## Red flags
- "We have lots of data" with no one able to say where the outcome field lives.
- Label definitions that changed mid-history without a flag.
- A knowledge base where nobody owns document currency.
- Plans to send customer data to an external AI service without a data-processing assessment.
- Pilot results on data that includes post-outcome information.

## Variants by context
- **Credit, fraud, claims:** label definitions, reject inference (outcomes unknown for declined cases), class imbalance, regulatory explainability.
- **Healthcare:** coding consistency, clinical documentation variability, consent, de-identification, device-regulation implications.
- **Manufacturing and IoT:** sensor calibration, time alignment, missing intervals, maintenance logs as labels.
- **HR:** small samples, historical bias, high sensitivity; usually high risk.
- **GenAI knowledge assistants:** document hygiene, permission inheritance, golden question sets, multilingual content.

## Output format

```markdown
## Data Readiness: [use case]
**Decision / method:** ...  |  **Overall:** Ready / Partial / Not ready - one line

| Source | Needed for | Access | History / volume | Quality (C/A/C/T/U/V) | Labels | Representativeness | Legal / privacy | Owner | Rating |
|---|---|---|---|---|---|---|---|---|---|

**GenAI content readiness (if relevant):** ...
**Blockers:** ...
**Improvements:** ...
**Minimum viable dataset for pilot:** sources, period, segments, and what it cannot tell us
**Remediation plan:** action - owner - effort - date
**For DPO / counsel to confirm:** ...
```

## Reference files (read when needed)
- `references/sources.md`: standards, laws and concepts this skill draws on, and what to verify
- `references/worked-example.md`: a complete, realistic example from start to finish

Load the worked example when the user wants to see what good looks like, and check the sources before citing any standard, law or figure.

## Quality check before you reply
- [ ] Data needs are derived from the specific decision and method.
- [ ] Labels and outcomes are assessed explicitly, including noise.
- [ ] Representativeness and leakage are checked.
- [ ] Legal usability and security are addressed and flagged for review.
- [ ] Blockers are separated from improvements; an MVD is defined.
- [ ] The remediation plan has owners and fixes root causes.

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
- **Skill-specific:** Not legal advice on AI or data-protection law. This skill does not replace independent model validation, security testing (including red-teaming), or a formal data protection impact assessment.

*Instruction to Claude:* when the output will support a board, legal, regulatory, financial or employment decision, end with one short line reminding the user to have it reviewed by the appropriate professional. Don't add longer disclaimers than that.

## Pairs well with
- `ai-use-case-prioritizer`: Score and rank AI use cases on value, feasibility and risk, and pick the first wave.
- `ai-pilot-design`: Design an AI pilot that proves value with clear success criteria, guardrails and a scale decision.
- `responsible-ai-review`: Review an AI system before launch for fairness, transparency, privacy, safety, security and accountability.
- `ai-business-case`: Build an honest business case for an AI use case, including model, data, change and run costs.

---
*Part of the **moons2star Consultant's Toolkit** by Dr. Munmun Das. https://github.com/mad0907/Claude-skills. Licensed CC BY 4.0: free to use and adapt with attribution to "Dr. Munmun Das / moons2star".*
