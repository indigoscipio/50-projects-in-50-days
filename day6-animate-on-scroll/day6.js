let reveals = document.querySelectorAll(".reveal");

// for (var i = 0; i < reveals.length; i++) {
//   let windowHeight = window.innerHeight;
//   let elementTop = reveals[i].getBoundingClientRect().top;
//   let elementVisible = 150;
//   if (elementTop < windowHeight) {
//     reveals[i].classList.add("active");
//   } else {
//     reveals[i].classList.remove("active");
//   }
// }

function functionReveal() {
  reveals.forEach((element) => {
    let windowHeight = window.innerHeight;
    let elementTop = element.getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", functionReveal);
