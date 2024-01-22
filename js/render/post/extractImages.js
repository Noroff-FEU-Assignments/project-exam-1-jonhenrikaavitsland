export function extractImages(data) {
  const regex = /src="([^"]*-\d{1,4}x\d{1,4}\.\w{3,4})"/g;
  const matches = data.contentRendered.match(regex);

  let images;
  if (matches) {
    images = matches.map(match =>
      match
        .replace(/-\d{1,4}x\d{1,4}/, "")
        .replace(`src="`, "")
        .replace(`"`, "")
    );
  }
  return images;
}
