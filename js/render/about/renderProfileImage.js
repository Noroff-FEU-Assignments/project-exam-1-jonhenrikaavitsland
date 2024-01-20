export function renderProfileImage(media, parent) {
  for (let i = 0; i < media.length; i++) {
    if (media[i].id === "55") {
      const element = document.createElement("img");
      element.src = media[i].urlMedium;
      element.setAttribute("alt", media[i].altText);
      element.classList.add("profile-img", "cursor");
      parent.append(element);
    }
  }
}
