export function extractPages(pages) {
  let pageObject = [];
  for (let i = 0; i < pages.length; i++) {
    const page = {
      id: `${pages[i].id}`,
      type: "page",
      titleRendered: `${pages[i].title.rendered}`,
      contentRendered: `${pages[i].content.rendered}`,
      featuredMedia: `${pages[i].featured_media}`,
    };
    pageObject.push(page);
  }
  return pageObject;
}
