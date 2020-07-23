/*
Returns a new function much like the supplied one,
except that the arguments' order is reversed.
*/

const flip = (fn) => (...args) => fn(...args.reverse())

module.exports = flip