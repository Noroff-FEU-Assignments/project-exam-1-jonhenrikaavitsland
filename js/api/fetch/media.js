import { fetchData } from "../fetchData.js";
import { urlMedia } from "../constants.js";
import { extractImages } from "./extractImages.js";

const mediaContents = await fetchData(urlMedia);

export const mediaObjects = extractImages(mediaContents);
