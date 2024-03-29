import { urlPosts, urlPostsPage2, urlPostsTotal } from "../constants.js";
import { fetchData } from "../fetchData.js";
import { extractPosts } from "./extractPosts.js";
import { getGroupOfTwoPosts } from "./getGroupsOfTwoPosts.js";
import { getSixPosts } from "./getSixPosts.js";

const posts = await fetchData(urlPosts);
const postsPage2 = await fetchData(urlPostsPage2);
const postsTotal = await fetchData(urlPostsTotal);

export const postsObject = extractPosts(posts);
export const postsObjectPage2 = extractPosts(postsPage2);
export const postsObjectTotal = extractPosts(postsTotal);

export const fourPosts = getSixPosts(postsObject);

export const groupsOfTwoPosts = getGroupOfTwoPosts(postsObject);
