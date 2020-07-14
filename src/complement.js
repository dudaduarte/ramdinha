/*
Takes a function f and returns a function g such that if called with the same
arguments when f returns a "truthy" value, g returns false and when f returns a
"falsy" value g returns true.
Complement may be applied to any functor.
*/

const complement = (fn) => {
  return (...args) => !fn(...args)
}

module.exports = complement