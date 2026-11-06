/* moons2star Consultant's Toolkit - site logic (no dependencies) */
(function () {
  "use strict";
  var T = window.TOOLKIT || { packs: [], skills: [] };
  var PLUGIN = T.plugin || "moons2star-consulting";
  var CLAUDE_URL = "https://claude.ai/new";
  var NEW_PACKS = { board: 1, ai: 1, leader: 1, playbooks: 1 };
  var byId = {}; T.skills.forEach(function (s) { byId[s.id] = s; });
  var packById = {}; T.packs.forEach(function (p) { packById[p.id] = p; });

  var PATHS = [
    { title: "Board director", who: "Independent and non-executive directors, committee chairs.",
      ids: ["board-question-bank", "board-paper", "risk-appetite", "ai-governance-review", "esg-materiality"] },
    { title: "CXO and business leader", who: "Executives who need to decide, persuade and move fast.",
      ids: ["problem-statement", "strategic-options", "decision-memo", "executive-email", "red-team-review"] },
    { title: "Consultant and strategy team", who: "Anyone who structures problems and builds decks.",
      ids: ["issue-tree", "hypothesis-tree", "market-sizing", "scqa-storyline", "action-titles"] },
    { title: "AI transformation leader", who: "CDOs, CAIOs, GCC heads and AI programme owners.",
      ids: ["ai-opportunity-scan", "ai-use-case-prioritizer", "ai-business-case", "ai-pilot-design", "responsible-ai-review"] }
  ];

  function $(s, el) { return (el || document).querySelector(s); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  /* ---------- clipboard + toast ---------- */
  var toastTimer;
  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove("show"); }, 3200);
  }
  function copy(text, msg) {
    function fallback() {
      var ta = document.createElement("textarea"); ta.value = text; ta.setAttribute("readonly", "");
      ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).catch(fallback);
    } else { fallback(); }
    toast(msg || "Copied to clipboard");
  }
  function copyAndOpen(text) {
    copy(text, "Prompt copied. In Claude, paste it with Ctrl+V (⌘+V on Mac) and press Enter.");
    window.open(CLAUDE_URL, "_blank", "noopener");
  }

  /* ---------- prompts ---------- */
  function fullPrompt(s, req, audience, material, length) {
    var p = "Please act as a senior consultant and follow the skill below, from the moons2star Consultant's Toolkit by Dr. Munmun Das.\n\n" +
      "<skill name=\"" + s.title + "\">\n" + s.body + refsText(s) + "\n</skill>\n\n## My request\n" + (req || s.tryp);
    if (audience) p += "\n\nAudience: " + audience;
    if (material) p += "\n\nWhat I already have:\n\"\"\"\n" + material + "\n\"\"\"";
    if (length) p += "\n\n" + length;
    p += "\n\nIf anything essential is missing, ask me up to 3 short questions first; otherwise proceed and state your assumptions.";
    return p;
  }
  function refsText(s) {
    if (!s.refs || !s.refs.length) return "";
    return s.refs.map(function (r) { return "\n\n---\n# Reference file: references/" + r.name + "\n" + r.text; }).join("");
  }
  function shortPrompt(s, req, audience, material, length) {
    var p = "Use the \"" + s.title + "\" skill (/" + PLUGIN + ":" + s.id + ") from the moons2star Consultant's Toolkit.\n\n" + (req || s.tryp);
    if (audience) p += "\n\nAudience: " + audience;
    if (material) p += "\n\nWhat I already have:\n\"\"\"\n" + material + "\n\"\"\"";
    if (length) p += "\n\n" + length;
    return p;
  }

  /* ---------- tiny markdown renderer (for skill bodies we control) ---------- */
  function inline(t) {
    t = esc(t);
    t = t.replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
      .replace(/(^|[^*])\*([^*]+)\*/g, "$1<i>$2</i>")
      .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    return t;
  }
  function md(src) {
    var lines = src.split("\n"), out = [], i = 0;
    while (i < lines.length) {
      var l = lines[i];
      if (/^```/.test(l)) {
        var buf = []; i++;
        while (i < lines.length && !/^```/.test(lines[i])) { buf.push(lines[i]); i++; }
        out.push("<pre><code>" + esc(buf.join("\n")) + "</code></pre>"); i++; continue;
      }
      var h = l.match(/^(#{1,4})\s+(.*)/);
      if (h) { out.push("<h" + h[1].length + ">" + inline(h[2]) + "</h" + h[1].length + ">"); i++; continue; }
      if (/^---\s*$/.test(l)) { out.push("<hr/>"); i++; continue; }
      if (/^\|/.test(l)) {
        var rows = [];
        while (i < lines.length && /^\|/.test(lines[i])) { rows.push(lines[i]); i++; }
        var html = "<table>";
        rows.forEach(function (r, ri) {
          if (/^\|[\s|:-]+\|?\s*$/.test(r)) return;
          var cells = r.replace(/^\||\|\s*$/g, "").split("|");
          var tag = ri === 0 ? "th" : "td";
          html += "<tr>" + cells.map(function (c) { return "<" + tag + ">" + inline(c.trim()) + "</" + tag + ">"; }).join("") + "</tr>";
        });
        out.push(html + "</table>"); continue;
      }
      if (/^\s*(- |\d+\. )/.test(l)) {
        var ordered = /^\s*\d+\. /.test(l), items = [];
        while (i < lines.length && /^\s*(- |\d+\. )/.test(lines[i])) {
          items.push(lines[i].replace(/^\s*(- (\[ \] )?|\d+\. )/, "")); i++;
        }
        var tg = ordered ? "ol" : "ul";
        out.push("<" + tg + ">" + items.map(function (x) { return "<li>" + inline(x) + "</li>"; }).join("") + "</" + tg + ">"); continue;
      }
      if (/^>\s?/.test(l)) { out.push("<p><i>" + inline(l.replace(/^>\s?/, "")) + "</i></p>"); i++; continue; }
      if (l.trim() === "") { i++; continue; }
      var para = [];
      while (i < lines.length && lines[i].trim() !== "" && !/^(#|```|\||- |\d+\. |---)/.test(lines[i])) { para.push(lines[i]); i++; }
      out.push("<p>" + inline(para.join(" ")) + "</p>");
    }
    return out.join("\n");
  }

  /* ---------- library ---------- */
  var state = { pack: "all", q: "" };
  function renderChips() {
    var html = '<button class="chip" role="tab" data-pack="all" aria-selected="true">All<span class="n">' + T.skills.length + "</span></button>";
    T.packs.forEach(function (p) {
      var n = T.skills.filter(function (s) { return s.pack === p.id; }).length;
      html += '<button class="chip" role="tab" data-pack="' + p.id + '" aria-selected="false">' + esc(p.name) +
        '<span class="n">' + n + "</span>" + (NEW_PACKS[p.id] ? '<span class="new-badge">NEW</span>' : "") + "</button>";
    });
    $("#chips").innerHTML = html;
    $("#chips").addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      state.pack = b.dataset.pack;
      [].forEach.call(document.querySelectorAll(".chip"), function (c) { c.setAttribute("aria-selected", c === b ? "true" : "false"); });
      renderGrid();
    });
  }
  function matches(s) {
    if (state.pack !== "all" && s.pack !== state.pack) return false;
    if (!state.q) return true;
    var hay = (s.title + " " + s.summary + " " + s.id + " " + (packById[s.pack] || {}).name + " " + s.when.join(" ")).toLowerCase();
    return state.q.toLowerCase().split(/\s+/).every(function (w) { return hay.indexOf(w) >= 0; });
  }
  function card(s) {
    return '<button class="card" data-id="' + s.id + '"><div class="card-top"><span class="tag">' + esc(packById[s.pack].name) +
      '</span><span class="time">' + (s.deep ? '<span class="deep-badge">In-depth</span> ' : "") + esc(s.time) + "</span></div><h4>" + esc(s.title) + "</h4><p>" + esc(s.summary) +
      '</p><span class="more">Open skill →</span></button>';
  }
  function renderGrid() {
    var list = T.skills.filter(matches), html = "";
    $("#count").textContent = list.length + " skill" + (list.length === 1 ? "" : "s") + (state.q ? ' matching "' + state.q + '"' : "");
    if (!list.length) { $("#grid").innerHTML = '<p class="empty">No skills match. Try "board", "pricing", "AI" or "risk".</p>'; return; }
    if (state.pack === "all" && !state.q) {
      T.packs.forEach(function (p) {
        var ps = list.filter(function (s) { return s.pack === p.id; }); if (!ps.length) return;
        html += '<div class="pack-head"><h3>' + esc(p.name) + (NEW_PACKS[p.id] ? ' <span class="new-badge">NEW</span>' : "") +
          "</h3><span>" + esc(p.tagline) + "</span></div>" + ps.map(card).join("");
      });
    } else { html = list.map(card).join(""); }
    $("#grid").innerHTML = html;
  }

  /* ---------- drawer ---------- */
  var lastFocus = null;
  function openSkill(id, push) {
    var s = byId[id]; if (!s) return;
    lastFocus = document.activeElement;
    $("#d-pack").textContent = packById[s.pack].name;
    $("#d-title").textContent = s.title;
    var pairs = s.pairs.filter(function (p) { return byId[p]; }).map(function (p) {
      return '<li><a href="#skill/' + p + '">' + esc(byId[p].title) + "</a>: " + esc(byId[p].summary) + "</li>";
    }).join("");
    $("#d-body").innerHTML =
      '<p class="d-summary">' + esc(s.summary) + "</p>" +
      '<div class="d-actions">' +
        '<button class="btn btn-accent" data-act="open">Copy &amp; open Claude</button>' +
        '<button class="btn btn-ghost" data-act="copy">Copy skill as prompt</button>' +
        '<a class="btn btn-ghost" href="downloads/skills/' + s.id + '.zip" download>Download skill (.zip)</a>' +
        '<button class="btn btn-ghost" data-act="play">Use in Playground</button>' +
      "</div>" +
      '<div class="d-block d-try"><h5>Try this example</h5><p>“' + esc(s.tryp) + '”</p>' +
        '<button class="linkbtn" data-act="example">Copy this example with the skill and open Claude →</button></div>' +
      '<div class="d-block"><h5>Use it when</h5><ul>' + s.when.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="d-block"><h5>What Claude will ask you for</h5><ul>' + s.inputs.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="d-block"><h5>Works well with</h5><ul>' + pairs + "</ul></div>" +
      '<p class="cmd">Installed the plugin? Type <code data-act="cmd">/' + PLUGIN + ":" + s.id + "</code> in Claude (click to copy).</p>" +
      (s.deep ? '<div class="d-block"><h5>In-depth skill: includes reference files</h5><ul>' + s.refs.map(function (r) { return "<li><code>references/" + esc(r.name) + "</code></li>"; }).join("") + "</ul></div>" : "") +
      '<details class="full"><summary>See the full instructions Claude follows</summary><div class="md">' + md(s.body) +
        (s.refs || []).map(function (r) { return "<hr/><p><b>Reference file: references/" + esc(r.name) + "</b></p>" + md(r.text); }).join("") + "</div></details>" +
      '<p class="d-disclaimer">Decision support, not professional advice. AI output can be wrong, and laws and standards change, so verify before relying on it. See <a href="#faq">Limitations</a>.</p>';
    $("#d-body").onclick = function (e) {
      var a = e.target.closest("[data-act]"); if (!a) return;
      var act = a.dataset.act;
      var mine = "[Replace this line with your own situation, question or task]";
      if (act === "open") copyAndOpen(fullPrompt(s, mine));
      if (act === "example") copyAndOpen(fullPrompt(s));
      if (act === "copy") copy(fullPrompt(s, mine), "Skill copied. Paste it into Claude and replace the last line with your situation.");
      if (act === "cmd") copy("/" + PLUGIN + ":" + s.id + " ", "Command copied");
      if (act === "play") { closeDrawer(); setPlayground(s.id); location.hash = "playground"; }
    };
    $("#backdrop").hidden = false;
    var d = $("#drawer"); d.classList.add("open"); d.setAttribute("aria-hidden", "false");
    $("#d-body").scrollTop = 0;
    document.body.style.overflow = "hidden";
    $("#d-close").focus();
    if (push !== false && location.hash !== "#skill/" + id) history.pushState(null, "", "#skill/" + id);
  }
  function closeDrawer() {
    var d = $("#drawer"); if (!d.classList.contains("open")) return;
    d.classList.remove("open"); d.setAttribute("aria-hidden", "true");
    $("#backdrop").hidden = true; document.body.style.overflow = "";
    if (/^#skill\//.test(location.hash)) history.replaceState(null, "", "#library");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* ---------- paths ---------- */
  function renderPaths() {
    $("#paths-grid").innerHTML = PATHS.map(function (p, i) {
      return '<article class="path"><span class="tag">Path ' + (i + 1) + "</span><h3>" + esc(p.title) + "</h3><p>" + esc(p.who) + "</p><ol>" +
        p.ids.map(function (id) { return '<li><button data-id="' + id + '"><span>' + esc(byId[id].title) + "</span></button></li>"; }).join("") +
        '</ol><button class="btn btn-ghost btn-sm" data-start="' + p.ids[0] + '">Start with step 1</button></article>';
    }).join("");
    $("#paths-grid").addEventListener("click", function (e) {
      var b = e.target.closest("[data-id],[data-start]"); if (!b) return;
      openSkill(b.dataset.id || b.dataset.start);
    });
  }

  /* ---------- playground ---------- */
  function setPlayground(id) { $("#pg-skill").value = id; updateHint(); buildPrompt(); }
  function updateHint() { var s = byId[$("#pg-skill").value]; $("#pg-skill-hint").textContent = s ? s.summary : ""; }
  function buildPrompt() {
    var s = byId[$("#pg-skill").value]; if (!s) return;
    var args = [s, $("#pg-situation").value.trim(), $("#pg-audience").value.trim(), $("#pg-material").value.trim(), $("#pg-length").value];
    var p = $("#pg-mode").value === "short" ? shortPrompt.apply(null, args) : fullPrompt.apply(null, args);
    $("#pg-prompt").value = p;
    $("#pg-len").textContent = p.length.toLocaleString() + " characters";
  }
  function initPlayground() {
    var html = "";
    T.packs.forEach(function (p) {
      html += '<optgroup label="' + esc(p.name) + '">' + T.skills.filter(function (s) { return s.pack === p.id; })
        .map(function (s) { return '<option value="' + s.id + '">' + esc(s.title) + "</option>"; }).join("") + "</optgroup>";
    });
    $("#pg-skill").innerHTML = html;
    $("#pg-skill").value = "problem-statement";
    ["#pg-skill", "#pg-situation", "#pg-audience", "#pg-material", "#pg-length", "#pg-mode"].forEach(function (sel) {
      $(sel).addEventListener("input", function () { if (sel === "#pg-skill") updateHint(); buildPrompt(); });
    });
    $("#pg-example").addEventListener("click", function () { $("#pg-situation").value = byId[$("#pg-skill").value].tryp; buildPrompt(); });
    $("#pg-copy").addEventListener("click", function () { copy($("#pg-prompt").value); });
    $("#pg-open").addEventListener("click", function () { copyAndOpen($("#pg-prompt").value); });
    updateHint(); buildPrompt();
  }

  /* ---------- routing + init ---------- */
  function route() {
    var m = location.hash.match(/^#skill\/([a-z0-9-]+)/);
    if (m && byId[m[1]]) openSkill(m[1], false); else closeDrawer();
  }
  function init() {
    $("#stat-skills").textContent = T.skills.length;
    $("#stat-packs").textContent = T.packs.length;
    renderChips(); renderGrid(); renderPaths(); initPlayground();
    $("#grid").addEventListener("click", function (e) { var c = e.target.closest(".card"); if (c) openSkill(c.dataset.id); });
    var qt; $("#q").addEventListener("input", function (e) { clearTimeout(qt); qt = setTimeout(function () { state.q = e.target.value.trim(); renderGrid(); }, 120); });
    $("#d-close").addEventListener("click", closeDrawer);
    $("#backdrop").addEventListener("click", closeDrawer);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeDrawer(); });
    document.addEventListener("click", function (e) {
      var c = e.target.closest(".copyable"); if (c) copy(c.dataset.copy, "Copied: " + c.dataset.copy);
      var a = e.target.closest('a[href^="#skill/"]'); if (a) { e.preventDefault(); openSkill(a.getAttribute("href").slice(7)); }
    });
    window.addEventListener("hashchange", route);
    window.addEventListener("popstate", route);
    route();
  }
  init();
})();
