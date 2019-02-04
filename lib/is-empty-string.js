const isEmpty = require('lodash.isempty')
const isString = require('lodash.isstring')

/**
 * Determine whether a given value is a {String} with no characters
 * (i.e., with a length equal to zero (0)).
 *
 * @private
 * @memberof parse-numeric
 *
 * @param {*} value - Value to evaluate.
 * @returns {boolean} - `true` if it's a string without characters;
 * otherwise. `false` if it's both a string with one or more characters.
 */
const isEmptyString = (value) => isString(value) && isEmpty(value)

module.exports = isEmptyString
