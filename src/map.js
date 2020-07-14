/*
Takes a function and a functor, applies the function to each of the functor's values,
and returns a functor of the same shape.
Ramda provides suitable map implementations for Array and Object,
so this function may be applied to [1, 2, 3] or {x: 1, y: 2, z: 3}.
Dispatches to the map method of the second argument, if present.
Acts as a transducer if a transformer is given in list position.
Also treats functions as functors and will compose them together.
*/

const map = (array, fn) => {
  const result = []

  for (const item of array) {
    result.push(fn(item))
  }

  return result
}

/* ** recursive implementation **
const map = (array, fn) => {
  function helper (array, result) {
    if (!array.length) {
      return result
    }

    return helper(array.slice(1), [...result, fn(array[0])])
  }

  return helper(array, [])
}
*/

module.exports = map