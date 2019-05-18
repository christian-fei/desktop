'use strict'
const shell = require('electron').shell

const isExternalLink = url => {
  const isInternalLink = /^https?:\/\/pomodoro\.cc/.test(url) && url !== 'https://pomodoro.cc/docs'
  return !isInternalLink
}
const openUrlInExternalWindow = (event, url) => {
  if (isExternalLink(url)) {
    return false
  }

  event.preventDefault()
  shell.openExternal(url)
}

module.exports = {
  isExternalLink: isExternalLink,
  openUrlInExternalWindow: openUrlInExternalWindow
}
