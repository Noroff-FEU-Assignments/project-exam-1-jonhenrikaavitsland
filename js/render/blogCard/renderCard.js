import {
  ERROR_NO_DATA,
  ERROR_NO_MEDIA,
  ERROR_NO_PARENT,
} from "../../errorHandling/errors.js";
import { createCard } from "./createCard.js";

export function renderCard(post, media, parent) {
  if (!post) throw ERROR_NO_DATA;
  if (!media) throw ERROR_NO_MEDIA;
  if (!parent) throw ERROR_NO_PARENT;

  const cardHtml = createCard(post, media);

  parent.append(cardHtml);
}
