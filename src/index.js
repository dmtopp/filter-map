const filterMap = (filterCb, mapCb, list) => {
  const result = []

  const recurse = arr => {
    if (arr.length === 0) return

    const item = arr[0]

    if (filterCb(item)) {
      result.push(mapCb(item))
    }

    arr.shift()
    recurse(arr)
  }

  recurse(list.slice())

  return result
}

module.exports = filterMap
