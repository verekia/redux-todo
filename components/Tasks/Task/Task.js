import React from 'react'
import { deleteTask } from '../../../actions/taskAction'
import { useDispatch } from 'react-redux'
import { changeActiveTask } from '../../../actions/taskAction'
const Task = ({ task }) => {
  //hooks
  const dispatch = useDispatch()
  // functions
  const handleActive = () => {
    dispatch(changeActiveTask(task.id))
  }
  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id))
  }
  return (
    <li
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        borderBottom: '1px solid rgb(230,230,230)',
      }}
    >
      <div style={{ display: 'flex', gap: '20px', fontSize: '24px', alignItems: 'center' }}>
        <input
          type="checkbox"
          id="scales"
          name="scales"
          checked={task.active}
          onChange={handleActive}
          style={{}}
        />
        <label htmlFor="scales">{task.content}</label>
      </div>

      <button
        onClick={handleDeleteTask}
        style={{
          border: 'none',
          display: 'inline-block',
          backgroundColor: 'white',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          style={{ fill: 'red', width: '15px' }}
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </li>
  )
}

export default Task
