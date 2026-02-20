const curtainScene = document.getElementById("curtain-scene");
const welcomeScene = document.getElementById("welcome-scene");
const startBtn = document.getElementById("start-btn");
const welcomeBlock = document.querySelector(".welcome-block");

const lineWelcome = document.getElementById("line-welcome");
const lineSystem = document.getElementById("line-system");
const lineLocale = document.getElementById("line-locale");
const lineBy = document.getElementById("line-by");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeLine(element, text, speed = 60) {
  element.textContent = "";
  for (const ch of text) {
    element.textContent += ch;
    await delay(speed + Math.random() * 28);
  }
}

async function runWelcomeTyping() {
  await typeLine(lineWelcome, "Welcome to", 66);
  await delay(220);
  await typeLine(lineSystem, "Symbiotic Enterprise Localization System", 40);
  await delay(180);
  await typeLine(lineLocale, "EN→TR | EN→IT", 56);
  await delay(180);
  await typeLine(lineBy, "by Duygu TAŞ", 62);
}

startBtn.addEventListener("click", async () => {
  curtainScene.classList.add("open");
  startBtn.disabled = true;
  await delay(1150);

  curtainScene.classList.remove("is-active");
  welcomeScene.classList.add("is-active");

  await delay(1800);
  welcomeBlock.classList.add("lit");
  runWelcomeTyping();
});
