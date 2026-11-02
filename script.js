// Backlog cards. Edit this list to update the board — col: todo | doing | review | done
const cards = [
  {
    key: "UX-01", col: "todo", tags: ["ux"],
    title: "UX teardown: Daraz checkout & search",
    body: "Next teardown in the queue. Scope: search-to-cart flow, filter usability on mobile, and how trust signals (ratings, seller badges, COD) are placed.",
    points: ["Map the current flow screen by screen", "List friction points with severity", "Propose 3 small changes I'd test first"]
  },
  {
    key: "PRD-01", col: "doing", tags: ["product"], locked: true,
    title: "Sprintcal: Jira × calendar hybrid",
    body: "My own product. Sprint tickets become calendar time blocks so a team can see whether the sprint fits the week. Prototype is private while I run pilots.",
    points: ["Prototype works: board, calendar & hybrid view", "Next: pilot with 3 teams", "Bootstrapped, open to angel conversations"],
    links: [["Request walkthrough", "mailto:dipeshrajadhikari@gmail.com?subject=Sprintcal%20walkthrough"], ["Roadmap", "#roadmap"]]
  },
  {
    key: "EDU-01", col: "review", tags: ["teach", "product"],
    title: "PM Ready: 8-module PM course + project tool",
    body: "A free course for students and new PMs, with an actual project tool attached (Predictive, Scrum, Kanban, XP, DSDM, Hybrid).",
    points: ["8 modules: lesson + tool + knowledge check", "Interactive WBS, RACI, CPM, Gantt", "Projects saved locally, export/import between devices"],
    links: [["Open PM Ready ↗", "https://dipeshadhi.github.io/PMP-Guide-/"], ["Repo ↗", "https://github.com/DipeshAdhi/PMP-Guide-"]]
  },
  {
    key: "EDU-02", col: "review", tags: ["teach"],
    title: "SDLC teaching site",
    body: "An interactive way for my software engineering students to learn the traditional methodologies instead of memorising diagrams.",
    links: [["Open site ↗", "https://dipeshadhi.github.io/SDLC-Teaching-/"], ["Repo ↗", "https://github.com/DipeshAdhi/SDLC-Teaching-"]]
  },
  {
    key: "EDU-03", col: "review", tags: ["teach"],
    title: "Learning AI & LLMs resource hub",
    body: "A curated list of websites, tools and skills I share with students getting into AI.",
    links: [["Open site ↗", "https://dipeshadhi.github.io/Learning_AI_LLM/"], ["Repo ↗", "https://github.com/DipeshAdhi/Learning_AI_LLM"]]
  },
  {
    key: "MSC-01", col: "done", tags: ["build", "product"], locked: true,
    title: "MSc thesis: support routing with SLM + RL",
    body: "Whisper → local SLM (intent + sentiment) → priority score → dual Q-learning agents pick the department. Human-in-the-loop corrections double as reward.",
    points: ["Metrics: routing accuracy, CSAT, speed-to-resolution", "Local Ollama model for privacy, latency, cost", "Full-stack Django with observable routing"],
    links: [["Read the summary", "#thesis"]]
  },
  {
    key: "EDU-00", col: "done", tags: ["product"],
    title: "MSc IT & Applied Security in Data Analytics",
    body: "London Metropolitan University, taught at Islington College, 2024–2026. Sprint shipped while working full-time.",
  },
  {
    key: "OPS-01", col: "done", tags: ["product"],
    title: "3× cut in programme resource needs",
    body: "As coordinator for the GPMC, GPPC and UPC programmes, I looked at how resources were actually used and redesigned the process. Same output, a third of the resources.",
    points: ["Discovery → requirements → schedule → budget → retro", "50+ stakeholders aligned: faculty, executives, ops, marketing"]
  },
  {
    key: "OPS-02", col: "done", tags: ["product", "teach"],
    title: "Agile for a 20-person TA team",
    body: "Introduced standups, Trello boards, OKR-style goals and retros to the teaching-assistant team I led for three years.",
  },
  {
    key: "BLD-01", col: "done", tags: ["build"],
    title: "Classroom scheduling system (ING Tech)",
    body: "Internship, Mar–May 2025. Led PostgreSQL schema design and normalisation, defined data contracts and integration points, and fixed backend bottlenecks.",
  },
  {
    key: "BLD-02", col: "done", tags: ["build"],
    title: "GPS tracking & announcement platform",
    body: "Freelance. Real-time GPS tracking for local transport from IoT data, plus a configurable announcement system. Ran delivery end to end with the client.",
  },
  {
    key: "BLD-03", col: "done", tags: ["build"],
    title: "Saja Petroleum: petrol pump ops system",
    body: "Analysed how the station actually ran, then built an operations system for customer handling and day-to-day processes.",
  },
  {
    key: "BLD-04", col: "done", tags: ["build"],
    title: "Bus ticketing system (Kunwar IT)",
    body: "Web developer intern, 2020–21. A booking platform for 10,000+ passengers and 1,000+ buses. Learned early how much transactions and data integrity matter.",
  }
];

// Experience (from CV / LinkedIn). start/end are "YYYY-MM"; end: null means present.
const roles = [
  {
    title: "Academic Logistics Coordinator", org: "Islington College", start: "2026-04", end: null, when: "Apr 2026 – Present",
    scope: "Product owner for 100+ modules",
    points: [
      "Plan resources end to end for 100+ academic modules across courses, like running a multi-workstream portfolio with hard deadlines",
      "Write planning documents (budgets, resource maps, schedules) that work as PRDs: requirements, success metrics, dependencies",
      "Liaise with the Budget Committee on variance, utilisation and forecast accuracy",
      "Align 12+ senior stakeholders on roadmap priorities and budget"
    ]
  },
  {
    title: "Program Coordinator (GPMC, GPPC & UPC)", org: "Islington College", start: "2023-01", end: null, when: "2023 – Present",
    scope: "3× fewer resources needed",
    points: [
      "Own the programme lifecycle: discovery, requirements, scheduling, budgeting, delivery, retrospective",
      "Cut resource requirements by 3× through data analysis and process redesign",
      "Align 50+ stakeholders across faculty, external executives, operations and marketing"
    ]
  },
  {
    title: "Final Year Project Supervisor", org: "Islington College", start: "2022-01", end: null, when: "2022 – Present",
    scope: "30+ projects / year",
    points: [
      "Mentor 30+ software projects a year across AI/ML, IoT, databases and web",
      "Set success criteria and review architecture and design quality",
      "Coach students on stakeholder communication, PRD-style docs and iterative delivery"
    ]
  },
  {
    title: "Lecturer", org: "Islington College", start: "2022-01", end: null, when: "2022 – Present",
    scope: "SE, AI, databases, architecture",
    points: ["Teach Information Systems, Software Engineering, AI, Databases, Software Architecture, Design Patterns, UML and CI/CD"]
  },
  {
    title: "TA Supervisor", org: "Islington College", start: "2023-01", end: "2026-04", when: "2023 – Apr 2026",
    scope: "Led a 20-person team",
    points: [
      "Led a 20-member technical team each year with clear accountability and OKR-style goals",
      "Introduced Agile ceremonies, Trello tracking and retrospectives"
    ]
  },
  {
    title: "Data Analyst & System Contributor (Intern)", org: "ING Tech – Islington College", start: "2025-03", end: "2025-05", when: "Mar – May 2025",
    scope: "Classroom scheduling system",
    points: [
      "Led PostgreSQL schema design, normalisation and backend optimisation",
      "Defined data contracts and integration points; surfaced requirement gaps"
    ]
  },
  {
    title: "Web Application Developer (Intern)", org: "Kunwar IT & Design", start: "2020-01", end: "2021-12", when: "2020 – 2021",
    scope: "Bus ticketing, 10,000+ passengers",
    points: ["Worked on a bus ticketing platform serving 10,000+ passengers and 1,000+ buses"]
  }
];

const education = [
  { title: "MSc IT & Applied Security in Data Analytics", org: "London Metropolitan University", start: "2024-01", end: "2026-09", when: "2024 – 2026" },
  { title: "BSc (Hons) Computing", org: "London Metropolitan University", start: "2019-01", end: "2022-06", when: "2019 – 2022" }
];

const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function renderBoard() {
  const board = document.getElementById("board");
  cards.forEach((c, i) => {
    const btn = document.createElement("button");
    btn.className = "card";
    btn.dataset.tags = c.tags.join(" ");
    btn.dataset.i = i;
    btn.innerHTML = `
      <span class="key"><span>${c.key}</span>${c.locked ? '<i class="lock" title="Private"></i>' : ""}</span>
      <span class="t">${esc(c.title)}</span>
      <span class="tags">${c.tags.map(t => `<span class="tag ${t}">${t}</span>`).join("")}</span>`;
    board.querySelector(`[data-col="${c.col}"]`).appendChild(btn);
  });
  updateCounts();
}

function updateCounts() {
  document.querySelectorAll(".col").forEach(col => {
    col.querySelector(".count").textContent = col.querySelectorAll(".card:not(.hidden)").length;
  });
}

function openCard(c) {
  const d = document.getElementById("card-dialog");
  document.getElementById("card-detail").innerHTML = `
    <span class="muted small" style="font-family:var(--mono)">${c.key} · ${{ todo: "To do", doing: "In progress", review: "Live", done: "Done" }[c.col]}${c.locked ? " · private" : ""}</span>
    <h3>${esc(c.title)}</h3>
    <p>${esc(c.body)}</p>
    ${c.points ? `<ul>${c.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
    ${c.links ? `<div class="d-links">${c.links.map(([label, href], i) =>
      `<a class="btn ${i ? "btn-ghost" : ""}" href="${href}" ${href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${esc(label)}</a>`).join("")}</div>` : ""}`;
  d.showModal();
}

const initials = s => s.split(/[\s–-]+/).filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join("");

function renderExperience() {
  document.getElementById("role-count").textContent = roles.length;

  document.getElementById("current-roles").innerHTML = roles.filter(r => !r.end).map(r => `
    <tr>
      <td><span class="av">${initials(r.title)}</span><span><b>${esc(r.title)}</b><small>${esc(r.org)}</small></span></td>
      <td>${r.start.slice(0, 4)}</td>
      <td>${esc(r.scope)}</td>
    </tr>`).join("");

  document.getElementById("role-list").innerHTML = roles.map((r, i) => `
    <details class="role" ${i === 0 ? "open" : ""}>
      <summary>
        <span class="av">${initials(r.title)}</span>
        <span class="role-t"><b>${esc(r.title)}</b><small>${esc(r.org)}</small></span>
        <span class="role-when">${r.when}</span>
        <span class="status ${r.end ? "" : "on"}">${r.end ? "Done" : "In progress"}</span>
      </summary>
      <ul>${r.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
    </details>`).join("");

  // Gantt from Jan 2019 to Dec 2026
  const from = 2019, to = 2026, span = (to - from + 1) * 12;
  const m = s => (+s.slice(0, 4) - from) * 12 + (+s.slice(5, 7) - 1);
  const now = m("2026-11") + 1;
  const years = Array.from({ length: to - from + 1 }, (_, i) => `<span>${from + i}</span>`).join("");
  const bar = (r, kind) => {
    const a = m(r.start), b = r.end ? m(r.end) + 1 : now;
    return `<div class="g-row"><span class="g-label">${esc(r.title)}<small>${r.when}</small></span>
      <span class="g-track"><i class="g-bar ${kind} ${r.end ? "" : "open"}" style="left:${a / span * 100}%;width:${(b - a) / span * 100}%"></i></span></div>`;
  };
  document.getElementById("gantt").innerHTML =
    `<div class="g-row g-years"><span class="g-label"></span><span class="g-track">${years}</span></div>` +
    roles.map(r => bar(r, "work")).join("") + education.map(r => bar(r, "edu")).join("") +
    `<div class="g-row g-nowrow"><span class="g-label"></span><span class="g-track"><i class="g-now" style="left:${now / span * 100}%">today</i></span></div>`;

  const titles = { overview: "Overview", roles: "Roles", timeline: "Gantt chart", skills: "Skills" };
  document.querySelectorAll(".app-nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".app-nav button").forEach(b => b.setAttribute("aria-selected", b === btn));
      document.querySelectorAll(".pane").forEach(p => p.hidden = p.dataset.pane !== btn.dataset.pane);
      document.getElementById("pane-title").textContent = titles[btn.dataset.pane];
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderBoard();
  renderExperience();

  document.getElementById("board").addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (card) openCard(cards[card.dataset.i]);
  });

  // close dialog on internal anchor links and backdrop clicks
  const dlg = document.getElementById("card-dialog");
  dlg.addEventListener("click", e => {
    if (e.target === dlg || e.target.closest('a[href^="#"]')) dlg.close();
  });

  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c === chip));
      const f = chip.dataset.filter;
      document.querySelectorAll(".card").forEach(card => {
        card.classList.toggle("hidden", f !== "all" && !card.dataset.tags.split(" ").includes(f));
      });
      updateCounts();
    });
  });

  // concept mock view switcher
  const body = document.querySelector(".mock-body");
  document.querySelectorAll(".mock-tabs button").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".mock-tabs button").forEach(t => t.setAttribute("aria-selected", t === tab));
      body.dataset.current = tab.dataset.view;
    });
  });

  // highlight current section in nav
  const links = [...document.querySelectorAll(".nav a")];
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("section[id]").forEach(s => io.observe(s));
});
