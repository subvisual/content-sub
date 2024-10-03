import DOMPurify from "isomorphic-dompurify";

// TODO: add the actual chapter names instead chapter1, 2, 3...
export function sanitizeAndAddChapters(content_html: string) {
  let sectionCounter = 1;

  return DOMPurify.sanitize(content_html)
    .replace(/<h[1-6]>/g, () => {
      return `<h5 id="chapter${sectionCounter++}">`;
    })
    .replace(/<\/h[1-6]>/g, "</h5>")
    .replace(/%nbsp;/g, " ")
    .replace(/<p>\s*<\/p>/g, "");
}
