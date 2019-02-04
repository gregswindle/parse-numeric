const isNumeric = require('./is-numeric')

/**
 * Parse numeric strings as Numbers, when possible.
 *
 * @public
 * @memberof module:parse-numeric
 *
 * @function parseNumeric
 * @alias module:parse-numeric
 * @param {string} value - A number-like value.
 * @returns {number|string} - A number if the value parameter can be converted;
 * otherwise, the original value passed.
 */
const parseNumeric = (value) => {
  if (isNumeric(value)) {
    return Number(value)
  }
  return value
}

module.exports = parseNumeric
