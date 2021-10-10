import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { complete, add, view, remove, reading, tasks, tasksLengthAll, tasksLengthIncomplete, tasksLengthComplete } from '../lib/redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faTrash, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'


const IndexPage = () => {
  const [inputValue, setInputValue] = useState('')
  const todos = useSelector(tasks)
  const read = useSelector(reading)
  const numberTasks = useSelector(tasksLengthAll)
  const numberIncompleteTasks = useSelector(tasksLengthIncomplete)
  const numberCompleteTasks = useSelector(tasksLengthComplete)
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    let id = Math.random()
    dispatch(add({ id, content: inputValue, done: false }))
    setInputValue('')
  }

  const toggleTodo = t => {
    let todo = todos.filter(to => to.id === t)
    todo = todo[0]
    todo.done = true
    dispatch(complete(t))
  }

  const toggleReading = r => {
    dispatch(view(r))
  }

  const removeTodo = t => {
    dispatch(remove(t))
  }

  return (
    <div className="horizontal-or-flex-only">
      <div className="menu">
        <div className="menu-fourty-high">
          <div className="horizontal-or-flex-only flex-direction-column padding-edge titles">
            <h2 className="titles-biggest">React</h2>
            <h3 className="titles-medium">Example</h3>
            <p className="titles-smallest">Source</p>
            <h3 className="titles-medium">React + Backbone.js</h3>
            <p className="titles-smallest">Demo, Source</p>
            <h3 className="titles-medium">Scala.js + React</h3>
            <p className="titles-smallest">Demo, Source</p>
            <h3 className="titles-medium">TypeScript + React</h3>
            <p className="titles-smallest">Demo, Source</p>
            <h3 className="titles-medium">React + Alt</h3>
            <p className="titles-smallest">Demo, Source</p>
          </div>
        </div>
        <div
          className="menu-twenty-high horizontal-or-flex-only dotted-top-bottom align-items-center justify-content-space-around flex-direction-column padding-top-and-bottom">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <div className="speech-bubble-clippy horizontal-or-flex-only justify-content-space-around">
            <p className="speech-bubble-clippy-text">React is a JavaScript library for creating user interfaces. Its
              core principles are declarative code,
              efficiency, and flexibility. Simply specify what your component looks like and React will keep it
              up-to-date when the underlying data changes.</p>
          </div>
          <FontAwesomeIcon icon={faQuoteRight} />
          <div className="horizontal-or-flex-only react-label-space justify-content-flex-end align-items-center wider">
            <p className="react-label">React</p>
          </div>
        </div>
        <div className="menu-thirty-five-high">
          <div
            className="horizontal-or-flex-only menu-half-high justify-content-space-around flex-direction-column padding-edge padding-top-and-bottom">
            <h2 className="titles-biggest">Official Resources</h2>
            <p className="titles-smallest">Tutorial</p>
            <p className="titles-smallest">Philosophy</p>
            <p className="titles-smallest">Support</p>
            <p className="titles-smallest">Flux architecture example</p>
          </div>
          <div
            className="horizontal-or-flex-only menu-half-high justify-content-space-around flex-direction-column padding-edge">
            <h2 className="titles-biggest">Community</h2>
            <p className="titles-smallest">ReactJS on Stack Overflow</p>
            <p className="titles-smallest">Google Groups Mailing List</p>
            <p className="titles-smallest">IRC</p>
          </div>
        </div>
      </div>
      <div className="horizontal-or-flex-only background align-items-center flex-direction-column">
        <div
          className="horizontal-or-flex-only background-items justify-content-space-between flex-direction-column">
          <div className="background-title horizontal-or-flex-only justify-content-space-around">
            <h1>todos</h1>
          </div>
          <div className="background-todos horizontal-or-flex-only flex-direction-column flex-grow-10 drop-shadow-edge">
            <form onSubmit={handleSubmit} className="horizontal-or-flex-only background-todos-form drop-shadow-edge">
              <div className="horizontal-or-flex-only padding-edge align-items-center">
                <FontAwesomeIcon icon={faChevronDown} />
                <input value={inputValue} className="no-outline" placeholder="What needs to be done?" onChange={e => setInputValue(e.target.value)} />
              </div>
            </form>
            <div className="horizontal-or-flex-only background-todos-list flex-direction-column flex-grow-10">
              {
                todos ?
                  todos.map(t => {
                    if (read === "all") {
                      return (
                        <div className="horizontal-or-flex-only padding-edge align-items-center grey-solid-top-bottom justify-content-flex-start background-todos-half" key={t.id}>
                          <input type="radio" onChange={() => toggleTodo(t.id)} checked={t.done ? true : false} />
                          <p>{t.content}</p>
                          <button class="delete-button" onClick={() => removeTodo(t.id)}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                      )
                    } else if (read === "done" && t.done) {
                      return (
                        <div className="horizontal-or-flex-only padding-edge align-items-center grey-solid-top-bottom justify-content-flex-start background-todos-half" key={t.id}>
                          <input type="radio" onChange={() => toggleTodo(t.id)} checked={t.done ? true : false} />
                          <p>{t.content}</p>
                          <button class="delete-button" onClick={() => removeTodo(t.id)}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                      )
                    } else if (read === "undone" && !t.done) {
                      return (
                        <div className="horizontal-or-flex-only padding-edge align-items-center grey-solid-top-bottom justify-content-flex-start background-todos-half" key={t.id}>
                          <input type="radio" onChange={() => toggleTodo(t.id)} checked={t.done ? true : false} />
                          <p>{t.content}</p>
                          <button class="delete-button" onClick={() => removeTodo(t.id)}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                      )
                    }
                  }
                  ) :
                  <div className="horizontal-or-flex-only padding-edge align-items-center grey-solid-top-bottom justify-content-flex-start background-todos-half">
                    <p>No tasks</p>
                  </div>
              }
              <div
                className="horizontal-or-flex-only padding-edge align-items-center grey-solid-top-bottom justify-content-flex-start background-todos-half">
              </div>
            </div>
            <div
              className="horizontal-or-flex-only background-todos-footer justify-content-flex-start align-items-center">
              <div className="horizontal-or-flex-only justify-content-flex-start half-width padding-edge">
                <p>{read === "all" && numberTasks}{read === "done" && numberCompleteTasks}{read === "undone" && numberIncompleteTasks} items</p>
              </div>
              <div className="horizontal-or-flex-only justify-content-flex-start half-width">
                <div className="horizontal-or-flex-only justify-content-space-around state-tasks">
                  <button onClick={() => toggleReading("all")} className={read === "done" || read === "undone" ? "button-mode" : "button-mode-active"}>All</button>
                  <button onClick={() => toggleReading("undone")} className={read === "undone" ? "button-mode-active" : "button-mode"}>Active</button>
                  <button onClick={() => toggleReading("done")} className={read === "done" ? "button-mode-active" : "button-mode"}>Completed</button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="horizontal-or-flex-only flex-direction-column justify-content-space-around align-items-center background-credits">
            <p className="credits">Double-click to edit a todo</p>
            <p className="credits">Created by Jo</p>
            <p className="credits">Part of TodoMVC</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
