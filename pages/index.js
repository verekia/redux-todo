// import { useState, useEffect } from 'react'
import { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { complete, add, view, remove, reading, tasks, tasksLengthAll, tasksLengthIncomplete, tasksLengthComplete } from '../lib/redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faTrash, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client'
import style from '../styles/IndexPage.module.scss'

const prisma = new PrismaClient();

export const getServerSideProps = async () => {
  const allTodos = await prisma.todo.findMany();
  return {
    props: {
      initialTodos: allTodos,
    }
  }
}

const IndexPage = ({ initialTodos }) => {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState(initialTodos)
  const [read, setRead] = useState("all")
  const [numberTodos, setNumberTodos] = useState(initialTodos.length)
  // const numberTasks = useSelector(tasksLengthAll)
  // const numberIncompleteTasks = useSelector(tasksLengthIncomplete)
  // const numberCompleteTasks = useSelector(tasksLengthComplete)
  // const dispatch = useDispatch()
  // let j;
  let id;

  const handleSubmit = async e => {
    e.preventDefault()
    id = uuidv4().split("")
    id = id.map(u => {
      return ((u !== "-") && (u.charCodeAt(0) < 65 && u.charCodeAt(0) < 90) && (u.charCodeAt(0) < 97 && u.charCodeAt(0) < 122)) ? parseInt(u, 10) : 0
    })
    let newId = parseInt((id.join("")), 10)
    newId = Math.floor(newId / 1000000000000000000000000000000)
    setTodos([...todos, { id: newId, content: inputValue, done: false }])
    await saveTodo({ id: newId, content: inputValue, done: false })
    setInputValue('')
  }

  const saveTodo = async todo => {
    const response = await fetch('api/todos/todos', {
      method: 'POST',
      body: JSON.stringify(todo)
    })
    if (!response.ok) {
      console.log(response.statusText)
      throw new Error(response.statusText)
    }
    return await response.json()
  }

  const toggleTodo = async todoFiltered => {
    const todosFiltered = initialTodos.filter(todo => {
      if (todo.id !== todoFiltered.id) {
        return todo
      } else {
        todo.done = !(todo.done)
        return todo
      }
    })
    setTodos([...todosFiltered])
    await updateTodo(todoFiltered)
  }

  const updateTodo = async (todo) => {
    const response = await fetch(`/api/todos/todos`, {
      method: 'PATCH',
      body: todo.id
    })
    const data = await response.json()
  }

  const toggleReading = async r => {
    setRead(r)
    let numberTodos = 0;
    initialTodos.map((todo) => {
      if (r === "all") {
        return numberTodos++
      } else if (r === "done" && todo.done === true) {
        return numberTodos++
      } else if (r === "undone" && todo.done === false) {
        return numberTodos++
      }
    })
    setNumberTodos(numberTodos)
  }

  const deleteTodo = async (todoId) => {
    const response = await fetch(`/api/todos/todos`, {
      method: 'DELETE',
      body: todoId
    })
    const data = await response.json()
  }

  const removeTodo = async t => {
    const todosFiltered = initialTodos.filter(todo => {
      if (todo.id !== t) {
        return todo
      }
    })
    setTodos(todosFiltered)
    await deleteTodo(t)
  }

  const task = t => {
    return (
      <div className={style.task} key={t.id}>
        <input type="radio" onChange={() => toggleTodo(t)} checked={t.done ? true : false} />
        <p>{t.content}</p>
        <button className={style.deleteButton} onClick={() => removeTodo(t.id)}><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    )
  }

  return (
    <div className={style.entirePage}>
      <div className={style.menu}>
        <div className={style.menuFortyHigh}>
          <div className={style.firstRowMenu}>
            <h2 className={style.titlesBiggest}>React</h2>
            <h3 className={style.titlesMedium}>Example</h3>
            <p className={style.titlesSmallest}>Source</p>
            <h3 className={style.titlesMedium}>React + Backbone.js</h3>
            <p className={style.titlesSmallest}>Demo, Source</p>
            <h3 className={style.titlesMedium}>Scala.js + React</h3>
            <p className={style.titlesSmallest}>Demo, Source</p>
            <h3 className={style.titlesMedium}>TypeScript + React</h3>
            <p className={style.titlesSmallest}>Demo, Source</p>
            <h3 className={style.titlesMedium}>React + Alt</h3>
            <p className={style.titlesSmallest}>Demo, Source</p>
          </div>
        </div>
        <div
          className={style.bubbleRowMenu}>
          <FontAwesomeIcon icon={faQuoteLeft} className={style.faQuoteLeft} />
          <div className={style.speechBubbleClippy}>
            <p className={style.speechBubbleClippyText}>React is a JavaScript library for creating user interfaces.Its
              core principles are declarative code,
              efficiency, and flexibility.Simply specify what your component looks like and React will keep it
              up-to-date when the underlying data changes.</p>
          </div>
          <FontAwesomeIcon icon={faQuoteRight} className={style.faQuoteRight} />
          <div className={style.reactLabelSpace}>
            <p className={style.reactLabel}>React</p>
          </div>
        </div>
        <div className={style.menuThirtyFiveHigh}>
          <div
            className={style.listBottomThirdMenu}>
            <h2 className={style.titlesBiggest}>Official Resources</h2>
            <p className={style.titlesSmallest}>Tutorial</p>
            <p className={style.titlesSmallest}>Philosophy</p>
            <p className={style.titlesSmallest}>Support</p>
            <p className={style.titlesSmallest}>Flux architecture example</p>
          </div>
          <div
            className={style.listBottomThirdMenu}>
            <h2 className={style.titlesBiggest}>Community</h2>
            <p className={style.titlesSmallest}>ReactJS on Stack Overflow</p>
            <p className={style.titlesSmallest}>Google Groups Mailing List</p>
            <p className={style.titlesSmallest}>IRC</p>
          </div>
        </div>
      </div>
      <div className={style.mainBackground}>
        <div
          className={style.grid}>
          <div className={style.firstGrid}>
            <h1 className={style.bigTitles}>todos</h1>
          </div>
          <div className={style.secondGrid}>
            <form onSubmit={handleSubmit} className={style.form}>
              <div className={style.formField}>
                <FontAwesomeIcon icon={faChevronDown} />
                <input value={inputValue} name="todo" className={style.noOutline} placeholder="What needs to be done?" onChange={e => setInputValue(e.target.value)} />
              </div>
            </form>
            <div className={style.todoArea}>
              {
                todos ?
                  todos.map(t => {
                    if (read === "all") {
                      return task(t)
                    } else if (read === "done" && t.done) {
                      return task(t)
                    } else if (read === "undone" && !t.done) {
                      return task(t)
                    }
                  }
                  ) :
                  <div className={style.listTasks}>
                    <p>No tasks</p>
                  </div>
              }
              <div
                className={style.lastBoxTodos}>
              </div>
            </div>
            <div
              className={style.innerLastBoxTodos}>
              <div className={style.itemLengthBox}>
                <p>{numberTodos} Items</p>
              </div>
              <div className={style.boxButtonsState}>
                <div className={style.buttonsState}>
                  <button onClick={() => toggleReading("all")} className={read === "all" ? style.buttonActive : style.buttonInactive}>All</button>
                  <button onClick={() => toggleReading("undone")} className={read === "undone" ? style.buttonActive : style.buttonInactive}>Active</button>
                  <button onClick={() => toggleReading("done")} className={read === "done" ? style.buttonActive : style.buttonInactive}> Completed</button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={style.creditRoll}>
            <p className={style.credits}>Double-click to edit a todo</p>
            <p className={style.credits}>Created by Jo</p>
            <p className={style.credits}>Part of TodoMVC</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
