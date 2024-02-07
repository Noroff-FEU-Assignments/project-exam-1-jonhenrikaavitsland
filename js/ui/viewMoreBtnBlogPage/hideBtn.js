export function hideBtn(posts, parent) {
  const viewMoreBtn = document.querySelector(".cta-view-more");
  parent.removeChild(viewMoreBtn);
  if (posts.length === 10) {
    parent.appendChild(viewMoreBtn);
  }
}
