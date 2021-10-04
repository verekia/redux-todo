import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { add, decrement, increment } from '../lib/redux'

const IndexPage = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  // const [inputInd, setInputInd] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    let id = Math.random()
    console.log(id)
    setTodos([...todos, { id, content: inputValue, done: false }])
    setInputValue('')
  }

  const toggleTodo = t => {
    let newTodos = todos
    newTodos = newTodos.map(todo => {
      if (todo.id === t) return { ...todo, done: !todo.done }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div>
      <h1 className="count">
        <div>
          {
            todos.length > 0 ?
              todos.map(t => (
                <div key={t.id}>
                  <label className="container">{t.content}
                    <input type="checkbox" onChange={() => toggleTodo(t.id)} checked={t.done ? true : false} />
                    <span className="checkmark"></span>
                  </label>
                </div>
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
