import { ERROR_NO_PARENT } from "../../errorHandling/errors.js";

export function renderHeroLink() {
  const parent = document.querySelector(".hero-bottom");

  if (!parent) throw ERROR_NO_PARENT;

  const link = document.createElement("a");
  link.classList.add("flex");
  link.href = "./about/";

  const linkText = document.createElement("h2");
  linkText.textContent = "Meet Keeper Evans";
  link.append(linkText);

  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-paw-claws");
  link.append(icon);

  parent.append(link);
}
