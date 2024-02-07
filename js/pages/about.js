import { mediaObjects } from "../api/fetch/media.js";
import { clearParent } from "../data/clearParent.js";
import { renderError } from "../errorHandling/renderError.js";
import { renderAboutImages } from "../render/about/renderAboutImages..js";
import { renderProfileImage } from "../render/about/renderProfileImage.js";
import { displayModal } from "../ui/modal/modal.js";

const profileImgParent = document.querySelector(".profile-img-container");
const mainParent = document.querySelector("main");

try {
  clearParent(profileImgParent);
  renderProfileImage(mediaObjects, profileImgParent);
} catch (error) {
  renderError(error, profileImgParent);
  console.log(
    "Oops! it looks like something went wrong when attempting to fetch and display the profile-img.",
    error
  );
}

try {
  renderAboutImages(mediaObjects);
} catch (error) {
  renderError(error, profileImgParent);
  console.log(
    "Oops! it looks like something went wrong when attempting to fetch and display the images",
    error
  );
}

try {
  displayModal();
} catch (error) {
  renderError(error, mainParent);
  console.log("Oops! Something went wrong trying to open the modal!");
}
