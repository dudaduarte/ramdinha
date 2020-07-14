/*
Returns a curried equivalent of the provided function.
The curried function has two unusual capabilities. First, its arguments needn't
be provided one at a time. If f is a ternary function and g is R.curry(f),
the following are equivalent:

g(1)(2)(3)
g(1)(2, 3)
g(1, 2)(3)
g(1, 2, 3)
*/

const curry = (fn) => {
  function helper (previousArgs, args) {
    if ((args.length + previousArgs.length) === fn.length) {
      return fn(...previousArgs, ...args)
    }

    return (...args2) => helper(previousArgs.concat(args), args2)
  }

  return (...args) => helper([], args)
}

module.exports = curry