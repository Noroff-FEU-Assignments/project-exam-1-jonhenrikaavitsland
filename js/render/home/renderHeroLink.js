export function renderHeroLink() {
  const parent = document.querySelector(".hero-bottom");

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
