export function formatEpisodeDuration(duration: number) {
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor(duration / 60)

  const hoursString = hours >= 1 ? `${hours}h` : ''
  return `${hoursString} ${minutes} min`
}
