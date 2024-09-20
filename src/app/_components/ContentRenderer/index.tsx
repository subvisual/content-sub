import DOMpurify from 'dompurify'

export default function ContentRenderer({ content_html }: { content_html: string }) {
  // Sanitize HTML content to prevent XSS vulnerabilities.
  const sanitizedContent = DOMpurify.sanitize(content_html)

  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
}
