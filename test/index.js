import test from 'ava'
import assign from '../'

test('should throw type error', t => {
  const e1 = t.throws(() => { assign(undefined) })
  const e2 = t.throws(() => { assign(null) })

  t.is(e1.message, 'Cannot convert undefined or null to object')
  t.is(e2.message, 'Cannot convert undefined or null to object')
})

test('should support symbol as key', t => {
  const s = Symbol('a')
  const target = {}
  const source = { [s]: 'a' }

  assign(target, source)
  t.is(target[s], 'a')
})

test('should support multi-soruces', t => {
  const target = {}
  const source1 = { 'a': 'a' }
  const source2 = { 'b': 'b' }
  const source3 = { 'c': 'c' }

  assign(target, source1, source2, source3)
  t.is(target['a'], 'a')
  t.is(target['b'], 'b')
  t.is(target['c'], 'c')
})

test('should invoke getter on source', t => {
  const target = {}
  const source = {}

  Object.defineProperty(source, 'a', {
    get() { return 'a' },
    enumerable: true
  })
  Object.defineProperty(source, 'b', {
    get() { return 'b' },
    enumerable: false
  })

  assign(target, source)
  t.is(target['a'], 'a')
  t.is(target['b'], undefined)
})

test('should invoke setter on target', t => {
  const target = {}
  const source = { a: 'a' }
  let cache

  Object.defineProperty(target, 'a', {
    set(v) { cache = `setter-${v}` },
    get() { return cache }
  })

  assign(target, source)
  t.is(target['a'], 'setter-a')
})
