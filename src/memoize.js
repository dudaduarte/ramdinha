/*
Creates a new function that, when invoked, caches the result of calling fn
for a given argument set and returns the result.
Subsequent calls to the memoized fn with the same argument set will not result
in an additional call to fn; instead, the cached result for that set of arguments
will be returned.
*/

const memoize = (fn) => {
  const cache = {}

  return function(...args) {
      const key = String(args)

      if (cache.hasOwnProperty(key)) {
          return cache[key]
      }

      const result = fn(...args)
      cache[key] = result

      return result
  }
}

module.exports = memoize