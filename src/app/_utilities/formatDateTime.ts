export const formatDateTime = (timestamp): string => {
  const now = new Date()
  let date = now
  if (timestamp) date = new Date(timestamp)

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const months = date.getMonth()
  const days = date.getDate()
  const YYYY = date.getFullYear()

  const monthName = monthNames[months]
  const DD = days < 10 ? `0${days}` : days

  return `${monthName} ${DD}, ${YYYY}`
}
