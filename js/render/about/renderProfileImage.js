import { ERROR_NO_MEDIA, ERROR_NO_PARENT } from "../../errorHandling/errors.js";
import { createImg } from "../image/createImg.js";

export function renderProfileImage(media, parent) {
  if (!media) throw ERROR_NO_MEDIA;
  if (!parent) throw ERROR_NO_PARENT;

  for (let i = 0; i < media.length; i++) {
    if (media[i].id === "55") {
      const element = createImg(media[i], "profile-img");

      parent.append(element);
    }
  }
}
