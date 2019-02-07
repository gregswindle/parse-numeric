const parseNumeric = require('..')
const validNumbers = require('./__fixtures__/valid-numbers')
const validNumericStrings = require('./__fixtures__/valid-numeric-strings')
const invalidNumericStrings = require('./__fixtures__/invalid-numeric-strings')

describe('parseNumeric', () => {
  describe('when the "value" parameter is', () => {
    const isTypeOfNumber = (val) => typeof val === 'number'
    const parseValues = (values) => values.map(parseNumeric)
    describe('a {string} that represents a {number}', () => {
      it('will convert the {string} to a {number}', () => {
        const numbers = parseValues(validNumericStrings)
        expect(numbers.every(isTypeOfNumber)).toBe(true)
      })
    })
    describe('a non-numeric {string}', () => {
      it('will return the original value', () => {
        invalidNumericStrings.forEach((value) => {
          expect(parseNumeric(value)).toBe(value)
        })
      })
    })
    describe('a {number}', () => {
      it('will return the {number}', () => {
        const values = parseValues(validNumbers)
        expect(values.every(isTypeOfNumber)).toBe(true)
        expect(values).toEqual(validNumbers)
      })
    })
    describe('an empty {string}', () => {
      it('will return the {string}', () => {
        expect(parseNumeric('')).toBe('')
      })
    })
    describe('{null}', () => {
      it('will return {null}', () => {
        expect(parseNumeric(null)).toBeNull()
      })
    })
    describe('{undefined}', () => {
      it('will return {undefined}', () => {
        // eslint-disable-next-line no-undefined
        expect(parseNumeric(undefined)).toBeUndefined()
      })
    })
  })
})
