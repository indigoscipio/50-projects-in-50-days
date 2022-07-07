let codeContainer = document.querySelector(".code-container");
let codes = document.querySelectorAll(".code");

// let correctCode = [1, 2, 3, 4, 5, 6];
let codeIdx = 0;

codes[codeIdx].focus();
codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    //number input
    if (e.key >= 0 && e.key <= 9) {
      codes[codeIdx].value = "";

      //increment focus
      setTimeout(() => {
        if (codeIdx === 5) {
          return false;
        } else {
          codeIdx++;
          codes[codeIdx].focus();
        }
      }, 1);

      //backspace
    } else if (e.key == "Backspace") {
      //decrement focus
      setTimeout(() => {
        if (codeIdx <= 0) {
          codeIdx = 0;
        } else {
          codeIdx--;
          codes[codeIdx].focus();
        }
      }, 1);
    }
  });
});
