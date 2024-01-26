import { createCard } from "./createCard.js";

export function renderCard(post, media, parent) {
  const cardHtml = createCard(post, media);
  parent.append(cardHtml);
}