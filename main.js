'use strict'
const menubar = require('menubar')
var shell = require('electron').shell
const app = menubar({
	width: 470,
	height: 500,
	preloadWindow: true
})

app.on('after-create-window', () => {
	app.window.loadURL('https://pomodoro.cc')
	let webContents = app.window.webContents
	webContents.on('will-navigate', function(event, url) {
		if ('https://pomodoro.cc/docs' === url) {
			warnUserAboutExternalLink(event, url)
		}
	})

	webContents.on('new-window', function(event, url) {
		warnUserAboutExternalLink(event, url)
	})
})

function warnUserAboutExternalLink(event, url) {
	event.preventDefault()
	shell.openExternal(url)
}
