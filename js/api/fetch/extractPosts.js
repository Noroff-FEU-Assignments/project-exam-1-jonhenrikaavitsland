export function extractPosts(data) {
  let postsObject = [];
  for (let i = 0; i < data.length; i++) {
    const post = {
      id: `${data[i].id}`,
      date: `${data[i].date}`,
      excerpt: `${data[i].excerpt.rendered}`,
      featuredMedia: `${data[i].featured_media}`,
      title: `${data[i].title.rendered}`,
      contentRendered: `${data[i].content.rendered}`,
    };
    postsObject.push(post);
  }
  return postsObject;
}
