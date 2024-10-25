export function estimateReadTime(text: string | null): string {
  const WPM = 250
  const wordCount = text.split(/\s+/).length
  const readTimeMinutes = Math.ceil(wordCount / WPM)

  return `${readTimeMinutes} min read`
}
