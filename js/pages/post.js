import { mediaObjects } from "../api/fetch/media.js";
import { postsObjectTotal } from "../api/fetch/posts.js";
import { clearParent } from "../data/clearParent.js";
import { renderError } from "../errorHandling/renderError.js";
import { post } from "../render/post/currentPost.js";
import { postTime } from "../render/post/postTime.js";
import { renderPost } from "../render/post/renderPost.js";
import { renderH1 } from "../render/post/renderh1.js";
import { returnBlogObject } from "../render/post/returnBlogObject.js";
import { setTitleTagAndSetMainId } from "../render/post/setTitleTag.js";
import { displayModal } from "../ui/modal/modal.js";
import { viewNextOrPrevious } from "../ui/viewNextOrPrevious/viewNextOrPrevious.js";

const postObject = returnBlogObject(post.contentRendered);
const errorParent = document.querySelector("main");

const parent1 = document.querySelector(".post-parent-1");
const parent2 = document.querySelector(".post-parent-2");
const parent3 = document.querySelector(".post-parent-3");
const parent4 = document.querySelector(".post-parent-4");
const timeParent = document.querySelector(".post-time");
const viewMoreParent = document.querySelector(".view-more");

try {
  setTitleTagAndSetMainId(post);
} catch (error) {
  renderError(error, errorParent);
  console.log("Oops! Error setting title and id!", error);
}

try {
  clearParent(parent1);
  renderH1(post);
  postTime(post, timeParent);
  renderPost(postObject[0], parent1);
  renderPost(postObject[1], parent2);
  renderPost(postObject[2], parent3);
  renderPost(postObject[3], parent4);
} catch (error) {
  renderError(error, errorParent);
  console.log("Oops! There was an error displaying the blog post", error);
}

try {
  viewNextOrPrevious(viewMoreParent, mediaObjects, postsObjectTotal);
} catch (error) {
  console.log(
    "Oops! Something went wrong when trying to render next and previous links",
    error
  );
}

try {
  displayModal();
} catch (error) {
  renderError(error, errorParent);
  console.log("Oops! There was an error running the modal function!", error);
}
