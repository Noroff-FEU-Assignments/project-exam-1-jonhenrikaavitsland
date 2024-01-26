import { createCard } from "../../blogCard/createCard.js";

export function renderTwoCards(posts, media, parent) {
  for (let i = 0; i < posts.length; i++) {
    const card = createCard(posts[i], media);
    parent.append(card);
  }
}
