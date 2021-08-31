import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Input() {
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState()

  const addTodo = () => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: Math.random() * 100,
        content: newTodo,
      },
    })
  }

  return (
    <div>
      <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add task</button>
    </div>
  )
}
