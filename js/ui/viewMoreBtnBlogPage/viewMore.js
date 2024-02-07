import {
  ERROR_NO_MEDIA,
  ERROR_NO_PARENT,
  ERROR_NO_POST,
} from "../../errorHandling/errors.js";
import { renderCards } from "../../render/blogCard/renderCards.js";
import { hideBtn } from "./hideBtn.js";

export function viewMoreBtn(parent, media, posts) {
  const viewMoreBtn = document.querySelector(".cta-view-more");

  if (!parent) throw ERROR_NO_PARENT;
  if (!media) throw ERROR_NO_MEDIA;
  if (!posts) throw ERROR_NO_POST;

  viewMoreBtn.addEventListener("click", function () {
    renderCards(posts, media, parent);
    hideBtn(posts, parent);
  });
}
