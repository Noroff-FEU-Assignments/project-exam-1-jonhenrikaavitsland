import { ERROR_NO_MEDIA, ERROR_NO_PARENT } from "../../errorHandling/errors.js";

export function renderHero(images) {
  if (!images) throw ERROR_NO_MEDIA;

  const parent = document.querySelector(".hero-img");

  if (!parent) throw ERROR_NO_PARENT;

  console.log(images[0]);
  for (let i = 0; i < images.length; i++) {
    if (images[i].id === "134") {
      const heroImg = document.createElement("img");
      heroImg.src = images[i].urlFull;
      heroImg.setAttribute("alt", images[i].altText);
      parent.append(heroImg);

      const overlay = document.createElement("div");
      overlay.classList.add("hero-overlay");
      parent.append(overlay);
    }
  }
}
