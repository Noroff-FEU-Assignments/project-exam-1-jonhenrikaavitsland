import { clearParent } from "../data/clearParent.js";
import { mediaObjects } from "../api/fetch/media.js";
import { renderHero } from "../render/home/renderHero.js";
import { renderHeroLink } from "../render/home/renderHeroLink.js";
import { renderCards } from "../render/blogCard/renderCards.js";
import { fourPosts } from "../api/fetch/posts.js";
import { renderViewMoreLink } from "../render/home/renderViewMoreLink.js";

const heroParent = document.querySelector(".hero-img");
const cardParent = document.querySelector(".mobile-cards-parent");

try {
  clearParent(heroParent);
  renderHero(mediaObjects);
  renderHeroLink();
  renderCards(fourPosts, mediaObjects, cardParent);
  renderViewMoreLink(cardParent);
} catch (error) {
  console.log(error);
}
