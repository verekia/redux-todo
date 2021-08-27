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
  switch (action.type) {
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

export default reducer
