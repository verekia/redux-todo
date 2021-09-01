import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from './../actions/taskAction'

export default function Input() {
  const dispatch = useDispatch()
  const [task, setTask] = useState('')
  const handleChange = e => {
    setTask(e.target.value)
  }

  const handleAddTask = e => {
    if (e.key === 'Enter') {
      dispatch(
        addTask({
          id: Math.random() * 100,
          content: task,
          active: true,
        })
      )
      setTask('')
    }
  }

  return (
    <input
      type="text"
      value={task}
      onChange={handleChange}
      placeholder="What need to be done? "
      onKeyDown={handleAddTask}
      style={{
        width: '100%',
        fontSize: '24px',
        padding: '10px 100px',
        fontStyle: 'italic',
        border: 'none',
        outline: 'none',
        borderBottom: '1px solid rgb(230,230,230)',
      }}
    />
  )
}
