const filterMap = require('../index')

describe('(Util) filterMap', () => {
  it('should behave like .filter.map', () => {
    const list = [1, 2, 3, 4]

    const filterCb = x => (x % 2 === 0)
    const mapCb = x => x + 5

    const result = filterMap(filterCb, mapCb, list)

    expect(result).toEqual(list.filter(filterCb).map(mapCb))
  })
})
