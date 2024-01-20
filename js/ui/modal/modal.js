// import { mediaObjects } from "../../api/fetch/media.js";

// export function displayModal() {
//   let imageId = 0;

//   document.body.addEventListener("click", function (event) {
//     const target = event.target;
//     console.log(target);
//     console.log(imageId);

//     if (target.tagName === "IMG") {
//       imageId = target.id;

//       // Display modal based on currentImageGroup
//       const modalElement = createModal(mediaObjects, imageId);
//       console.log(modalElement.innerHTML);

//       const modalParent = document.querySelector(".modal-parent");
//       const modalContainer = document.querySelector(".modal-container");
//       const overlay = document.querySelector(".overlay");

//       try {
//         modalContainer.classList.remove("hidden");
//         overlay.classList.remove("hidden");
//         modalParent.innerHTML = "";
//         modalParent.append(modalElement);
//         document.body.style.overflow = "hidden";
//       } catch (error) {
//         console.log("Oops! There was an error when trying to display images");
//       }
//     }
//   });
// }

// export function createModal(images, id) {
//   const element = document.createElement("div");

//   let bigImage = document.createElement("img");
//   for (let i = 0; i < images.length; i++) {
//     if (images[i].id === id) {
//       bigImage.src = `${images[i].urlFull}`;
//       bigImage.setAttribute("alt", `${images[i].altText}`);
//     }
//   }
//   element.append(bigImage);

//   return element;
// }

// PROCESS TO MAKE MODAL WORK:

// 1. GATHER THE ID FROM CLICKED IMAGE
// 2. FIND WHAT IMAGES BELONG ON THE SAME PAGE
// 3. WRITE CODE TO RENDER A MODAL ELEMENT DISPLAYING THOSE IMAGES
// 4. EXECUTE THIS CODE SUCCESSFULLY.
