import { mediaObjects } from "../api/fetch/media.js";
import { postsObject } from "../api/fetch/posts.js";
import { renderCards } from "../render/blogCard/renderCards.js";

const parentElement = document.querySelector(".blog-parent");

try {
  parentElement.innerHTML = "";
  renderCards(postsObject, mediaObjects, parentElement);
} catch (error) {
  console.log("Oops! There was an error rendering cards!", error);
}
