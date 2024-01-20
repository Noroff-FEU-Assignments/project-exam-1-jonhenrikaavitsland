// import { getId } from "../../api/data/getId.js";
import { postsObject } from "../../api/fetch/posts.js";
import { extractCurrentPost } from "./extractCurrentPost.js";

export function getCurrentPost() {
  // const postId = getId();
  const postId = "62";

  const post = extractCurrentPost(postsObject, postId);
  return post;
}
