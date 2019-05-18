'use strict'

import test from 'ava'
import { isExternalLink } from '../../utils'

test('utils.isExternalLink returns false for internal urls', t => {
  t.false(isExternalLink('https://pomodoro.cc'))
  t.false(isExternalLink('https://pomodoro.cc/about'))
})

test('utils.isExternalLink returns false for internal urls with http...', t => {
  t.false(isExternalLink('http://pomodoro.cc'))
  t.false(isExternalLink('http://pomodoro.cc/about'))
})

test('utils.isExternalLink returns false for internal urls except /docs', t => {
  t.true(isExternalLink('https://pomodoro.cc/docs'))
  t.true(isExternalLink('https://medium.com/@pomodoro_cc'))
})
