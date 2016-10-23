'use strict'

import test from 'ava';

import {Application} from 'spectron';

let app;

test.beforeEach(t => {
  app = new Application({
    path: '/Users/saiph/Documents/projects/pomodoro.cc-mac/Pomodoro-darwin-x64/Pomodoro.app/Contents/MacOS/Pomodoro'
  })
  return app.start()
});

test.afterEach(t => {
  if (app && app.isRunning()) {
    return app.stop()
  }
});

test('launches 1 window with https://pomodoro.cc', t => {
  return app.client
  .getWindowCount().then(function (count) {
    t.is(count, 1);
  })
  .getUrl().then(function(url) {
    t.is(url, 'https://pomodoro.cc/');
  });
});
