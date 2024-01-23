export function extractInnerHtml(parsedString) {
  // Regex to filter out the html between body tags.
  const regex = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
  const match = parsedString.match(regex);
  const result = match ? match[1] : "";
  return result;
}
