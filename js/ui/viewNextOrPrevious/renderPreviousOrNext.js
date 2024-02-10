import { redirect } from "../../redirect/redirect.js";

export function renderPreviousOrNext(direction, id, media, posts, useId) {
  const element = document.createElement("div");
  element.addEventListener("click", function () {
    const url = "/blog/post/?id=" + useId;
    redirect(url);
  });

  const image = document.createElement("img");
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].featuredMedia === useId) {
      for (let k = 0; k < media.length; k++) {
        if (posts[i].featuredMedia === media[k].id) {
          image.src = `${media[k].thumbnail}`;
          image.setAttribute("alt", media[k].altText);
        }
      }
    }
  }

  element.append(image);

  return element;
}
