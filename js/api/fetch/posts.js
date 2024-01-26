import { urlPosts } from "../constants.js";
import { fetchData } from "../fetchData.js";
import { extractPosts } from "./extractPosts.js";
import { getGroupOfTwoPosts } from "./getGroupsOfTwoPosts.js";
import { getSixPosts } from "./getSixPosts.js";

const posts = await fetchData(urlPosts);

export const postsObject = extractPosts(posts);

export const fourPosts = getSixPosts(postsObject);

export const groupsOfTwoPosts = getGroupOfTwoPosts(postsObject);