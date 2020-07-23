/*
Returns the result of calling its first argument with the remaining arguments.
*/

const call = (fn, ...args) => fn(...args)

module.exports = call