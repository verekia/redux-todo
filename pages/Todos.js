import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Todos() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  const deleteTodo = id => {
    dispatch({ type: 'DELETE_TODO', payload: id })
  }

  return (
    <div>
      {todos ? (
        todos.map(todo => {
          return (
            <ul key={todo.id}>
              <li>
                {todo.content}
                <button
                  onClick={() => {
                    deleteTodo(todo.id)
                  }}
                >
                  Delete
                </button>
              </li>
            </ul>
          )
        })
      ) : (
        <p>You have no task</p>
      )}
    </div>
  )
}
