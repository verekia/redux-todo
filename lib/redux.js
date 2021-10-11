const ADD = 'ADD'
const COMPLETE = 'COMPLETE'
const VIEW = 'VIEW'
const REMOVE = 'REMOVE'

export const complete = payload => ({ type: COMPLETE, payload })
export const add = payload => ({ type: ADD, payload })
export const view = payload => ({ type: VIEW, payload })
export const remove = payload => ({ type: REMOVE, payload })

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
      return {
        ...state, todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            todo.done = true
            return todo
          } else {
            return todo
          }
        })
      }
    case VIEW:
      return { ...state, reading: action.payload }
    case REMOVE:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) }
    default:
      return state
  }
}


export const tasks = state => state.todos
export const reading = state => state.reading
export const tasksLengthAll = state => state.todos ? state.todos.length : 0
export const tasksLengthIncomplete = state => state.todos ? (state.todos.filter(t => !t.done)).length : 0
export const tasksLengthComplete = state => state.todos ? (state.todos.filter(t => t.done)).length : 0

export default reducer
