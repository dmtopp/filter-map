module.exports = (filterCb, mapCb, list) => (
  list.reduce((result, current) => (
    filterCb(current) ? mapCb(current) : result
  ), [])
)
