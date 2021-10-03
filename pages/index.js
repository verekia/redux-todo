import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { add, decrement, increment } from '../lib/redux'

const IndexPage = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    setTodos([...todos, { id: Math.random(), content: inputValue, done: false }])
    setInputValue('')
  }

  return (
    <div>
      <h1 className="count">
        <div>
          {
            todos.length > 0 ?
              todos.map((t) => (
                <p>{t.content}</p>
              )) :
              <p>"No tasks"</p>
          }
        </div>
      </h1>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button type="submit">Add task</button>
      </form>
    </div>
  )
}

export default IndexPage
