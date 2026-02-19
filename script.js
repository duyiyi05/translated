const scenes = {
  a: document.getElementById("scene-a"),
  b: document.getElementById("scene-b"),
  c: document.getElementById("scene-c"),
  d: document.getElementById("scene-d"),
  e: document.getElementById("scene-e"),
};

function showScene(next) {
  Object.values(scenes).forEach((scene) => scene.classList.remove("is-active"));
  scenes[next].classList.add("is-active");
}

document.getElementById("grab-ticket").addEventListener("click", () => {
  showScene("b");
});

document.getElementById("enter-gallery").addEventListener("click", async () => {
  showScene("c");
  await new Promise((resolve) => setTimeout(resolve, 160));
  scenes.c.classList.add("open");

  setTimeout(() => {
    showScene("d");
    runTypewriter();
  }, 1900);
});

async function typeText(element, text, speed = 78) {
  for (const char of text) {
    element.textContent += char;
    await new Promise((resolve) => setTimeout(resolve, speed + Math.random() * 35));
  }
}

async function backspace(element, count, speed = 55) {
  for (let i = 0; i < count; i += 1) {
    element.textContent = element.textContent.slice(0, -1);
    await new Promise((resolve) => setTimeout(resolve, speed + Math.random() * 25));
  }
}

async function runTypewriter() {
  const line = document.getElementById("typed-line");
  const title = document.getElementById("intro-title");
  const byline = document.getElementById("intro-byline");

  line.textContent = "";
  await typeText(line, "Welcom", 82);
  await new Promise((resolve) => setTimeout(resolve, 330));
  await backspace(line, 1, 62);
  await typeText(line, "e to", 85);

  await new Promise((resolve) => setTimeout(resolve, 400));
  title.classList.add("show");

  await new Promise((resolve) => setTimeout(resolve, 420));
  byline.classList.add("show");

  await new Promise((resolve) => setTimeout(resolve, 1100));
  showScene("e");
}

document.querySelectorAll(".toggle-exhibit").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".exhibit");
    const willOpen = !card.classList.contains("open");
    card.classList.toggle("open", willOpen);
    button.textContent = willOpen ? "Close exhibit" : "Open exhibit";
    button.setAttribute("aria-expanded", String(willOpen));
  });
});
