/*
Performs left-to-right function composition.
The first argument may have any arity; the remaining arguments must be unary.
*/

const pipe = (...functions) =>
    (...args) => functions.reduce((acc, fn) => [fn(...acc)], args)[0]

module.exports = pipe