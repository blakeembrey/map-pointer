import { map } from './index'

describe('map-pointer', () => {
  it('should map a primitive', () => {
    expect(map('/a', { a: 'test' })).toEqual('test')
  })

  it('should map an object', () => {
    expect(map({ a: '/b', nest: { something: '/b' } }, { b: true })).toEqual({ a: true, nest: { something: true } })

    expect(map(
      { sub: '/id', name: '/full_name' },
      { id: 123, full_name: 'Blake Embrey' }
    )).toEqual({ sub: 123, name: 'Blake Embrey' })
  })

  it('should map an array', () => {
    expect(map(['/a', { test: '/b' }], { a: 1, b: 2 })).toEqual([1, { test: 2 }])
  })

  it('should ignore missing values', () => {
    expect(map({ a: '/a' }, {})).toEqual({ a: undefined })
  })
})
