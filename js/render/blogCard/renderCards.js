import { renderCard } from "./renderCard.js";

export function renderCards(posts, media, parent) {
  posts.forEach(function (post) {
    renderCard(post, media, parent);
  });
}
