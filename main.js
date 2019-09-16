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

  setInterval(() => {
    if (!app.tray || app.tray.isDestroyed()) return
    const title = app.window.getTitle()
    const timerMatch = title.match(/^(\d{2}:\d{2})/gi)
    const newTitle = timerMatch && timerMatch[0] ? timerMatch[0] : ''
    app.tray.setTitle(newTitle)
  }, 1000)

  app.window.webContents.on('will-navigate', utils.openUrlInExternalWindow)
  app.window.webContents.on('new-window', utils.openUrlInExternalWindow)
})
