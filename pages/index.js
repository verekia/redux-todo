import { useState } from 'react'

const IndexPage = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setTodos([...todos, { id: Math.random(), content: inputValue, isCompleted: false }])
    setInputValue('')
  }

  const handleDelete = id => {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button type="submit">Add todo</button>
      </form>
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            {t.content} <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default IndexPage
