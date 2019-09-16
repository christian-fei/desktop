const utils = require('./utils')
const { menubar } = require('menubar')

const app = menubar({
  options: {
    browserWindow: {
      width: 470,
      height: 500
    }
  },
  preloadWindow: true
})

app.on('after-create-window', () => {
  app.window.loadURL('https://pomodoro.cc')
  // if (app.tray && typeof app.tray.setTitle === 'function') {
  //   app.tray.setTitle('x')
  // }
  app.window.webContents.on('will-navigate', utils.openUrlInExternalWindow)
  app.window.webContents.on('new-window', utils.openUrlInExternalWindow)
  app.window.webContents.on('after-create-window', () => {
    app.window.openDevTools()
  })
})
