import { urlPages } from "../constants.js";
import { fetchData } from "../fetchData.js";
import { extractPages } from "./extractPages.js";

const pages = await fetchData(urlPages);

export const pagesObject = extractPages(pages);
