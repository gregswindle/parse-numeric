const isEmptyString = require('./is-empty-string')
const isnan = require('lodash.isnan')
const isNull = require('./is-null')

/**
 * Determine whether a given value can be parsed as a JavaScript {Number}.
 *
 * @public
 * @ignore
 *
 * @function isNumeric
 * @alias parseNumeric.isNumeric
 * @param {*} value - Value to evaluate.
 * @returns {boolean} - `true` if the value can be converted to a {Number};
 * otherwise, `false`.
 */
const isNumeric = (value) => {
  if (isEmptyString(value) || isNull(value)) {
    return false
  }
  return isnan(Number(value)) === false
}

module.exports = isNumeric
