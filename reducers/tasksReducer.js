import { ADD_TASK, DELETE_TASK, CHANGE_ACTIVE } from '../constants/actionTypes'
const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload]
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload)
    case CHANGE_ACTIVE:
      return state.map(task => {
        if (task.id === action.payload) {
          return { ...task, active: !task.active }
        }
        return task
      })
    default:
      return state
  }
}
export default reducer
