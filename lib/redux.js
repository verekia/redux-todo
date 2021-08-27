const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ADD = 'ADD'

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const add = payload => ({ type: ADD, payload })

const defaultState = {
  count: 0,
}

const reducer = (state = defaultState, action) => {
  switch (action?.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      return { ...state, count: state.count - 1 }
    case ADD:
      return { ...state, count: state.count + action.payload }
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

export const countSelector = state => state.count
export const doubleCountSelector = state => state.count * 2

export default reducer
