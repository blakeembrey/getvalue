import test = require('blue-tape')
import { get } from './index'

test('getvalue', t => {
  t.equal(get({ a: { b: { c: 10 } } }, ['a', 'b', 'c']), 10)
  t.equal(get({ nothere: true }, ['here']), undefined)
  t.equal(get({}, ['hey'], true), true)
  t.end()
})
