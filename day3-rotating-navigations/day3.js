"use strict";

let mainContainer = document.querySelector(".main-container");
let menuReveal = document.querySelector(".menu-reveal");
let btnMenu = document.querySelector(".menu");
let iconMenu = document.querySelector(".icon-menu");
let iconClose = document.querySelector(".icon-close");

btnMenu.addEventListener("click", () => {
  //rotate the canvas
  mainContainer.classList.toggle("container-rotate");
  menuReveal.classList.toggle("menu-rotate");

  //change the menu
  iconMenu.classList.toggle("open");
  iconClose.classList.toggle("hidden");
});
