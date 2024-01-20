export function createImg(media, string) {
  const element = document.createElement("img");
  element.src = media.urlMedium;
  element.setAttribute("alt", media.altText);
  element.classList.add(`${string}`, "cursor");
  return element;
}
