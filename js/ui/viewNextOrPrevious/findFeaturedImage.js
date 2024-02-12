export function findFeaturedImage(id, posts) {
  for (let i = 0; i < posts.length; i++) {
    if (id === posts[i].id) {
      return posts[i].featuredMedia;
    }
  }
}
