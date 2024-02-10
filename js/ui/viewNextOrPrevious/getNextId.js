export function getNextID(id, posts) {
  let nextId = 0;
  for (let i = 0; i < posts.length; i++) {
    if (id === posts[i].id && posts[i].id !== posts[0].id) {
      nextId = posts[i - 1].id;
    }
  }
  return nextId;
}
