import test = require('blue-tape')
import { get } from './index'

test('getvalue', t => {
  const test: { missing?: { prop?: number } } = {}

  t.equal(get({ a: { b: { c: 10 } } }, ['a', 'b', 'c']), 10)
  t.equal(get(test, ['missing', 'prop']), undefined)
  t.equal(get(test, ['missing', 'prop'], 10), 10)
  t.end()
})

test('getArray', t => {
  const test: { missing?: { prop?: number } } = {}

  t.equal(get({ a: { b: { c: [ { d: 1 } ] } } }, ['a', 'b', 'c', '0', 'd']), 1)
  t.equal(get({ a: { b: { c: [ { d: 1 } ] } } }, ['a', 'b', 'c', '2', 'd']), undefined)
  t.equal(get(test, ['missing', 'prop']), undefined)
  t.end()
})
