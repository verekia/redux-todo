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

test('Add 3 then 7 to default state', () => {
  let state = reducer(undefined, {}) // default state

  state = reducer(state, add(3))
  state = reducer(state, add(7))
  
  expect(state).toEqual({ count: 10 })
})
