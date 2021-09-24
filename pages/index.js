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

  const submitHandler = e => {
    e.preventDefault()
    setTodos([...todos, { id: Math.random(), content: newTodoContent, isCompleted: false }])
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

  return (
    <>
      <form onSubmit={submitHandler}>
        <input value={newTodoContent} onChange={e => setNewTodoContent(e.target.value)} />
        <button type="submit">Add todo</button>
      </form>
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <button onClick={() => handleComplete(t.id)}>Done</button>
            <span style={{ textDecoration: t.isCompleted ? 'line-through' : 'none' }}>
              {t.content}
            </span>{' '}
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default IndexPage
