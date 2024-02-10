import { getId } from "../../data/getId.js";
import { checkIfNextExist } from "./checkIfNextExist.js";
import { checkIfLastExist } from "./checkIfLastExist.js";
import { getLastID } from "./getLastId.js";
import { getNextID } from "./getNextId.js";
import { renderPreviousOrNext } from "./renderPreviousOrNext.js";

export function viewNextOrPrevious(parent, media, posts) {
  const id = getId();
  console.log(posts);
  console.log(media);

  const isNextTrue = checkIfNextExist(id, posts);
  const isLastTrue = checkIfLastExist(id, posts);
  const newerPost = "next";
  const previousPost = "last";
  const nextId = getNextID(id, posts);
  const lastId = getLastID(id, posts);
  console.log(nextId);
  console.log(lastId);

  if (isNextTrue) {
    const nextPost = renderPreviousOrNext(newerPost, id, media, posts, nextId);
    parent.append(nextPost);
  }
  if (isLastTrue) {
    const prevPost = renderPreviousOrNext(
      previousPost,
      id,
      media,
      posts,
      lastId
    );
    parent.append(prevPost);
  }
}
