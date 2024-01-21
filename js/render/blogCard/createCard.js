export function createCard(post, media) {
  const linkUrl = `/blog/post/?id=${post.id}`;

  const element = document.createElement("div");
  element.classList.add("card-container", "cursor");
  element.addEventListener("click", function () {
    window.location.href = linkUrl;
  });

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("card-img-container");
  element.append(imageContainer);

  const image = document.createElement("img");
  for (let i = 0; i < media.length; i++) {
    if (post.featuredMedia === media[i].id) {
      image.src = `${media[i].urlFull}`;
      image.setAttribute("alt", media[i].altText);
    }
  }
  imageContainer.append(image);

  const overlay = document.createElement("div");
  overlay.classList.add("card-overlay", "flex");
  imageContainer.append(overlay);

  const heading = document.createElement("h2");
  heading.textContent = post.title;
  heading.classList.add("card-heading");
  overlay.append(heading);

  const excerptContainer = document.createElement("div");
  excerptContainer.classList.add("card-excerpt-container", "flex");
  element.append(excerptContainer);

  const excerptText = document.createElement("p");
  excerptText.innerHTML = post.excerpt;
  excerptContainer.append(excerptText);

  const bottomContainer = document.createElement("div");
  bottomContainer.classList.add("flex", "card-bottom-wrap");
  element.append(bottomContainer);

  const time = document.createElement("time");
  time.setAttribute("datetime", post.date);
  time.classList.add("card-time");
  time.textContent = post.date.split("T")[0];
  bottomContainer.append(time);

  const link = document.createElement("a");
  link.textContent = "read more ";
  link.classList.add("cta-card", "flex");
  link.href = linkUrl;
  bottomContainer.append(link);

  const icon = document.createElement("i");
  icon.classList.add("fa-duotone", "fa-paw-claws");
  link.append(icon);

  return element;
}
