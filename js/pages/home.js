import { clearParent } from "../data/clearParent.js";
import { mediaObjects } from "../api/fetch/media.js";
import { renderHero } from "../render/home/renderHero.js";
import { renderHeroLink } from "../render/home/renderHeroLink.js";
import { renderCards } from "../render/blogCard/renderCards.js";
import { fourPosts, postsObject } from "../api/fetch/posts.js";
import { renderViewMoreLink } from "../render/home/renderViewMoreLink.js";
import { renderCarouselElements } from "../render/home/carousel/renderCarouselElements.js";
import { runCarousel } from "../ui/carousel/runCarousel.js";
import { renderError } from "../errorHandling/renderError.js";
import { makeHeroRedirect } from "../ui/hero/makeHeroRedirect.js";

const heroParent = document.querySelector(".hero-img");
const cardParent = document.querySelector(".mobile-cards-parent");

try {
  clearParent(heroParent);
  renderHero(mediaObjects);
  renderHeroLink();
  makeHeroRedirect();
} catch (error) {
  renderError(error, heroParent);
  console.log("Oops! Something went wrong!", error);
}

try {
  renderCards(fourPosts, mediaObjects, cardParent);
  renderViewMoreLink(cardParent);
  renderCarouselElements(postsObject, mediaObjects);
  runCarousel();
} catch (error) {
  renderError(error, cardParent);
  console.log("Oops! Something went wrong!", error);
}