import { groupsOfTwoPosts } from "../../../api/fetch/posts.js";
import { renderTwoCards } from "./renderTwoCards.js";

export function renderCarouselElements(posts, media) {
  const carouselParent = document.querySelector(".carousel-container");

  const heading = document.createElement("h2");
  heading.textContent = "Latest Posts";
  heading.classList.add("heading");
  carouselParent.append(heading);

  const slider = document.createElement("div");
  slider.classList.add("slider");

  const leftBtn = document.createElement("button");
  leftBtn.classList.add("carousel-btn", "carousel-left-btn");
  slider.append(leftBtn);

  const leftIcon = document.createElement("i");
  leftIcon.classList.add("fa-solid", "fa-circle-caret-left", "fa-2xl");
  leftBtn.append(leftIcon);

  const rightBtn = document.createElement("button");
  rightBtn.classList.add("carousel-btn", "carousel-right-btn");
  slider.append(rightBtn);

  const rightIcon = document.createElement("i");
  rightIcon.classList.add("fa-solid", "fa-circle-caret-right", "fa-2xl");
  rightBtn.append(rightIcon);

  const indicators = document.createElement("div");
  indicators.classList.add("indicators");
  slider.append(indicators);

  for (let i = 0; i < Math.ceil(posts.length / 2); i++) {
    const slideWrap = document.createElement("div");
    slideWrap.classList.add(`slide${i + 1}`, "slide", "flex");
    slider.append(slideWrap);

    renderTwoCards(groupsOfTwoPosts[i], media, slideWrap);
  }

  carouselParent.append(slider);
}