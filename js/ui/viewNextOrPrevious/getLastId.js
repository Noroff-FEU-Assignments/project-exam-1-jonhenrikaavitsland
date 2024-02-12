export function getLastId(id, posts) {
  let lastId = 0;
  for (let i = 0; i < posts.length; i++) {
    if (id === posts[i].id && posts[i + 1]) {
      lastId = posts[i + 1].id;
      break; // exit the loop once the next ID is found
    }
  }
  return lastId;
}
