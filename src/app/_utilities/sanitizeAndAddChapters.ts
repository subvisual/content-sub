import DOMPurify from 'isomorphic-dompurify'

// TODO: add the actual chapter names instead chapter1, 2, 3...
export function sanitizeAndAddChapters(content_html: string) {
  let sectionCounter = 1;

  return DOMPurify.sanitize(content_html)
    .replace(/<h[1-6]>/g, () => `<h5 id="chapter${sectionCounter++}">`)
    .replace(/<\/h[1-6]>/g, '</h5>')
    .replace(/%nbsp;/g, ' ')
    .replace(/<p>\s*<\/p>/g, '');
}

export function getChapters(content_html: string): { id: string; title: string }[] {
  const sanitizedContent = sanitizeAndAddChapters(content_html);
  const regex = /<h[1-6] id="([^"]*)">(.*?)<\/h[1-6]>/g;
  const chapters: { id: string; title: string }[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(sanitizedContent)) !== null) {
    const titleWithTags = match[2];

    // Remove any HTML tags inside the title
    const title = titleWithTags.replace(/<[^>]+>/g, '').trim();

    chapters.push({
      id: match[1],
      title: title,
    });
  }

  return chapters;
}

