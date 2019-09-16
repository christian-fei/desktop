import path from 'path'
import test from 'ava'

import { Application } from 'spectron'

let app

test.before(() => {
  app = new Application({
    path: path.resolve(__filename, '../../Pomodoro-darwin-x64/Pomodoro.app/Contents/MacOS/Pomodoro')
  })
  return app.start()
})

test.after(() => {
  if (app && app.isRunning()) {
    return app.stop()
  }
})

test.serial('launches 1 window with https://pomodoro.cc', async t => {
  const client = app.client
  t.is(await client.getWindowCount(), 1)
  t.is(await client.getUrl(), 'https://pomodoro.cc/')
})

test.serial('opens external links in new window', async t => {
  const client = app.client
  await client.waitForVisible('#root', 10000)
  await client.click('.navigation-bar a:nth-child(4)')

  t.is(await client.getWindowCount(), 1)
  t.is(await client.getUrl(), 'https://pomodoro.cc/')
})
