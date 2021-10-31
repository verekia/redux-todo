import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { complete, add, view, remove, reading, tasks, tasksLengthAll, tasksLengthIncomplete, tasksLengthComplete } from '../lib/redux'
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
  const read = useSelector(reading)
  const numberTasks = useSelector(tasksLengthAll)
  const numberIncompleteTasks = useSelector(tasksLengthIncomplete)
  const numberCompleteTasks = useSelector(tasksLengthComplete)
  const dispatch = useDispatch()
  let j;
  let id;

  const handleSubmit = async e => {
    e.preventDefault()
    id = uuidv4().split("")
    id = id.map(u => {
      return ((u !== "-") && (u.charCodeAt(0) < 65 && u.charCodeAt(0) < 90) && (u.charCodeAt(0) < 97 && u.charCodeAt(0) < 122)) ? parseInt(u, 10) : 0
    })
    let newId = parseInt((id.join("")), 10)
    newId = Math.floor(newId / 1000000000000000000000000000000)
    setTodos([{ id: newId, content: inputValue, done: false }, ...todos])
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
    const todosFiltered = initialTodos.filter(todo => todo.id !== todoFiltered.id)
    todoFiltered.done = true
    setTodos([...todosFiltered, todoFiltered])
    await updateTodo(todoFiltered)
  }

  const updateTodo = async (todo) => {
    const response = await fetch(`/api/todos/todos`, {
      method: 'PATCH',
      body: todo.id
    })
    const data = await response.json()
    console.log(data)
  }

  const toggleReading = async r => {
    // const todosFiltered = initialTodos.filter(todo => todo.id !== r)
    // const todoFiltered = initialTodos.filter(todo => todo.id === r)
    // todoFiltered.done = !todoFiltered.done
    // setTodos([...todosFiltered, todoFiltered])
    // await updateTodo(r)
  }

  const deleteTodo = async (todoId) => {
    const response = await fetch(`/api/todos/todos`, {
      method: 'DELETE',
      body: todoId
    })
    const data = await response.json()
    console.log(data)
  }



  const removeTodo = async t => {
    const todosFiltered = initialTodos.filter(todo => todo.id !== t)
    setTodos(todosFiltered)
    await deleteTodo(t)
  }

  const task = t => {
    return (
      <div className={`${style.horizontalOrFlexOnly} ${style.paddingEdge} ${style.alignItemsCenter} ${style.greySolidTopBottom} ${style.justifyContentFlexStart} ${style.backgroundTodosHalf}`} key={t.id}>
        <input type="radio" onChange={() => toggleTodo(t)} checked={t.done ? true : false} />
        <p>{t.content}</p>
        <button className={`${style.deleteButton}`} onClick={() => removeTodo(t.id)}><FontAwesomeIcon icon={faTrash} /></button>
      </div >
    )
  }

  return (
    <div className={`${style.horizontalOrFlexOnly} ${style.all}`}>
      <div className={`${style.menu}`}>
        <div className={`${style.menuFortyHigh}`}>
          <div className={`${style.horizontalOrFlexOnly} ${style.flexDirectionColumn} ${style.paddingEdge} ${style.titles}`}>
            <h2 className={`${style.medTitles} ${style.titlesBiggest}`}>React</h2>
            <h3 className={`${style.smallTitles} ${style.titlesMedium}`}>Example</h3>
            <p className={`${style.titlesSmallest}`}>Source</p>
            <h3 className={`${style.smallTitles} ${style.titlesMedium}`}>React + Backbone.js</h3>
            <p className={`${style.titlesSmallest}`}>Demo, Source</p>
            <h3 className={`${style.smallTitles} ${style.titlesMedium}`}>Scala.js + React</h3>
            <p className={`${style.titlesSmallest}`}>Demo, Source</p>
            <h3 className={`${style.smallTitles} ${style.titlesMedium}`}>TypeScript + React</h3>
            <p className={`${style.titlesSmallest}`}>Demo, Source</p>
            <h3 className={`${style.smallTitles} ${style.titlesMedium}`}>React + Alt</h3>
            <p className={`${style.titlesSmallest}`}>Demo, Source</p>
          </div>
        </div>
        <div
          className={`${style.menuTwentyHigh} ${style.horizontalOrFlexOnly} ${style.dottedTopBottom} ${style.alignItemsCenter} ${style.justifyContentSpaceAround} ${style.flexDirectionColumn} ${style.paddingTopAndBottom}`}>
          <FontAwesomeIcon icon={faQuoteLeft} />
          <div className={`${style.speechBubbleClippy} ${style.horizontalOrFlexOnly} ${style.justifyContentSpaceAround}`}>
            <p className={`${style.speechBubbleClippyText}`}>React is a JavaScript library for creating user interfaces.Its
              core principles are declarative code,
              efficiency, and flexibility.Simply specify what your component looks like and React will keep it
              up-to-date when the underlying data changes.</p>
          </div>
          <FontAwesomeIcon icon={faQuoteRight} />
          <div className={`${style.horizontalOrFlexOnly} ${style.reactLabelSpace} ${style.justifyContentFlexEnd} ${style.alignItemsCenter} ${style.wider}`}>
            <p className={`${style.reactLabel}`}>React</p>
          </div>
        </div >
        <div className={`${style.menuThirtyFiveHigh}`}>
          <div
            className={`${style.horizontalOrFlexOnly} ${style.menuHalfHigh} ${style.justifyContentSpaceAround} ${style.flexDirectionColumn} ${style.paddingEdge} ${style.paddingTopAndBottom}`}>
            <h2 className={`${style.medTitles} ${style.titlesBiggest}`}>Official Resources</h2>
            <p className={`${style.titlesSmallest}`}>Tutorial</p>
            <p className={`${style.titlesSmallest}`}>Philosophy</p>
            <p className={`${style.titlesSmallest}`}>Support</p>
            <p className={`${style.titlesSmallest}`}>Flux architecture example</p>
          </div>
          <div
            className={`${style.horizontalOrFlexOnly} ${style.menuHalfHigh} ${style.justifyContentSpaceAround} ${style.flexDirectionColumn} ${style.paddingEdge}`}>
            <h2 className={`${style.medTitles} ${style.titlesBiggest}`}>Community</h2>
            <p className={`${style.titlesSmallest}`}>ReactJS on Stack Overflow</p>
            <p className={`${style.titlesSmallest}`}>Google Groups Mailing List</p>
            <p className={`${style.titlesSmallest}`}>IRC</p>
          </div>
        </div>
      </div>
      <div className={`${style.horizontalOrFlexOnly} ${style.background} ${style.alignItemsCenter} ${style.flexDirectionColumn}`}>
        <div
          className={`${style.horizontalOrFlexOnly} ${style.backgroundItems} ${style.justifyContentSpaceBetween} ${style.flexDirectionColumn}`}>
          <div className={`${style.backgroundTitle} ${style.horizontalOrFlexOnly} ${style.justifyContentSpaceAround}`}>
            <h1 className={`${style.bigTitles}`}>todos</h1>
          </div>
          <div className={`${style.backgroundTodos} ${style.horizontalOrFlexOnly} ${style.flexDirectionColumn} ${style.flexGrow10} ${style.dropShadowEdge}`}>
            <form onSubmit={handleSubmit} className={`${style.horizontalOrFlexOnly} ${style.backgroundTodosForm} ${style.dropShadowEdge}`}>
              <div className={`${style.horizontalOrFlexOnly} ${style.paddingEdge} ${style.alignItemsCenter}`}>
                <FontAwesomeIcon icon={faChevronDown} />
                <input value={inputValue} name="todo" className={`${style.noOutline}`} placeholder="What needs to be done?" onChange={e => setInputValue(e.target.value)} />
              </div>
            </form>
            <div className={`${style.horizontalOrFlexOnly} ${style.backgroundTodosList} ${style.flexDirectionColumn} ${style.flexGrow10}`}>
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
                  <div className={`${style.horizontalOrFlexOnly} ${style.paddingEdge} ${style.alignItemsCenter} ${style.greySolidTopBottom} ${style.justifyContentFlexStart} ${style.backgroundTodosHalf}`}>
                    <p>No tasks</p>
                  </div>
              }
              <div
                className={`${style.horizontalOrFlexOnly} ${style.paddingEdge} ${style.alignItemsCenter} ${style.greySolidTopBottom} ${style.justifyContentFlexStart} ${style.backgroundTodosHalf}`}>
              </div>
            </div>
            <div
              className={`${style.horizontalOrFlexOnly} ${style.backgroundTodosFooter} ${style.justifyContentFlexStart} ${style.alignItemsCenter}`}>
              <div className={`${style.horizontalOrFlexOnly} ${style.justifyContentFlexStart} ${style.halfWidth} ${style.paddingEdge}`}>
                <p>{initialTodos.length} Items</p>
              </div>
              <div className={`${style.horizontalOrFlexOnly} ${style.justifyContentFlexStart} ${style.halfWidth}`}>
                <div className={`${style.horizontalOrFlexOnly} ${style.justifyContentSpaceAround} ${style.stateTasks}`}>
                  <button onClick={() => toggleReading("all")} className={read === "done" || read === "undone" ? `${style.buttonMode} ${style.stateTasksButtons}` : `${style.buttonModeActive} ${style.stateTasksButtons}`}>All</button>
                  <button onClick={() => toggleReading("undone")} className={read === "undone" ? `${style.buttonModeActive} ${style.stateTasksButtons}` : `${style.buttonMode} ${style.stateTasksButtons}`}>Active</button>
                  <button onClick={() => toggleReading("done")} className={read === "done" ? `${style.buttonModeActive} ${style.stateTasksButtons}` : `{style.buttonMode} ${style.stateTasksButtons}`}> Completed</button >
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${style.horizontalOrFlexOnly} ${style.flexDirectionColumn} ${style.justifyContentSpaceAround} ${style.alignItemsCenter} ${style.backgroundCredits}`}>
            <p className={`${style.credits}`}>Double-click to edit a todo</p>
            <p className={`${style.credits}`}>Created by Jo</p>
            <p className={`${style.credits}`}>Part of TodoMVC</p>
          </div >
        </div >
      </div >
    </div >
  )
}

export default IndexPage
