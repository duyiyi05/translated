const enterButton = document.getElementById("enter-gallery");
const hero = document.getElementById("hero");
const wall = document.getElementById("gallery-wall");
const overlay = document.getElementById("overlay");
const frames = [...document.querySelectorAll(".frame")];

let activeFrame = null;

enterButton.addEventListener("click", () => {
  hero.classList.add("hidden");
  setTimeout(() => {
    hero.style.display = "none";
    wall.classList.add("visible");
  }, 520);
});

function closeActiveFrame() {
  if (!activeFrame) return;
  activeFrame.classList.remove("active");
  overlay.classList.remove("visible");
  document.body.style.overflow = "";
  activeFrame = null;
}

function openFrame(frame) {
  if (activeFrame && activeFrame !== frame) {
    activeFrame.classList.remove("active");
  }

  const willOpen = activeFrame !== frame;
  if (!willOpen) {
    closeActiveFrame();
    return;
  }

  frame.classList.add("active");
  overlay.classList.add("visible");
  document.body.style.overflow = "hidden";
  activeFrame = frame;
}

frames.forEach((frame) => {
  frame.addEventListener("click", (event) => {
    if (event.target.classList.contains("frame-close")) return;
    openFrame(frame);
  });

  frame.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFrame(frame);
    }
  });

  const closeButton = frame.querySelector(".frame-close");
  closeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    closeActiveFrame();
  });
});

overlay.addEventListener("click", closeActiveFrame);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeActiveFrame();
});
