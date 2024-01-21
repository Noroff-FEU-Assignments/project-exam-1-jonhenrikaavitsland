import { post } from "../render/post/currentPost.js";
import { returnBlogObject } from "../render/post/returnBlogObject.js";

let postObject = returnBlogObject(post.contentRendered);
console.log(postObject);
