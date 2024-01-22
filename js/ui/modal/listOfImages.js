import { extractImgUrls } from "./extractImgUrls.js";

export function listOfImgUrls(object) {
  const pageID = document.querySelector("main").id;
  let images;

  for (let i = 0; i < object.length; i++) {
    if (object[i].id === pageID) {
      images = extractImgUrls(object[i].contentRendered);
    }
  }
  return images;
}
