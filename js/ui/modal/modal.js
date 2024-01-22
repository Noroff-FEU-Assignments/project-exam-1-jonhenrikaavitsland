import { mediaObjects } from "../../api/fetch/media.js";
import { listOfImgUrls } from "./listOfImages.js";
import { createModal } from "./createModal.js";
import { closeModal } from "./closeModal.js";
import { pagesObject } from "../../api/fetch/pages.js";
import { extractImages } from "../../render/post/extractImages.js";
import { post } from "../../render/post/currentPost.js";

export function displayModal() {
  let listOfImg;
  let clickedImg;
  document.body.addEventListener("click", function (event) {
    const target = event.target;

    if (target.tagName === "IMG") {
      clickedImg = target.src.replace(/-300x300/, "");

      if (location.pathname === "/about/") {
        listOfImg = listOfImgUrls(pagesObject);
      } else if (location.pathname === "/blog/post/") {
        listOfImg = extractImages(post);
      }

      const modalParent = document.querySelector(".modal-parent");
      const modalContainer = document.querySelector(".modal-container");
      const overlay = document.querySelector(".modal-bg");
      const modalElement = createModal(listOfImg, clickedImg, mediaObjects);
      const closeBtn = document.querySelector(".close-modal");

      try {
        modalContainer.classList.remove("hidden");
        overlay.classList.remove("hidden");
        document.body.classList.add("modal-open");
        modalParent.innerHTML = "";
        modalParent.append(modalElement);
        modalContainer.style.top = window.scrollY + "px";
        overlay.style.top = window.scrollY + "px";
        closeBtn.addEventListener("click", closeModal);
        overlay.addEventListener("click", closeModal);
      } catch (error) {
        console.log("Oops! There was an error trying to display modal");
      }
    }
  });
}
