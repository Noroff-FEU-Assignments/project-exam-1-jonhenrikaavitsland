import { groupsOfTwoPosts } from "../../../api/fetch/posts.js";
import { createHiddenSpan } from "../../../errorHandling/createHiddenSpan.js";
import {
  ERROR_NO_DATA,
  ERROR_NO_MEDIA,
  ERROR_NO_PARENT,
} from "../../../errorHandling/errors.js";
import { renderTwoCards } from "./renderTwoCards.js";

export function renderCarouselElements(posts, media) {
  if (!posts) throw ERROR_NO_DATA;
  if (!media) throw ERROR_NO_MEDIA;

  const carouselParent = document.querySelector(".carousel-container");

  if (!carouselParent) throw ERROR_NO_PARENT;

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

  const leftHiddenSpan = createHiddenSpan("1-left");
  leftBtn.append(leftHiddenSpan);

  const rightBtn = document.createElement("button");
  rightBtn.classList.add("carousel-btn", "carousel-right-btn");
  slider.append(rightBtn);

  const rightIcon = document.createElement("i");
  rightIcon.classList.add("fa-solid", "fa-circle-caret-right", "fa-2xl");
  rightBtn.append(rightIcon);

  const rightHiddenSpan = createHiddenSpan("1-right");
  rightBtn.append(rightHiddenSpan);

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
