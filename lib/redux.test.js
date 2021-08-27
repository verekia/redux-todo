import reducer, { add, increment, decrement } from './redux'

test('INCREMENT', () => {
  expect(reducer({ count: 3 }, increment())).toEqual({ count: 4 })
})

test('DECREMENT', () => {
  expect(reducer({ count: 2 }, decrement())).toEqual({ count: 1 })
})

test('ADD', () => {
  expect(reducer({ count: 3 }, add(3))).toEqual({ count: 6 })
})
