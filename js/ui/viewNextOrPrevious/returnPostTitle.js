export function returnPostTitle(posts, id) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      return posts[i].title;
    }
  }
}
