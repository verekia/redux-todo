import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task/Task'
import ButtonMode from './Button/ButtonMode'

export default function Tasks() {
  //hooks
  const { tasks } = useSelector(state => state)
  // 3 mode: all, active, complete
  const [mode, setMode] = useState('All')
  // functions
  const handleChangeMode = e => {
    console.log(e)
    switch (e.target.id) {
      case 'All':
        return setMode('All')
      case 'Active':
        return setMode('Active')
      case 'Complete':
        return setMode('Complete')
      default:
        break
    }
  }
  const handleRenderMode = () => {
    if (mode === 'All') {
      return tasks.map(task => <Task task={task} key={task.id} />)
    }

    if (mode === 'Active') {
      return tasks.map(task => {
        return task.active ? <Task task={task} key={task.id} /> : null
      })
    }
    if (mode === 'Complete') {
      return tasks.map(task => {
        return !task.active ? <Task task={task} key={task.id} /> : null
      })
    }
  }
  return (
    <div>
      {tasks.length > 0 ? (
        <>
          <ul>{handleRenderMode()}</ul>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                color: '#777',
                fontSize: '20px',
                padding: '10px 0',
              }}
            >
              {tasks.length} item left
            </p>
            <div style={{ padding: '5px' }}>
              <ButtonMode mode={mode} content={'All'} handleChangeMode={handleChangeMode} />
              <ButtonMode mode={mode} content={'Active'} handleChangeMode={handleChangeMode} />
              <ButtonMode mode={mode} content={'Complete'} handleChangeMode={handleChangeMode} />
            </div>
          </div>
        </>
      ) : (
        <p>You have no task</p>
      )}
    </div>
  )
}
