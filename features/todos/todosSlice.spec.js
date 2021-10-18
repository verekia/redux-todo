import { nanoid } from "@reduxjs/toolkit"

import todosReducer, {
    addTodo
} from "./todosSlice"

describe('Todos Reducer', () => {
    const initialState = {
        entities: {},
        status: 'idle'
    }
    it('should have initial state', () => {
        expect(todosReducer(undefined, { type: 'unknown' })).toEqual({
            entities: {},
            status: 'idle'
        })
    })
    it('addTodo should create new entity', () => {
        const state = todosReducer(undefined, addTodo('something'));
        expect(Object.values(state.entities)[0]).toEqual(expect.objectContaining({
            text: 'something',
            complete: false
        }))
    })
})