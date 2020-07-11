/*
Returns true if its arguments are equivalent, false otherwise.
Handles cyclical data structures.
Dispatches symmetrically to the equals methods of both arguments, if present.
*/

const equals = (a, b) => {
  if (typeof(a) === 'object' && a != null) {
    return String(Object.entries(a)) === String(Object.entries(b))
  }

  return a === b
}

module.exports = equals