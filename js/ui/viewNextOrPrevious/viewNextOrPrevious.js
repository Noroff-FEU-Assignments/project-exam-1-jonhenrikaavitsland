import { getId } from "../../data/getId.js";
import { checkIfLastExist } from "./checkIfLastExist.js";
import { checkIfNextExist } from "./checkIfNextExist.js";
import { createObject } from "./createObject.js";
import { findFeaturedImage } from "./findFeaturedImage.js";
import { getLastId } from "./getLastId.js";
import { getNextId } from "./getNextId.js";
import { renderLink } from "./renderLink.js";

export function viewNextOrPrevious(parent, media, posts) {
  const id = getId();

  // returns "false" if the current post is the oldest, else returns "true".
  const isLastPost = checkIfLastExist(id, posts);
  // returns "false" if the current post is the newest, else returns "true".
  const isNextPost = checkIfNextExist(id, posts);

  // If the post is not newest, this variable holds the id of the next post that is newer than the current one.
  let nextId;
  let nextImgId; /* The id of the featured img for the newer post */
  let nextObject; /* Contains the object to render */
  if (isNextPost) {
    nextId = getNextId(id, posts);
    nextImgId = findFeaturedImage(nextId, posts);
    nextObject = createObject(media, nextImgId, posts, nextId, "next");
    renderLink(parent, nextObject);
  }

  // If the post is not oldest, this variable holds the id of the previous post.
  let lastId;
  let lastImgId; /* The id of the featured img for the previous post */
  let lastObject; /* Contains the object to render */
  if (isLastPost) {
    lastId = getLastId(id, posts);
    lastImgId = findFeaturedImage(lastId, posts);
    lastObject = createObject(media, lastImgId, posts, lastId, "previous");
    renderLink(parent, lastObject);
  }
}




