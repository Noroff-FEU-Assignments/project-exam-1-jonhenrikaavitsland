import { createImg } from "../image/createImg.js";

export function renderProfileImage(media, parent) {
  for (let i = 0; i < media.length; i++) {
    if (media[i].id === "55") {
      const element = createImg(media[i], "profile-img");
      parent.append(element);
    }
  }
}
