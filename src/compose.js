/*
Performs right-to-left function composition.
The last argument may have any arity; the remaining arguments must be unary.
*/

const compose = (...functions) =>
    (...args) => functions.reverse().reduce((acc, fn) => [fn(...acc)], args)[0]

module.exports = compose