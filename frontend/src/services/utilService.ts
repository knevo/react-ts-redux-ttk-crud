
export const formatDate = (date: string | number | Date, options: { includeTime?: boolean, includeSeconds?: boolean } = {}) => {
  if (typeof date === 'string' || typeof date === 'number') date = new Date(date)
  const now = new Date()
  if (now.getFullYear() === date.getFullYear()) {
    if (now.getDate() === date.getDate() && now.getMonth() === date.getMonth()) {
      return date.toTimeString().substr(0, 5)
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }).split(' ').reverse().join(' ')
    }
  } else {
    var timeStr = date.toTimeString()
    timeStr = options.includeSeconds ? timeStr.substr(0, 8) : timeStr.substr(0, 5)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${options.includeTime ? timeStr : ''}`
  }
}