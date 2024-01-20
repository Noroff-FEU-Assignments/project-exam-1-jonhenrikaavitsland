import { closeMenuEsc } from "./closeMenuEsc.js";
import { closeMenu } from "./closeMenu.js";

export function handleMenu() {
  const menuBtn = document.querySelector(".menu-wrap");
  const navElement = document.querySelector("#nav-wrap");
  const navBar = document.querySelector("nav ul");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".close-btn-wrap");

  menuBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  document.addEventListener("keydown", closeMenuEsc);
  overlay.addEventListener("click", closeMenu);

  function openMenu() {
    navElement.classList.remove("nav-wrap");
    navElement.classList.add("navigation-wrap");
    navBar.classList.add("mobile-nav");
    overlay.classList.remove("hidden");
  }
}
