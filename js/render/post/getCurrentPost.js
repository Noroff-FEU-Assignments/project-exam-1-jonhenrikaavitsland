import { getId } from "../../data/getId.js";
import { postsObjectTotal } from "../../api/fetch/posts.js";
import { extractCurrentPost } from "./extractCurrentPost.js";

export function getCurrentPost() {
  const postId = getId();

  const post = extractCurrentPost(postsObjectTotal, postId);
  return post;
}
