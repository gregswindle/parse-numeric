const isNumeric = require('../is-numeric.js')
const validNumbers = require('./__fixtures__/valid-numbers')
const validNumericStrings = require('./__fixtures__/valid-numeric-strings')
const invalidNumericStrings = require('./__fixtures__/invalid-numeric-strings')

describe('isNumeric', () => {
  it('returns "false" for non-numeric values', () => {
    const values = invalidNumericStrings.map(isNumeric)
    expect(values.every(val => val)).toBe(false)
  })

  it.each([
    validNumbers,
    validNumericStrings
  ])(
    'returns "true" for numbers and numeric strings',
    (value) => {
      expect(isNumeric(value)).toBe(true)
    }
  )
})
