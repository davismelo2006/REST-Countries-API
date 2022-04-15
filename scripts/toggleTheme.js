const toggle_theme = document.querySelector(".toggle-theme");
const body = document.querySelector("body");

toggle_theme.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
