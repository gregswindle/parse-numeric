/**
 * @module parse-numeric
 */

/**
 * A numeric data type in the
 * {@link http://en.wikipedia.org/wiki/Double_precision_floating-point_format|double-precision 64-bit floating point format
 * (IEEE 754)}.
 * @typedef {number} Number
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 */

const parseNumeric = require('./parse-numeric')
const isNumeric = require('./is-numeric')

parseNumeric.isNumeric = isNumeric

module.exports = parseNumeric
