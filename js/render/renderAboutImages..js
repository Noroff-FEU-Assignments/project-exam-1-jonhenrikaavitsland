import { createImg } from "./createImg.js";

export function renderAboutImages(media) {
  const imageParent1 = document.querySelector(".about-part-2 div");
  const imageParent2 = document.querySelector(".about-part-3 div");
  const imageParent3 = document.querySelector(".about-part-4 div");

  for (let i = 0; i < media.length; i++) {
    if (media[i].id === "56") {
      const imgTwo = createImg(media[i]);
      imageParent1.innerHTML = "";
      imageParent1.append(imgTwo);
    } else if (media[i].id === "57") {
      const imgThree = createImg(media[i]);
      imageParent2.innerHTML = "";
      imageParent2.append(imgThree);
    } else if (media[i].id === "58") {
      const imgFour = createImg(media[i]);
      imageParent3.innerHTML = "";
      imageParent3.append(imgFour);
    }
  }
}
