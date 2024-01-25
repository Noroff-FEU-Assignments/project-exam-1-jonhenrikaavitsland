import { renderCards } from "../../blogCard/renderCards.js";

export function renderCarouselElements(posts, media) {
  const carouselParent = document.querySelector(".carousel-container");

  const heading = document.createElement("h2");
  heading.textContent = "Latest Posts";
  heading.classList.add("heading");
  carouselParent.append(heading);

  const leftBtn = document.createElement("i");
  leftBtn.classList.add("fa-solid", "fa-circle-caret-left", "fa-2xl");
  carouselParent.append(leftBtn);

  const rightBtn = document.createElement("i");
  rightBtn.classList.add("fa-solid", "fa-circle-caret-right", "fa-2xl");
  carouselParent.append(rightBtn);

  const containerWrap = document.createElement("div");
  containerWrap.classList.add("flex", "carousel-card-wrap");

  const container = document.createElement("div");
  container.classList.add("carousel-card-container", "flex");

  renderCards(posts, media, container);

  containerWrap.append(container);

  carouselParent.append(containerWrap);
}
