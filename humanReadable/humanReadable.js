/*
Write a function, which takes a non-negative integer (seconds) as input and returns 
the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600)
  const restHours = seconds % 3600
  const minutes = Math.floor(restHours / 60)
  const secs = seconds % 60

  const formatHours = hours < 10 ? `0${hours}` : hours
  const formatMinutes = minutes < 10 ? `0${minutes}` : minutes
  const formatSeconds = secs < 10 ? `0${secs}` : secs

  return `${formatHours}:${formatMinutes}:${formatSeconds}`
}
