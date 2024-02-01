import { ERROR_NO_MEDIA, ERROR_NO_PARENT } from "../../errorHandling/errors.js";
import { createImg } from "../image/createImg.js";

export function renderAboutImages(media) {
  if (!media) throw ERROR_NO_MEDIA;

  const imageParent1 = document.querySelector(".about-part-2 div");
  const imageParent2 = document.querySelector(".about-part-3 div");
  const imageParent3 = document.querySelector(".about-part-4 div");

  if (!imageParent1 || !imageParent2 || !imageParent3) throw ERROR_NO_PARENT;

  for (let i = 0; i < media.length; i++) {
    if (media[i].id === "56") {
      const imgTwo = createImg(media[i], "about-img");

      imageParent1.innerHTML = "";
      imageParent1.append(imgTwo);
    } else if (media[i].id === "57") {
      const imgThree = createImg(media[i], "about-img");

      imageParent2.innerHTML = "";
      imageParent2.append(imgThree);
    } else if (media[i].id === "58") {
      const imgFour = createImg(media[i], "about-img");

      imageParent3.innerHTML = "";
      imageParent3.append(imgFour);
    }
  }
}
