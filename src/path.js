/*
Retrieve the value at a given path.
*/

const path = (arr, obj) => {
  if (!arr.length) return obj

  if (!obj) return undefined

  if (!obj[arr[0]]) {
    return path(arr.slice(1), obj[obj.length + arr[0]])
  }

  return path(arr.slice(1), obj[arr[0]])
}

module.exports = path