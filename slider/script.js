const slider = document.querySelectorAll(".slide");

slider.forEach((slide) => {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
  });
});

function clearActiveClasses() {
  slider.forEach((slide) => {
    slide.classList.remove("active");
  });
}
