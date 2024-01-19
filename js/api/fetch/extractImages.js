export function extractImages(content) {
  let images = [];
  for (let i = 0; i < content.length; i++) {
    if (content[i].id === 55) {
      const media = {
        id: `${content[i].id}`,
        title: `${content[i].title.rendered}`,
        altText: `${content[i].alt_text}`,
        urlMedium: `${content[i].media_details.sizes.medium.source_url}`,
        urlFull: `${content[i].media_details.sizes.full.source_url}`,
        thumbnail: `${content[i].media_details.sizes.thumbnail.source_url}`,
      };
      images.push(media);
    }
  }
  return images;
}
