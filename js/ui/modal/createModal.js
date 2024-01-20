export function createModal(images, featuredImg, media) {
  const element = document.createElement("div");

  let bigImage = document.createElement("img");
  bigImage.src = featuredImg;
  for (let i = 0; i < images.length; i++) {
    if (featuredImg === media.urlFull) {
      bigImage.setAttribute("alt", `${images.altText}`);
    }
  }
  element.append(bigImage);

  const smallImagesContainer = document.createElement("div");
  smallImagesContainer.classList.add("flex", "modal-small-container");
  smallImagesContainer.style.margin = "20px 0 0 0";
  element.append(smallImagesContainer);

  for (let k = 0; k < images.length; k++) {
    const smallImage = document.createElement("img");
    smallImage.src = `${images[k]}`;
    for (let y = 0; y < images.length; y++) {
      if (images[k] === media[y].urlFull) {
        smallImage.setAttribute("alt", `${media[k].altText}`);
      }
      if (images[k] !== featuredImg) {
        smallImage.style.filter = "blur(2px)";
      }
    }
    smallImage.style.height = "50px";
    smallImage.style.borderRadius = "10px";
    smallImage.style.margin = "0 auto";
    smallImagesContainer.append(smallImage);
  }

  return element;
}
