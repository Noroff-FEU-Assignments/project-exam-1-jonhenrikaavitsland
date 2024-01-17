const menuBtn = document.querySelector(".menu-wrap");
const navElement = document.querySelector("#nav-wrap");
const overlay = document.querySelector(".overlay");

console.log(menuBtn, navElement, overlay);

menuBtn.addEventListener("click", function () {
  navElement.classList.remove("nav-wrap");
  navElement.classList.add("navigation-wrap");
  overlay.classList.remove("hidden");
});
