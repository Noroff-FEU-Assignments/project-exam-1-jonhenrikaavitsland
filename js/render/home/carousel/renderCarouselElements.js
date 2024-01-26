import { groupsOfTwoPosts } from "../../../api/fetch/posts.js";
import { renderTwoCards } from "./renderTwoCards.js";

export function renderCarouselElements(posts, media) {
  const carouselParent = document.querySelector(".carousel-container");

  const heading = document.createElement("h2");
  heading.textContent = "Latest Posts";
  heading.classList.add("heading");
  carouselParent.append(heading);

  const leftBtn = document.createElement("i");
  leftBtn.classList.add("fa-solid", "fa-circle-caret-left", "fa-2xl", "cursor");
  carouselParent.append(leftBtn);

  const rightBtn = document.createElement("i");
  rightBtn.classList.add(
    "fa-solid",
    "fa-circle-caret-right",
    "fa-2xl",
    "cursor"
  );
  carouselParent.append(rightBtn);

  const containerWrap = document.createElement("div");
  containerWrap.classList.add("flex", "slides-wrap");

  for (let i = 0; i < Math.ceil(posts.length / 2); i++) {
    const slideWrap = document.createElement("div");
    slideWrap.classList.add(`slide${i + 1}`, "slide", "flex");
    containerWrap.append(slideWrap);

    console.log(groupsOfTwoPosts);
    renderTwoCards(groupsOfTwoPosts[i], media, slideWrap);
  }

  carouselParent.append(containerWrap);

  const indicators = document.createElement("div");
  indicators.classList.add("flex", "indicators");
  carouselParent.append(indicators);
}
