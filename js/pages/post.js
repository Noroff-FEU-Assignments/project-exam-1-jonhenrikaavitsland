import { post } from "../render/post/currentPost.js";
import { renderPost } from "../render/post/renderPost.js";
import { renderH1 } from "../render/post/renderh1.js";
import { returnBlogObject } from "../render/post/returnBlogObject.js";
import { setTitleTagAndSetMainId } from "../render/post/setTitleTag.js";
import { displayModal } from "../ui/modal/modal.js";

const postObject = returnBlogObject(post.contentRendered);

const parent1 = document.querySelector(".post-parent-1");
const parent2 = document.querySelector(".post-parent-2");
const parent3 = document.querySelector(".post-parent-3");
const parent4 = document.querySelector(".post-parent-4");

displayModal();

try {
  setTitleTagAndSetMainId(post);
  renderH1(post);
  renderPost(postObject[0], parent1);
  renderPost(postObject[1], parent2);
  renderPost(postObject[2], parent3);
  renderPost(postObject[3], parent4);
} catch (error) {
  console.log("Oops! There was an error displaying the blog post", error);
}