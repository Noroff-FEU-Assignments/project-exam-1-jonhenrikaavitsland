import { domParser } from "../../data/domParser.js";
import { extractInnerHtml } from "../../data/extraxctInnerHtml.js";

export function extractPosts(data) {
  let postsObject = [];
  for (let i = 0; i < data.length; i++) {
    const parsedExcerpt = domParser(data[i].excerpt.rendered);
    const newExcerpt = extractInnerHtml(parsedExcerpt);
    const post = {
      id: `${data[i].id}`,
      date: `${data[i].date}`,
      excerpt: `${newExcerpt}`,
      featuredMedia: `${data[i].featured_media}`,
      title: `${data[i].title.rendered}`,
      contentRendered: `${data[i].content.rendered}`,
    };
    postsObject.push(post);
  }
  return postsObject;
}
