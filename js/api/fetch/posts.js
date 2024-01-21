import { urlPosts } from "../constants.js";
import { fetchData } from "../fetchData.js";
import { extractPosts } from "./extractPosts.js";

const posts = await fetchData(urlPosts);

export const postsObject = extractPosts(posts);
