export function estimateReadTime(text: string): string {
  const WPM = 250
  const wordCount = text.split(/\s+/).length
  const readTimeMinutes = Math.ceil(wordCount / WPM)

  return `${readTimeMinutes} min read`
}
