export function createImg(media) {
  const element = document.createElement("img");
  element.src = media.urlMedium;
  element.setAttribute("alt", media.altText);
  element.classList.add("about-img");
  element.setAttribute("id", media.id);
  return element;
}
