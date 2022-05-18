let fill = document.querySelector(".fill");
let empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

function dragStart() {
  this.classlist += " hold";

  this.classlist += " hold";
  console.log("drag start");
}

function dragEnd() {
  this.className = "fill";
  console.log("drag end");
}

function dragOver(e) {
  e.preventDefault();
  console.log("drag over");
}

function dragEnter(e) {
  e.preventDefault();

  console.log("drag enter");
}
function dragLeave() {
  console.log("drag leave");
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
  console.log("drag leave");
}
