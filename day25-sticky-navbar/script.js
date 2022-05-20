let header = document.querySelector("header.nav");

window.addEventListener("scroll", fixedNav);
function fixedNav() {
  if (window.scrollY >= 76) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
  console.log(window.scrollY, header.offsetHeight);
}
