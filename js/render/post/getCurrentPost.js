import { getId } from "../../api/data/getId.js";
import { postsObject } from "../../api/fetch/posts.js";
import { extractCurrentPost } from "./extractCurrentPost.js";

export function getCurrentPost() {
  const postId = getId();

  const post = extractCurrentPost(postsObject, postId);
  return post;
}
