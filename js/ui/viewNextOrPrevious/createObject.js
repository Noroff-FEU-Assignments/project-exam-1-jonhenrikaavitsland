import { returnPostTitle } from "./returnPostTitle.js";
import { returnThumbnailPath } from "./returnThumbnailPath.js";

export function createObject(media, imgID, posts, id, direction) {
  let array = [];
  const object = {
    thumbnail: returnThumbnailPath(media, imgID),
    postTitle: returnPostTitle(posts, id),
    direction: direction,
    link: `/blog/post/?id=${id}`,
  };
  array.push(object);
  return array;
}
