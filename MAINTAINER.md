# Maintainer guide: publish and update

*For Dr. Munmun Das (repo owner).*

**Public home:** `github.com/mad0907/Claude-skills`. Every link, the marketplace and the website point here.
**Copy for Shihaan Tech:** kept inside the moons2star website repo as `Claude-toolkit/` (see section 2b).

## 1. Create the repository (web)
Logged in as **mad0907** → New repository → **`Claude-skills`** → **Public** → no README → Create. (Already done.)

## 2. First push (Terminal on your Mac)
```bash
cd ~/Documents/Swikriti/Claude_toolkit
git init -b main
git add .
git commit -m "moons2star Consultant's Toolkit v1.2 - 84 in-depth Claude skills"
git remote add origin git@github-mad0907:mad0907/Claude-skills.git
git push -u origin main
```

## 2b. Keep a copy in the moons2star repo (Shihaan Tech GitHub)
```bash
rsync -a --delete --exclude '.git' --exclude '.DS_Store' \
  ~/Documents/Swikriti/Claude_toolkit/ ~/Documents/Swikriti/moons2star/Claude-toolkit/
cd ~/Documents/Swikriti/moons2star
git add Claude-toolkit && git commit -m "Sync Claude toolkit" && git push
```
This is a copy only. The public site and marketplace stay on mad0907.

## 3. Turn on the website (mad0907 repo only)
1. github.com/mad0907/Claude-skills → **Settings → Pages**.
2. Source: **Deploy from a branch** → Branch **main** → Folder **/docs** → **Save**.
3. Live in 1-2 minutes at **https://mad0907.github.io/Claude-skills/**.



*(Optional, later)* For a branded address like `skills.moons2star.in`: in Pages, set the custom domain, then add a DNS CNAME `skills` → `mad0907.github.io`. Afterwards, replace `mad0907.github.io/Claude-skills` with the new address in `README.md`, `HOW-TO-USE.md`, `plugin.json` and `docs/index.html`, then run `python3 tools/build.py` and push.

## 4. Make it a working plugin marketplace
This is already done in the files. A marketplace is simply a **public** repo with `.claude-plugin/marketplace.json` at its root. Once pushed, anyone can:
- **Claude desktop app:** Customize → Plugins → **+** → Add marketplace → `mad0907/Claude-skills` → Browse plugins → **moons2star-consulting** → Install
- **Claude Code:** `/plugin marketplace add mad0907/Claude-skills`, then `/plugin install moons2star-consulting@moons2star`

Test it yourself right after pushing.

**Optional, for wider reach:** submit the plugin to the official Claude plugin directory: https://code.claude.com/docs/en/plugins/publish (see the section on submitting to the official directory). Approval is at the directory owner's discretion; your own marketplace works regardless.

## 5. Updating later
1. Edit `plugins/moons2star-consulting/skills/<skill>/SKILL.md`. If the title, summary or example changed, update `tools/catalog.json` too.
2. Run `python3 tools/build.py` to rebuild the website data and zips.
3. Bump `"version"` in `plugins/moons2star-consulting/.claude-plugin/plugin.json` (e.g. 1.2.0 → 1.3.0) so installed users receive the update.
4. Commit and `git push`, then rerun the rsync in 2b to refresh the moons2star copy.

**New skill:** add a folder `plugins/moons2star-consulting/skills/<new-name>/SKILL.md` (the `name:` line must match the folder; lowercase and hyphens), add it to `tools/catalog.json`, and run the build.

## 6. Notes
- Skills are licensed CC BY 4.0, so reusers must credit "Dr. Munmun Das / moons2star".
- Don't use other firms' names or logos in the toolkit or posts.
- Review the BRSR, ESG and AI-regulation skills when regulators issue new circulars.
