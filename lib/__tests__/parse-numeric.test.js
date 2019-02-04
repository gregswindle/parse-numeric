const parseNumeric = require('..')
const validNumbers = require('./__fixtures__/valid-numbers')
const validNumericStrings = require('./__fixtures__/valid-numeric-strings')
const invalidNumericStrings = require('./__fixtures__/invalid-numeric-strings')

describe('module parse-numeric', () => {
  describe('function parseNumeric (value: any)', () => {
    describe('when the "value" parameter is', () => {
      describe('a {string} that represents a {number}', () => {
        it('will convert the {string} to a {number}', () => {
          validNumericStrings.forEach(value => {
            const number = parseNumeric(value)
            expect(typeof number).toBe('number')
          })
        })
      })

      describe('a non-numeric {string}', () => {
        it('will return the original value', () => {
          invalidNumericStrings.forEach(value => {
            expect(parseNumeric(value)).toBe(value)
          })
        })
      })

      describe('a {number}', () => {
        it('will return the {number}', () => {
          validNumbers.forEach(num => {
            const number = parseNumeric(num)
            expect(typeof number).toBe('number')
            expect(number).toEqual(num)
          })
        })
      })

      describe('an empty {string}', () => {
        it('will return the {string}', () => {
          const value = ''
          expect(parseNumeric(value)).toBe(value)
        })
      })

      describe('{null}', () => {
        it('will return {null}', () => {
          const value = null
          expect(parseNumeric(value)).toBe(value)
        })
      })

      describe('{undefined}', () => {
        it('will return {undefined}', () => {
          const value = undefined
          expect(parseNumeric(value)).toBe(value)
        })
      })
    })

    describe('function parseNumeric.isNumeric(value: any)', () => {
      it('declares whether a value could be parsed as a {number}', () => {
        validNumbers.forEach(num => {
          expect(parseNumeric.isNumeric(num)).toBe(true)
        })

        validNumericStrings.forEach(value => {
          expect(parseNumeric.isNumeric(value)).toBe(true)
        })

        invalidNumericStrings.forEach(value => {
          expect(parseNumeric.isNumeric(value)).toBe(false)
        })
      })
    })
  })
})
