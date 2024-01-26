export function getGroupOfTwoPosts(posts) {
  let groupsOfTwo = [];

  for (let i = 0; i < posts.length; i += 2) {
    if (i + 1 < posts.length) {
      groupsOfTwo.push([posts[i], posts[i + 1]]);
    } else {
      groupsOfTwo.push([posts[i]]);
    }
  }
  return groupsOfTwo;
}
