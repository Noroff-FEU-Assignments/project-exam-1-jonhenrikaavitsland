import { ERROR_NO_PARENT } from "../../errorHandling/errors.js";

export function renderViewMoreLink(parent) {
  if (!parent) throw ERROR_NO_PARENT;

  const element = document.createElement("div");
  element.classList.add("cta-view-more", "flex", "link-home-wrap");

  const link = document.createElement("a");
  link.href = "./blog/";
  link.textContent = "view more";
  link.classList.add("cta", "cta-home");
  element.append(link);

  parent.append(element);
}
