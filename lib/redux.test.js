import reducer, { add, increment, decrement, doubleCountSelector, countSelector } from './redux'

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
  let state = reducer() // default state

  state = reducer(state, add(3))
  state = reducer(state, add(7))

  expect(state).toEqual({ count: 10 })
})

test('Selectors', () => {
  const state = { count: 5 }

  expect(countSelector(state)).toBe(5)
  expect(doubleCountSelector(state)).toBe(10)
})
