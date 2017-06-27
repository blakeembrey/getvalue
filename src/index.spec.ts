import test = require('blue-tape')
import { get } from './index'

test('getvalue', t => {
  const test: { missing?: { prop?: number } } = {}

  t.equal(get({ a: { b: { c: 10 } } }, ['a', 'b', 'c']), 10)
  t.equal(get(test, ['missing', 'prop']), undefined)
  t.equal(get(test, ['missing', 'prop'], 10), 10)
  t.end()
})
