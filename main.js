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
	app.window.webContents.on('will-navigate', utils.openUrlInExternalWindow);
	app.window.webContents.on('new-window', utils.openUrlInExternalWindow);
});
