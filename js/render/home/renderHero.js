export function renderHero(images) {
  const parent = document.querySelector(".hero-img");
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
