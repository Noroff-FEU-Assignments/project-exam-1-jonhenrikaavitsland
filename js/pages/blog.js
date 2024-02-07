import { mediaObjects } from "../api/fetch/media.js";
import { postsObject, postsObjectPage2 } from "../api/fetch/posts.js";
import { renderError } from "../errorHandling/renderError.js";
import { renderBtn } from "../render/blog/renderBtn.js";
import { renderCards } from "../render/blogCard/renderCards.js";
import { viewMoreBtn } from "../ui/viewMoreBtnBlogPage/viewMore.js";

const parentElement = document.querySelector(".blog-parent");

try {
  parentElement.innerHTML = "";
  renderCards(postsObject, mediaObjects, parentElement);
} catch (error) {
  renderError(error, parentElement);
  console.log("Oops! There was an error rendering cards!", error);
}

try {
  renderBtn(parentElement);
} catch (error) {
  renderError(error, parentElement);
  console.log("Oops! There was an error rendering view more button!", error);
}

try {
  viewMoreBtn(parentElement, mediaObjects, postsObjectPage2);
} catch (error) {
  renderError(error, parentElement);
  console.log(
    "Oops! Something went wrong trying to execute the button function",
    error
  );
}
