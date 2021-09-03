const ADD = 'ADD_TODO'
const DELETE = 'DELETE_TODO'

const initialState = {
  todos: [],
}

export const addTodo = newTodo => ({
  type: ADD,
  payload: {
    id: Math.random() * 100,
    content: newTodo,
  },
})
export const deleteTodo = id => ({ type: DELETE, payload: id })

const reducer = (state = initialState, action) => {
  switch (action?.type) {
    case ADD:
      return { ...state, todos: [...state.todos, action.payload] }
    case DELETE:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) }
    default:
      return state
  }
}
export const todos = state => state.todos
// Selectors are where you can expose which property of the state
// is accessible to the useSelector hook. This is also where you
// can *derive* data. For instance, we calculate doubleCount inside
// the selector, not in the state itself. An other typical case is
// to have a list in the store, and to filter or sort that list
// in a selector.

// export const countSelector = state => state.count
// export const doubleCountSelector = state => state.count * 2

export default reducer
