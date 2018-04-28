const Benchmark = require('benchmark')
const filterMap = require('../index')
const reduceFilterMap = require('./reduceFilterMap')

const suite = new Benchmark.Suite()

const testArray = []

for (let i = 0; i < 1000; i += 1) {
  testArray.push(i)
}

const filterCb = x => (x % 3 === 0)
const mapCb = x => x * 2

suite.add('Array.filter.map', () => {
  testArray.filter(filterCb).map(mapCb)
})

suite.add('Recursive filterMap', () => {
  filterMap(filterCb, mapCb, testArray)
})

suite.add('Array.reduce filterMap', () => {
  reduceFilterMap(filterCb, mapCb, testArray)
})

suite.on('cycle', event => {
  // console.log(event)
  // eslint-disable-next-line no-console
  console.log(String(event.target))
})

suite.on('complete', () => {
  // eslint-disable-next-line no-console
  console.log(`Fastest is ${suite.filter('fastest').map('name')}`)
})

suite.run({ async: true })
