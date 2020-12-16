const slider = document.querySelector(".slider");
const scrollSpeed = 3;
let isDown = false;
let startX;
let scrollLeft = 0;

// EventListeners
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("dragging");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("dragging");
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("dragging");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * scrollSpeed;
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener("mousewheel", (e) => {
  const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  slider.scrollLeft -= delta * 60;
  e.preventDefault();
});
