import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../lib/redux'

export default function Input() {
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState()

  return (
    <div>
      <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button onClick={() => dispatch(addTodo(newTodo))}>Add task</button>
    </div>
  )
}
