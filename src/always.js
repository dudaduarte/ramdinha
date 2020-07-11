/*
Returns a function that always returns the given value.
Note that for non-primitives the value returned is a reference to the original value.
*/

const always = arg => () => arg

module.exports = always