import { getId } from "../../data/getId.js";
import { checkIfLastExist } from "./checkIfLastExist.js";
import { checkIfNextExist } from "./checkIfNextExist.js";
import { findFeaturedImage } from "./findFeaturedImage.js";
import { getLastId } from "./getLastId.js";
import { getNextId } from "./getNextId.js";

export function viewNextOrPrevious(parent, media, posts) {
  console.log(media);
  console.log(posts);

  const id = getId();
  console.log("current post:", id);

  // returns "false" if the current post is the oldest, else returns "true".
  const isLastPost = checkIfLastExist(id, posts);
  console.log("isLast:", isLastPost);
  // returns "false" if the current post is the newest, else returns "true".
  const isNextPost = checkIfNextExist(id, posts);
  console.log("isNext:", isNextPost);

  // If the post is not oldest, this variable holds the id of the previous post.
  let lastId;
  let lastImgId; /* The id of the featured img for the previous post */
  if (isLastPost) {
    lastId = getLastId(id, posts);
    lastImgId = findFeaturedImage(lastId, posts);
    console.log("lastId:", lastId);
    console.log("lastImgId:", lastImgId);
  }

  // If the post is not newest, this variable holds the id of the next post that is newer than the current one.
  let nextId;
  let nextImgId; /* The id of the featured img for the newer post */
  if (isNextPost) {
    nextId = getNextId(id, posts);
    nextImgId = findFeaturedImage(nextId, posts);
    console.log("nextId:", nextId);
    console.log("nextImgId:", nextImgId);
  }
}

