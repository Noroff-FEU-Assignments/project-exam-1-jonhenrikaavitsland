export function checkIfLastExist(id, posts) {
  const postsLength = posts.length;
  if (id !== posts[postsLength - 1].id) {
    return true;
  }
}
