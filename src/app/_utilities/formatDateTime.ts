export const formatDateTime = (timestamp: string): string => {
  const now = new Date()
  let date = now
  if (timestamp) date = new Date(timestamp)

  // Array of full month names
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

  const months = date.getMonth() // 0-based index
  const days = date.getDate()
  const YYYY = date.getFullYear()

  const monthName = monthNames[months] // Get the full name of the month
  const DD = days < 10 ? `0${days}` : days // Add leading zero to day if needed

  return `${monthName} ${DD}, ${YYYY}`
}
