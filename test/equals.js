const { expect } = require('chai')
const equals = require('../src/equals')

describe('Testing equals', () => {
  it('should return false - input: {}, []', () => {
    expect(equals({}, [])).to.equals(false)
  })

  it('should return true - input: [], []', () => {
    expect(equals([], [])).to.equals(true)
  })

  it('should return true - input: {}, {}', () => {
    expect(equals({}, {})).to.equals(true)
  })

  it('should return true - input: [1, 2, 3], [1, 2, 3]', () => {
    expect(equals([1, 2, 3], [1, 2, 3])).to.equals(true)
  })

  it('should return false - input: [1, 2, 3], [3, 2, 1]', () => {
    expect(equals([1, 2, 3], [3, 2, 1])).to.equals(false)
  })

  it('should return false - input: [1, 2, 3, 4], [1, 2, 3]', () => {
    expect(equals([1, 2, 3, 4], [1, 2, 3])).to.equals(false)
  })

  it('should return true - input: {a: 1, b: 2}, {a: 1, b: 2}', () => {
    expect(equals({a: 1, b: 2}, {a: 1, b: 2})).to.equals(true)
  })

  it('should return true - input: a.b, b.b', () => {
    const a = {b: 12, c: 13}
    const b = {b: 12, d: 15}
    expect(equals(a.b, b.b)).to.equals(true)
  })

  it('should return true - input: {v: [Circular]}, {v: [Circular]}', () => {
    const a = {}
    const b = {}
    a.v = a
    b.v = b

    expect(equals(a, b)).to.equals(true)
  })

  it('should return true - input: 1, 1', () => {
    expect(equals(1, 1)).to.equals(true)
  })

  it('should return false - input: 1, 2', () => {
    expect(equals(1, 2)).to.equals(false)
  })

  it('should return false - input: 1, "1"', () => {
    expect(equals(1, '1')).to.equals(false)
  })

  it('should return true - input: "oi", "oi"', () => {
    expect(equals('oi', 'oi')).to.equals(true)
  })

  it('should return false - input: "oi", "Oi"', () => {
    expect(equals('oi', 'Oi')).to.equals(false)
  })

  it('should return false - input: true, false', () => {
    expect(equals(true, false)).to.equals(false)
  })

  it('should return true - input: false, false', () => {
    expect(equals(false, false)).to.equals(true)
  })
})