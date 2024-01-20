import { pagesObject } from "../../api/fetch/pages.js";
import { extractImgUrls } from "./extractImgUrls.js";

export function listOfImgUrls() {
  const pageID = document.querySelector("main").id;
  let images;

  for (let i = 0; i < pagesObject.length; i++) {
    if (pagesObject[i].id === pageID) {
      images = extractImgUrls(pagesObject[i].contentRendered);
    }
  }
  return images;
}
