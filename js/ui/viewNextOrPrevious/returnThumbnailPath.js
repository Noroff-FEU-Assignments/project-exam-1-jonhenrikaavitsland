export function returnThumbnailPath(media, imgID) {
  for (let i = 0; i < media.length; i++) {
    if (media[i].id === imgID) {
      return media[i].thumbnail;
    }
  }
}
