const ADD = 'ADD'
const COMPLETE = 'COMPLETE'
const VIEW = 'VIEW'

export const complete = () => ({ type: COMPLETE })
export const add = payload => ({ type: ADD, payload })
export const view = payload => ({ type: VIEW, payload })

const defaultState = {
  todos: [],
  reading: "all"
}

const reducer = (state = defaultState, action) => {
  switch (action?.type) {
    case ADD:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      }
    case COMPLETE:
      return { ...state, todos: state.todos.map(todo => todo.id === action.payload ? todo.done = true : todo) }
    case VIEW:
      return { ...state, reading: action.payload }
    default:
      return state
  }
}


export const tasks = state => state.todos
export const reading = state => state.reading
export const tasksLengthAll = state => state.todos ? state.todos.length : 0
export const tasksLengthIncomplete = state => state.todos ? state.todos.filter(t => !t.done) : 0
export const tasksLengthComplete = state => state.todos ? state.todos.filter(t => t.done) : 0


export default reducer
