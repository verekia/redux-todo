const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ADD = 'ADD'
const COMPLETE = 'COMPLETE'

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const complete = () => ({ type: COMPLETE })
export const add = payload => ({ type: ADD, payload })

const defaultState = {
  todos: [],
  finishedTasks: 0,
  unfinishedTasks: 0
}

const reducer = (state = defaultState, action) => {
  switch (action?.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      return { ...state, count: state.count - 1 }
    case ADD:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        unfinishedTasks: state.unfinishedTasks + 1
      }
    case COMPLETE:
      return { ...state, done: true }
    default:
      return state
  }
}

// Selectors are where you can expose which property of the state
// is accessible to the useSelector hook. This is also where you
// can *derive* data. For instance, we calculate doubleCount inside
// the selector, not in the state itself. An other typical case is
// to have a list in the store, and to filter or sort that list
// in a selector.

export const taskSelector = state => state.todos
// export const doubleCountSelector = state => state.count * 2

export default reducer
