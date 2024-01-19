export function renderProfileImage(media, parent) {
  const element = document.createElement("img");
  element.src = media[0].urlMedium;
  element.setAttribute("alt", media[0].altText);
  element.classList.add("profile-img");
  parent.append(element);
}
