import { clearParent } from "../api/data/clearParent.js";
import { mediaObjects } from "../api/fetch/media.js";
import { renderHero } from "../render/home/renderHero.js";
import { renderHeroLink } from "../render/home/renderHeroLink.js";

const heroParent = document.querySelector(".hero-img");

try {
  clearParent(heroParent);
  renderHero(mediaObjects);
  renderHeroLink();
} catch (error) {
  console.log(error);
}
