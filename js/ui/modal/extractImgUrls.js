export function extractImgUrls(html) {
  const htmlPattern = /<img[^>]*src="([^"]+)"/g;
  const imageUrls = [...html.matchAll(htmlPattern)].map(match => match[1]);
  return imageUrls;
}
