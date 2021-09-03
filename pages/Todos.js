import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, todos } from '../lib/redux'

export default function Todos() {
  const dispatch = useDispatch()
  const todoList = useSelector(todos)

  return (
    <div>
      {todoList ? (
        todoList.map(todo => {
          return (
            <ul key={todo.id}>
              <li>
                {todo.content}
                <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
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
