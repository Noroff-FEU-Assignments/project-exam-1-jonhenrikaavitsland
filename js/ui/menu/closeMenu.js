const navElement = document.querySelector("#nav-wrap");
const navBar = document.querySelector("nav ul");
const overlay = document.querySelector(".overlay");

export function closeMenu() {
  navElement.classList.remove("navigation-wrap");
  navElement.classList.add("nav-wrap");
  navBar.classList.remove(".mobile-nav");
  overlay.classList.add("hidden");
}
