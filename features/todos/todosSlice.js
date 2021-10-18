import { createSlice, createAction, nanoid, createEntityAdapter } from '@reduxjs/toolkit'

const todosAdapter = createEntityAdapter();

const initialState = {
    entities: {},
    status: 'idle'
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        add: (state, action) => {
            state.entities[action.payload.id] = action.payload
        },
        remove: (state, action) => {
            delete state.entities[action.payload]
        },
        toggle: (state, action) => {
            state.entities[action.payload].complete = !state.entities[action.payload].complete
        },
        clear: state => {
            Object.values(state.entities).forEach(entity => entity.complete && delete state.entities[entity.id])
        },
        batch: (state, action) => {
            Object.values(state.entities).forEach(entity => state.entities[entity.id].complete = !action.payload)
        }
    }
})

/**
 * Description - Redux Actions
 */

export const addTodo = createAction('todos/add', function prepare(text) {
    return {
        payload: {
            text,
            complete: false,
            id: nanoid()
        }
    }
})

export const { remove, toggle, clear, batch } = todosSlice.actions

/** 
 * Description - Redux Selectors
*/

export const selectTodos = (state) => state.todos.entities

export const selectActiveTodos = (state) => Object.values(state.todos.entities).filter(todo => !todo.complete)

export const selectInactiveTodos = (state) => Object.values(state.todos.entities).filter(todo => todo.complete)

export const selectIsComplete = (state) => Object.values(state.todos.entities).find(todo => !todo.complete) === undefined

/**
 * Description - export reducer as default
 */

export default todosSlice.reducer