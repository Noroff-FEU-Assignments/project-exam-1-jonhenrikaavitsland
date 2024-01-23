export function getSixPosts(posts) {
  let ListOfPosts = [];

  for (let i = 0; i < 6; i++) {
    ListOfPosts.push(posts[i]);
  }
  return ListOfPosts;
}
