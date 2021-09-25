import { useState } from 'react'

/*
  todos:
  [
    { id: 1234, content: 'Hello', isCompleted: true },
    { id: 2345, content: 'Hi', isCompleted: false },
  ]
*/

const IndexPage = () => {
  const [todos, setTodos] = useState([])
  const [newTodoContent, setNewTodoContent] = useState('')
  const [filter, setFilter] = useState('all')

  const submitHandler = e => {
    e.preventDefault()
    if (newTodoContent.trim().length === 0) {
      alert('Task can not be empty!')
      return
    } else {
      setTodos([...todos, { id: Math.random(), content: newTodoContent, isCompleted: false }])
    }
    setNewTodoContent('')
  }

  const handleDelete = id => {
    const remainingTodos = todos.filter(todo => id !== todo.id)
    setTodos(remainingTodos)
  }

  const handleComplete = id => {
    const updatedTask = todos.map(todo => {
      if (id === todo.id) {
        return { ...todo, isCompleted: !todo.isCompleted }
      }
      return todo
    })
    setTodos(updatedTask)
  }

  const filteredTodo = todos.filter(todo => {
    if (filter === 'active') return !todo.isCompleted
    if (filter === 'completed') return todo.isCompleted
    if (filter === 'all') return true
  })

  const taskNoun = todos.length > 1 ? 'tasks' : 'task'
  const taskTest = `${todos.length} ${taskNoun} remained!`

  return (
    <>
      <form onSubmit={submitHandler}>
        <input value={newTodoContent} onChange={e => setNewTodoContent(e.target.value)} />
        <button type="submit">Add todo</button>
      </form>
      {taskTest}
      <ul>
        {filteredTodo.map(t => (
          <li key={t.id}>
            <button onClick={() => handleComplete(t.id)}>Done</button>
            <span style={{ textDecoration: t.isCompleted ? 'line-through' : 'none' }}>
              {t.content}
            </span>{' '}
            <button onClick={() => {}}>Edit</button>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
    </>
  )
}

export default IndexPage
