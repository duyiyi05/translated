const scenes = {
  lobby: document.getElementById("scene-lobby"),
  ticket: document.getElementById("scene-ticket"),
  doors: document.getElementById("scene-doors"),
  gallery: document.getElementById("scene-gallery"),
  exit: document.getElementById("scene-exit"),
};

const enterBtn = document.getElementById("enter-btn");
const presentBtn = document.getElementById("present-ticket");
const toExitBtn = document.getElementById("to-exit");
const stamp = document.getElementById("stamp");
const promise = document.getElementById("promise-line");

const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalNote = document.getElementById("modal-note");
const modalList = document.getElementById("modal-list");
const revealBtn = document.getElementById("reveal-btn");

const frames = [...document.querySelectorAll(".frame")];
const wall = document.getElementById("gallery-wall");

const frameData = {
  1: {
    title: "Exhibit I — The Context Room",
    note: "Before translation, we build the world it lives in.",
    bullets: [
      "Context pack: audience, tone, constraints.",
      "Asset setup: glossary, style guide, TM.",
      "Locale risks: TR expansion, IT formality.",
    ],
  },
  2: {
    title: "Exhibit II — Symbiosis Workshop",
    note: "I use NLP as an operational accelerator—not an authority. The system preserves context and accountability.",
    bullets: [
      "NLP-assisted workflow design with governance.",
      "Terminology consistency + string-level constraints.",
      "MT output is treated as draft; accountability stays human.",
    ],
  },
  3: {
    title: "Exhibit III — Workflow Corridor",
    note: "Delivery is designed as a repeatable enterprise pathway.",
    bullets: [
      "Intake triage and risk routing.",
      "Human + AI production with approval gates.",
      "Feedback loop into memory and playbooks.",
    ],
  },
  4: {
    title: "Exhibit IV — QA Atelier",
    note: "Quality is operationalized through taxonomy and severity weighting.",
    bullets: [
      "Linguistic risk modeling by content class.",
      "Error taxonomy + severity weighting.",
      "Ambiguity detection tracked per 1k words.",
    ],
  },
  5: {
    title: "Exhibit V — Metrics Chamber",
    note: "Evidence links language quality to business predictability.",
    bullets: [
      "OTD and TAT trend governance.",
      "QA pass, rework, and risk closure view.",
      "Monthly executive review cadence.",
    ],
  },
  6: {
    title: "Exhibit VI — 30-60-90 Wing",
    note: "Roadmap ambition is anchored in measurable outcomes.",
    bullets: [
      "30: baseline controls and KPIs.",
      "60: quality gains and reduced rework.",
      "90: controlled scaling and confidence.",
    ],
  },
};

function showScene(key) {
  Object.values(scenes).forEach((s) => s.classList.remove("is-active"));
  scenes[key].classList.add("is-active");
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function typePromise() {
  const text = "Human-centered, AI-integrated enterprise localization delivery";
  promise.textContent = "";
  for (const ch of text) {
    promise.textContent += ch;
    await wait(18 + Math.random() * 14);
  }
}

enterBtn.addEventListener("click", async () => {
  scenes.lobby.classList.add("open");
  await wait(900);
  showScene("ticket");
  await wait(380);
  stamp.classList.add("on");
});

presentBtn.addEventListener("click", async () => {
  showScene("doors");
  scenes.doors.classList.add("scan");
  await wait(450);
  scenes.doors.classList.add("open");
  await wait(820);
  showScene("gallery");
});

toExitBtn.addEventListener("click", () => showScene("exit"));

wall.addEventListener("mousemove", (e) => {
  const r = wall.getBoundingClientRect();
  wall.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
  wall.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
});

frames.forEach((frame) => {
  frame.addEventListener("click", () => {
    const data = frameData[frame.dataset.frame];
    modalTitle.textContent = data.title;
    modalNote.textContent = `Curator Note: ${data.note}`;
    modalList.innerHTML = data.bullets.map((b) => `<li>${b}</li>`).join("");
    modalList.classList.remove("show");
    modal.classList.add("is-open");
  });
});

revealBtn.addEventListener("click", () => modalList.classList.add("show"));
closeModalBtn.addEventListener("click", () => modal.classList.remove("is-open"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("is-open");
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.classList.remove("is-open");
});

typePromise();
