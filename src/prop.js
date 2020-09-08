/*
Returns a function that when supplied an object returns the indicated
property of that object, if it exists.
*/

const curry = require('./curry')

const prop = curry((arg, obj) => {
  if (!obj) return undefined

  return obj[arg]
})

module.exports = prop