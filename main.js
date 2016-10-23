'use strict';
const menubar = require('menubar');
const utils = require('./utils');

const app = menubar({
	width: 470,
	height: 500,
	preloadWindow: true
});

app.on('after-create-window', () => {
	app.window.loadURL('https://pomodoro.cc');
	let webContents = app.window.webContents;
	webContents.on('will-navigate', function (event, url) {
		if (url === 'https://pomodoro.cc/docs') {
			utils.openUrlInExternalWindow(event, url);
		}
	});

	webContents.on('new-window', utils.openUrlInExternalWindow);
});
