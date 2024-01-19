import { mediaObjects } from "../api/fetch/media.js";
import { renderProfileImage } from "../render/renderProfileImage.js";

const profileImgParent = document.querySelector(".profile-img-container");

try {
  profileImgParent.innerHTML = "";
  renderProfileImage(mediaObjects, profileImgParent);
} catch (error) {
  console.log(
    "Oops! it looks like something went wrong when attempting to fetch and display the profile-img.",
    error
  );
}
