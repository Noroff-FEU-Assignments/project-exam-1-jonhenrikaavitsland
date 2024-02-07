export const host = "https://zookeepers-journal.aavitsland.no/";

export const endpointMedia = "/wp-json/wp/v2/media";
export const endpointPosts = "/wp-json/wp/v2/posts";
export const endpointPages = "/wp-json/wp/v2/pages";

export const pagination = "?page=1&per_page=100";

export const urlMedia = host + endpointMedia + pagination;
export const urlPages = host + endpointPages + pagination;
export const urlPosts = host + endpointPosts;
export const urlPostsPage2 = host + endpointPosts + "?page=2&per_page=10";

