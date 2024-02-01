import { mediaObjects } from "../../api/fetch/media.js";
import { listOfImgUrls } from "./listOfImages.js";
import { createModal } from "./createModal.js";
import { closeModal } from "./closeModal.js";
import { pagesObject } from "../../api/fetch/pages.js";
import { extractImages } from "../../render/post/extractImages.js";
import { post } from "../../render/post/currentPost.js";
import { renderError } from "../../errorHandling/renderError.js";
import {
  ERROR_CREATE_MODAL,
  ERROR_NO_PARENT,
} from "../../errorHandling/errors.js";

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

      if (!modalParent) throw ERROR_NO_PARENT;
      if (!modalContainer) throw ERROR_NO_PARENT;
      if (!overlay) throw ERROR_NO_PARENT;
      if (!modalElement) throw ERROR_CREATE_MODAL;
      if (!closeBtn) throw ERROR_NO_PARENT;

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
        renderError(error, modalParent);
        console.log("Oops! There was an error trying to display modal", error);
      }
    }
  });
}
