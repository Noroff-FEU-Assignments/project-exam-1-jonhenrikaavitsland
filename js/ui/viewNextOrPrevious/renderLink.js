export function renderLink(parent, object) {
  const element = document.createElement("div");
  element.classList.add("link-prev-next");

  const wrap = document.createElement("div");
  wrap.classList.add("flex");
  element.append(wrap);

  const image = document.createElement("img");
  image.src = object[0].thumbnail;
  image.setAttribute("alt", object[0].altText);
  wrap.append(image);

  const section = document.createElement("section");
  wrap.append(section);

  const heading = document.createElement("h2");
  heading.textContent = `${object[0].direction} post`;
  section.append(heading);

  const title = document.createElement("h3");
  title.textContent = object[0].postTitle;
  section.append(title);

  const linkWrap = document.createElement("div");
  section.append(linkWrap);

  const link = document.createElement("a");
  link.textContent = "read now";
  link.href = object[0].link;
  linkWrap.append(link);

  const paw = document.createElement("i");
  paw.classList.add("fa-solid", "fa-paw-claws");
  link.append(paw);

  parent.append(element);
}
