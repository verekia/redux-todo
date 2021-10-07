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
    <div class="horizontal-or-flex-only">
      <div class="menu">
        <div class="menu-fourty-high">
          <div class="horizontal-or-flex-only flex-direction-column padding-edge titles">
            <h2 class="titles-biggest">React</h2>
            <h3 class="titles-medium">Example</h3>
            <p class="titles-smallest">Source</p>
            <h3 class="titles-medium">React + Backbone.js</h3>
            <p class="titles-smallest">Demo, Source</p>
            <h3 class="titles-medium">Scala.js + React</h3>
            <p class="titles-smallest">Demo, Source</p>
            <h3 class="titles-medium">TypeScript + React</h3>
            <p class="titles-smallest">Demo, Source</p>
            <h3 class="titles-medium">React + Alt</h3>
            <p class="titles-smallest">Demo, Source</p>
          </div>
        </div>
        <div
          class="menu-twenty-high horizontal-or-flex-only dotted-top-bottom align-items-center justify-content-space-around flex-direction-column padding-top">
          <i class="fas fa-quote-left"></i>
          <div class="speech-bubble-clippy horizontal-or-flex-only justify-content-space-around">
            <p class="speech-bubble-clippy-text">React is a JavaScript library for creating user interfaces. Its
              core principles are declarative code,
              efficiency, and flexibility. Simply specify what your component looks like and React will keep it
              up-to-date when the underlying data changes.</p>
          </div>
          <i class="fas fa-quote-right"></i>
          <div class="horizontal-or-flex-only react-label-space justify-content-flex-end align-items-center wider">
            <p class="react-label">React</p>
          </div>
        </div>
        <div class="menu-thirty-five-high">
          <div
            class="horizontal-or-flex-only menu-half-high justify-content-space-around flex-direction-column padding-edge padding-top">
            <h2 class="titles-biggest">Official Resources</h2>
            <p class="titles-smallest">Tutorial</p>
            <p class="titles-smallest">Philosophy</p>
            <p class="titles-smallest">Support</p>
            <p class="titles-smallest">Flux architecture example</p>
          </div>
          <div
            class="horizontal-or-flex-only menu-half-high justify-content-space-around flex-direction-column padding-edge">
            <h2 class="titles-biggest">Community</h2>
            <p class="titles-smallest">ReactJS on Stack Overflow</p>
            <p class="titles-smallest">Google Groups Mailing List</p>
            <p class="titles-smallest">IRC</p>
          </div>
        </div>
      </div>
      <div class="horizontal-or-flex-only background align-items-center flex-direction-column">
        <div
          class="horizontal-or-flex-only background-items justify-content-space-between flex-direction-column fourty-high">
          <div class="background-title horizontal-or-flex-only justify-content-space-around">
            <h1>todos</h1>
          </div>
          <div class="background-todos drop-shadow-edge">
            <form onSubmit={handleSubmit} class="horizontal-or-flex-only background-todos-twenty-five drop-shadow-edge">
              <div class="horizontal-or-flex-only padding-edge align-items-center">
                <i class="fas fa-chevron-down"></i>
                <input value={inputValue} class="no-outline" placeholder="What needs to be done?" onChange={e => setInputValue(e.target.value)} />
              </div>
            </form>
            <div class="horizontal-or-flex-only background-todos-fifty-five flex-direction-column flex-grow-10">
              {
                todos.length > 0 ?
                  todos.map(t => (
                    <div class="horizontal-or-flex-only padding-edge align-items-center grey-solid-top-bottom justify-content-flex-start background-todos-half" key={t.id}>
                      <input type="radio" onChange={() => toggleTodo(t.id)} checked={t.done ? true : false} />
                      <p>{t.content}</p>
                    </div>
                  )) :
                  <p>"No tasks"</p>
              }
              <div
                class="horizontal-or-flex-only padding-edge align-items-center grey-solid-top-bottom justify-content-flex-start background-todos-half">
              </div>
              <div
                class="horizontal-or-flex-only grey-solid-top-bottom padding-edge align-items-center justify-content-flex-start background-todos-half">
                <input type="radio" checked="checked" />
                <p>Eat</p>
              </div>
            </div>
            <div
              class="horizontal-or-flex-only background-todos-twenty justify-content-flex-start align-items-center">
              <div class="horizontal-or-flex-only justify-content-flex-start half-width padding-edge">
                <p>2 items left</p>
              </div>
              <div class="horizontal-or-flex-only justify-content-flex-start half-width">
                <div class="horizontal-or-flex-only justify-content-space-around state-tasks">
                  <button>All</button>
                  <button>Active</button>
                  <button>Completed</button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="horizontal-or-flex-only flex-direction-column justify-content-space-around align-items-center background-credits">
            <p class="credits">Double-click to edit a todo</p>
            <p class="credits">Created by Jo</p>
            <p class="credits">Part of TodoMVC</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
