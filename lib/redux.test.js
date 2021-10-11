import reducer, { add, complete, view, remove, tasks, reading, tasksLengthAll, tasksLengthIncomplete, tasksLengthComplete } from './redux'

test('ADD', () => {
  expect(reducer({ todos: [], reading: "all" }, add({ id: 5, content: "input", done: false }))).toEqual({ todos: [{ id: 5, content: "input", done: false }], reading: "all" })
})

test('COMPLETE', () => {
  expect(reducer({ todos: [{ content: "hello", done: false, id: 5 }], reading: "all" }, complete(5))).toEqual({ todos: [{ id: 5, content: "hello", done: true }], reading: "all" })
})

test('VIEW', () => {
  expect(reducer({ todos: [{ id: 5, content: "input", done: false }], reading: "all" }, view("undone"))).toEqual({ todos: [{ id: 5, content: "input", done: false }], reading: "undone" })
})

test('REMOVE', () => {
  expect(reducer({ todos: [{ id: 5, content: "input", done: false }], reading: "all" }, remove(5))).toEqual({ todos: [], reading: "all" })
})

test('Selectors', () => {
  const state = { todos: [{ id: 5, content: "input", done: false }, { id: 5, content: "input", done: true }, { id: 5, content: "input", done: false }], reading: "all" }

  expect(reading(state)).toBe("all")
  expect(tasks(state)).toStrictEqual([{ id: 5, content: "input", done: false }, { id: 5, content: "input", done: true }, { id: 5, content: "input", done: false }])
  expect(tasksLengthAll(state)).toBe(3)
  expect(tasksLengthIncomplete(state)).toBe(2)
  expect(tasksLengthIncomplete(state)).toBe(2)
  expect(tasksLengthComplete(state)).toBe(1)
})
