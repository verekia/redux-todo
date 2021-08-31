import React from 'react'
import { useSelector } from 'react-redux'

export default function Todos() {
  const todos = useSelector(state => state.todos)

  const list = todos.length ? (
    todos.map(todo => {
      return (
        <ul key={todo.id}>
          <li>{todo.content}</li>
        </ul>
      )
    })
  ) : (
    <p>You have no task</p>
  )
  return <div>{list}</div>
}
