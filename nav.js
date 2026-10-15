// Shared site navigation. Add a new simulator by adding one entry to SIMS.
const SIMS = [
  {
    href: "shield-spec-sim.html",
    title: "Shield Specialization",
    desc: "Blocks have a chance to restore 6% of max mana, once every 3 sec. Avoidance, block, Holy Shield and enemy count.",
  },
  {
    href: "improved-seal-of-fury-sim.html",
    title: "Improved Seal of Fury",
    desc: "Restore mana when Seal of Fury's shield is fully absorbed, with a bonus against higher-level attackers.",
  },
  {
    href: "seal-of-wisdom-sim.html",
    title: "Seal of Wisdom",
    desc: "Seal of Wisdom (fixed procs per minute) and Judgement of Wisdom (flat chance per hit) mana regen, Ranks 1–3.",
  },
];

(function renderSidebar() {
  const here = location.pathname.split("/").pop() || "index.html";
  const link = (href, text) =>
    `<li><a href="${href}"${href === here ? ' aria-current="page"' : ""}>${text}</a></li>`;

  const aside = document.createElement("aside");
  aside.className = "sidebar";
  aside.innerHTML = `
    <div class="sb-head">
      <a class="sb-brand" href="index.html">Forever Paladin Sims</a>
      <button type="button" class="sb-toggle" aria-expanded="false" aria-controls="sb-nav">Menu</button>
    </div>
    <nav id="sb-nav" class="sb-nav" aria-label="Site">
      <ul>${link("index.html", "Home")}</ul>
      <div class="sb-section">Simulators</div>
      <ul>${SIMS.map(s => link(s.href, s.title)).join("")}</ul>
    </nav>`;
  document.body.classList.add("has-sidebar");
  document.body.prepend(aside);

  const toggle = aside.querySelector(".sb-toggle");
  toggle.addEventListener("click", () => {
    const open = aside.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  // Landing page: render a card per simulator.
  const list = document.getElementById("sim-list");
  if (list) {
    list.innerHTML = SIMS.map(s => `
      <a class="sim-card" href="${s.href}">
        <h2>${s.title}</h2>
        <p>${s.desc}</p>
        <span class="go">Open simulator →</span>
      </a>`).join("");
  }
})();
