// ---------- Helpers ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const scenes = ["scene-lobby", "scene-ticket", "scene-about", "scene-gallery", "scene-exit"];
function showScene(id) {
  scenes.forEach((sid) => {
    const el = document.getElementById(sid);
    if (!el) return;
    el.classList.toggle("is-active", sid === id);
  });

  window.scrollTo({ top: 0, behavior: "instant" });

  onSceneEnter(id); // ✅ important
  updateNavArrows(); // ✅ keep arrows accurate
}

// ---------- Typewriter (promise line) ----------
function typeOnce(el, text, speed = 22) {
  if (!el || el.dataset.typed === "1") return;
  el.dataset.typed = "1";
  el.textContent = "";
  let i = 0;
  const tick = () => {
    el.textContent = text.slice(0, i++);
    if (i <= text.length) setTimeout(tick, speed);
    else el.classList.add("is-done");
  };
  tick();
}

// ---------- Data (frames content) ----------
const FRAME_DATA = {
  1: {
    title: "I. Context Room",
    note:
      "Context is a deliverable. Without it, enterprise localization becomes guesswork.",
    bullets: [
      "Context pack: screenshots mapped to string IDs + product walkthrough",
      "Terminology: glossary with ownership + freeze policy after approval",
      "EN→IT example: formality choice (Lei/tu) defined per audience + product area",
      "EN→TR example: HR vocabulary consistency + UI length/fit constraints",
      "Definition of Done: signed scope + success KPIs before production",
    ],
  },
  2: {
    title: "II. Symbiosis Workshop",
    note:
      "I use NLP to accelerate delivery—never to replace accountability. AI drafts; humans decide.",
    bullets: [
      "NLP-assisted workflow: context-aware MT → MTPE → reviewer → final QA",
      "Risk-based routing: legal/policy content can bypass MT when required",
      "Terminology constraints: glossary enforcement + consistency checks",
      "Feedback loop: LQA findings become preventive rules (not one-off fixes)",
      "Target: +25% productivity while keeping LQA ≥ 95%",
    ],
  },
  3: {
    title: "III. Workflow Corridor",
    note:
      "Enterprise trust is built on predictable operations: gates, owners, and escalation rules.",
    bullets: [
      "Intake → prep → production → QA → delivery (with sign-off checkpoints)",
      "RACI: clear ownership across PM, linguists, reviewers, SMEs",
      "SLA: clarifications <48h, delivery cadence locked to release cycle",
      "Early warning: risks tied to timeline gates (traffic light status)",
      "OTD target: ≥ 98% with buffer strategy + exception handling",
    ],
  },
  4: {
    title: "IV. QA Atelier",
    note:
      "Quality is measurable. I design a system where issues become learning—fast.",
    bullets: [
      "Error taxonomy: Critical / Major / Minor with severity weighting",
      "LQA threshold: ≥ 95 weighted score; trends tracked by content type",
      "RCA/CAPA: root cause analysis + corrective + preventive actions",
      "EN→IT risk: gendered titles + legal nuance flagged as high impact",
      "EN→TR risk: agglutination + UI expansion managed via constraints",
    ],
  },
  5: {
    title: "V. Metrics Chamber",
    note:
      "What gets measured gets stabilized. What gets stabilized becomes scalable.",
    bullets: [
      "Dashboard: OTD, TAT, LQA pass, rework %, clarifications/1k, open risks",
      "Business review narrative: what changed → why → action → expected impact",
      "Profitability drivers: rework reduction + clarified scope + routing rules",
      "Trend targets: clarifications/1k decreasing over 3 months",
      "Escalations: thresholds defined (Red triggers immediate mitigation)",
    ],
  },
  6: {
    title: "VI. 30–60–90 Wing",
    note:
      "Fast adaptation is not luck. It’s structured learning + control mechanisms.",
    bullets: [
      "30 days: baseline, glossary ownership, reporting cadence, vendor calibration",
      "60 days: -20% clarification rate via better context + terminology workshops",
      "90 days: predictive risk tracking + cost optimization without quality loss",
      "Governance: standardize what must be consistent; keep flexibility where needed",
      "Result: scalable enterprise delivery with measurable improvement loops",
    ],
  },
};

// ---------- Modal ----------
const modal = $("#modal");
const modalCard = $("#modal .modal-card");
const closeModalBtn = $("#close-modal");
const revealBtn = $("#reveal-btn");
const modalTitle = $("#modal-title");
const modalNote = $("#modal-note");
const modalList = $("#modal-list");

let currentFrameId = null;
let revealed = false;

function openModal(frameId) {
  const data = FRAME_DATA[frameId];
  if (!data) return;

  currentFrameId = frameId;
  revealed = false;

  modalTitle.textContent = data.title;
  modalNote.textContent = data.note;
  modalList.innerHTML = "";
  modalList.classList.remove("is-visible");
  revealBtn.textContent = "Reveal";
  revealBtn.disabled = false;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");

  // focus for accessibility
  closeModalBtn.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  currentFrameId = null;
  revealed = false;
}

function revealContent() {
  if (!currentFrameId) return;
  const data = FRAME_DATA[currentFrameId];
  if (!data) return;

  if (!revealed) {
    modalList.innerHTML = data.bullets.map((b) => `<li>${b}</li>`).join("");
    modalList.classList.add("is-visible");
    revealBtn.textContent = "Hide";
    revealed = true;
  } else {
    modalList.classList.remove("is-visible");
    modalList.innerHTML = "";
    revealBtn.textContent = "Reveal";
    revealed = false;
  }
}

// Close: button
closeModalBtn?.addEventListener("click", closeModal);

// Close: click outside card
modal?.addEventListener("click", (e) => {
  if (!modalCard.contains(e.target)) closeModal();
});

// Close: ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

// Reveal
revealBtn?.addEventListener("click", revealContent);

// ---------- Gallery spotlight-follow ----------
const wall = $("#gallery-wall");
if (wall) {
  wall.addEventListener("mousemove", (e) => {
    const rect = wall.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    wall.style.setProperty("--mx", `${x}px`);
    wall.style.setProperty("--my", `${y}px`);
  });
  wall.addEventListener("mouseleave", () => {
    wall.style.setProperty("--mx", `50%`);
    wall.style.setProperty("--my", `40%`);
  });
}

// Frames -> modal
$$(".frame").forEach((f) => {
  f.addEventListener("click", () => openModal(f.dataset.frame));
});

// ---------- Scene flow ----------
// Lobby typewriter sequence (after sweep)
function typeSequence(items, gap = 120) {
  let i = 0;
  const run = () => {
    if (i >= items.length) return;
    const [el, text, speed] = items[i++];
    typeOnce(el, text, speed);
    // estimate finish time
    const ms = Math.max(380, text.length * speed + gap);
    setTimeout(run, ms);
  };
  run();
}

function resetTyped(el) {
  if (!el) return;
  el.dataset.typed = "0";
  el.classList.remove("is-done");
  el.textContent = "";
}

function runLobbyTyping(force = false){
  const kicker = $("#lobby-kicker");
  const title = $("#lobby-title");
  const promise = $("#promise-line");
  const subtitle = $("#lobby-subtitle");
  const byline = $("#lobby-byline");

  // ✅ If not forcing, don't re-run if already typed
  if (!force && promise?.dataset?.typed === "1") return;

  [kicker,title,promise,subtitle,byline].forEach(resetTyped);

  typeSequence([
    [kicker, "Welcome to", 45],
    [title, "Symbiotic Enterprise Localization System", 28],
    [promise, "Human-centered, AI-integrated enterprise localization delivery", 40],
    [subtitle, "EN→TR | EN→IT", 36],
    [byline, "by Duygu TAŞ", 36],
  ], 420);
}

// Run on first load
document.addEventListener("DOMContentLoaded", () => runLobbyTyping(true));

// Lobby -> Ticket
$("#enter-btn")?.addEventListener("click", () => {
  const lobby = $("#scene-lobby");
  lobby?.classList.add("exit");
  setTimeout(() => showScene("scene-ticket"), 520);
});

// Ticket animations
const ticket = $("#ticket");

function animateTicket() {
  ticket?.classList.add("ticket-in");
}

function onSceneEnter(id) {
  if (id === "scene-lobby") {
    runLobbyTyping(true); // true = force retype every time
  }

  if (id === "scene-ticket") {
    // reset ticket animation every time you come back
    ticket?.classList.remove("ticket-in", "ticket-presented");
    requestAnimationFrame(() => animateTicket());
  }
}

document.getElementById("present-ticket")?.addEventListener("click", () => {
  ticket?.classList.add("ticket-presented");
  setTimeout(() => showScene("scene-about"), 520);
});

// Gallery -> Exit
$("#to-exit")?.addEventListener("click", () => {
  $("#scene-gallery")?.classList.add("exit");
  setTimeout(() => showScene("scene-exit"), 520);
});

// ---------- Nav arrows (Back/Forward) ----------
function getExistingScenes() {
  return scenes.filter((id) => document.getElementById(id));
}

function getActiveSceneIndex(){
  const list = getExistingScenes();
  const activeId = list.find((id) => document.getElementById(id)?.classList.contains("is-active"));
  return Math.max(0, list.indexOf(activeId));
}

function goToOffset(delta){
  const list = getExistingScenes();
  const idx = getActiveSceneIndex();
  const nextIdx = Math.min(list.length - 1, Math.max(0, idx + delta));

  // close modal if open
  if (modal?.classList.contains("is-open")) closeModal();

  showScene(list[nextIdx]);
  updateNavArrows();
}

function updateNavArrows(){
  const list = getExistingScenes();
  const idx = getActiveSceneIndex();
  document.getElementById("nav-prev")?.classList.toggle("is-hidden", idx === 0);
  document.getElementById("nav-next")?.classList.toggle("is-hidden", idx === list.length - 1);
}

document.getElementById("nav-prev")?.addEventListener("click", () => goToOffset(-1));
document.getElementById("nav-next")?.addEventListener("click", () => goToOffset(1));

updateNavArrows();
