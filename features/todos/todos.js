import { useState } from 'react'
import TodoMap from '../todoMap/todoMap'
import FiltersActions from '../filtersActions/filtersActions'
import Input from '../input/input'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
    addTodo,
    remove,
    toggle,
    clear,
    batch,
    selectTodos,
    selectActiveTodos,
    selectInactiveTodos,
    selectIsComplete
} from './todosSlice'

const Todos = () => {
    const dispatch = useAppDispatch()
    const todos = useAppSelector(selectTodos)
    const activeTodos = useAppSelector(selectActiveTodos)
    const inactiveTodos = useAppSelector(selectInactiveTodos)
    const isComplete = useAppSelector(selectIsComplete)

    const [inputValue, setInputValue] = useState('')
    const [view, setView] = useState('All')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue !== '') {
            dispatch(addTodo(inputValue))
            setInputValue('')
        }
    }

    return (
        <div className="w-11/12 md:w-8/12 lg:w-1/2 mx-auto my-10 flex justify-center flex-wrap bg-gray-800 md:p-5 rounded-xl">
            <h1>TODOS</h1>
            <Input
                handleSubmit={(e) => handleSubmit(e)}
                inputValue={inputValue}
                setInputValue={(v) => setInputValue(v)}
                batch={() => dispatch(batch(isComplete))}
            />

            <TodoMap
                todos={
                    view === 'All' ? todos :
                        view === 'Active' ? activeTodos :
                            view === 'Inactive' && inactiveTodos
                }
                remove={(id) => dispatch(remove(id))}
                toggle={(id) => dispatch(toggle(id))}
            />

            <FiltersActions
                view={view}
                setView={(v) => setView(v)}
                clear={() => dispatch(clear())}
                remaining={activeTodos.length}
            />
        </div>
    )
}

export default Todos