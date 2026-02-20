const frames = document.querySelectorAll(".frame");
const backdrop = document.querySelector(".backdrop");

function closeAll() {
  frames.forEach((f) => f.classList.remove("is-open"));
  backdrop?.classList.remove("is-on");
}

frames.forEach((frame) => {
  frame.addEventListener("click", (e) => {
    // If you click the close button, close only
    if (e.target.closest(".close")) {
      closeAll();
      e.stopPropagation();
      return;
    }
    // Open this frame
    closeAll();
    frame.classList.add("is-open");
    backdrop?.classList.add("is-on");
  });
});

backdrop?.addEventListener("click", closeAll);

// Optional: ESC to close
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAll();
});
