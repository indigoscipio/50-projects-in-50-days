let toggle = document.querySelector(".menu-icon");
let nav = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
