let buttons = document.querySelectorAll(".dropdown-icon");
buttons.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element.parentNode.classList.toggle("active"));
  });
});
