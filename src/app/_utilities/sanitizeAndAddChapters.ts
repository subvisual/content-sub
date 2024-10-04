import DOMPurify from 'isomorphic-dompurify'

// TODO: add the actual chapter names instead chapter1, 2, 3...
export function sanitizeAndAddChapters(content_html: string) {
  let sectionCounter = 1

  return DOMPurify.sanitize(content_html)
    .replace(/<h[1-6]>/g, () => {
      return `<h5 id="chapter${sectionCounter++}">`
    })
    .replace(/<\/h[1-6]>/g, '</h5>')
    .replace(/%nbsp;/g, ' ')
    .replace(/<p>\s*<\/p>/g, '')
}

export function getChapters(content_html: string) {
  const sanitizedContent = sanitizeAndAddChapters(content_html)
  return [...sanitizedContent.matchAll(/<h[1-6] id="([^"]*)">(.*?)<\/h[1-6]>/g)].map(match => ({
    id: match[1],
    title: match[2],
  }))
}
