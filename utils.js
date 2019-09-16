const shell = require('electron').shell
const pomodoroRegExp = /^https?:\/\/pomodoro\.cc/

const isExternalLink = url => {
  console.log('url', url)
  const isInternalLink = pomodoroRegExp.test(url) && url !== 'https://pomodoro.cc/docs'
  return !isInternalLink
}
const openUrlInExternalWindow = (event, url) => {
  if (isExternalLink(url)) {
    return false
  }

  if (!pomodoroRegExp.test(url)) {
    event.preventDefault()
    shell.openExternal(url)
  }
}

module.exports = {
  isExternalLink: isExternalLink,
  openUrlInExternalWindow: openUrlInExternalWindow
}
