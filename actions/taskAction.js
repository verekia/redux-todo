import { ADD_TASK, CHANGE_ACTIVE, DELETE_TASK } from '../constants/actionTypes'

export const addTask = task => ({ type: ADD_TASK, payload: task })
export const deleteTask = id => ({ type: DELETE_TASK, payload: id })
export const changeActiveTask = id => ({ type: CHANGE_ACTIVE, payload: id })
