const ADD = 'ADD'
const COMPLETE = 'COMPLETE'


export const complete = () => ({ type: COMPLETE })
export const add = payload => ({ type: ADD, payload })

const defaultState = {
  todos: []
}

const reducer = (state = defaultState, action) => {
  switch (action?.type) {
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

export const unfinishedTaskSelector = state => state.todos ? state.todos.length : 0
// export const doubleCountSelector = state => state.count * 2

export default reducer
