import generateStupidName from 'sillyname'

// shamelessly copied from:
// http://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time-eg-2-seconds-ago-one-week-ago-etc-best
export function timeDifference(current, previous) {

  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute / 3) {
    return 'just now'
  }

  if (elapsed < msPerMinute) {
    return 'less than 1 min ago'
  }

  else if (elapsed < msPerHour) {
    return Math.round(elapsed/msPerMinute) + ' min ago';
  }

  else if (elapsed < msPerDay ) {
    return Math.round(elapsed/msPerHour ) + ' h ago';
  }

  else if (elapsed < msPerMonth) {
    return Math.round(elapsed/msPerDay) + ' days ago';
  }

  else if (elapsed < msPerYear) {
    return Math.round(elapsed/msPerMonth) + ' mo ago';
  }

  else {
    return Math.round(elapsed/msPerYear ) + ' years ago';
  }
}

export function timeDifferenceForDate(date) {
  const now = new Date().getTime()
  const updated = new Date(date).getTime()
  return timeDifference(now, updated)
}

export function sortConversationByDateCreated(conversation1, conversation2) {

  const lastMessage1 = conversation1.messages[0]
  const lastMessage2 = conversation2.messages[0]

  if (!lastMessage1 || !lastMessage2) {
    return 0
  }

  const date1 = new Date(lastMessage1.createdAt).getTime()
  const date2 = new Date(lastMessage2.createdAt).getTime()
  if (date1 > date2) {
    return -1
  }
  if (date1 < date2) {
    return 1
  }
  return 0

}

export function generateShortStupidName(maxLength) {
  const username = generateStupidName()
  if (username.length > maxLength) {
    return generateShortStupidName(maxLength)
  }
  const usernameWithoutSpace = username.replace(' ', '-')
  return usernameWithoutSpace
}