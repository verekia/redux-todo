import { useState } from 'react'
import Todo from '../Todo/Todo'
import FiltersActions from '../FiltersActions/FiltersActions'
import Input from '../Input/Input'
import { useSelector } from 'react-redux'

import {
    selectTodos,
    selectActiveTodos,
    selectInactiveTodos
} from './todosSlice'

const Todos = () => {
    const todos = useSelector(selectTodos)
    const activeTodos = useSelector(selectActiveTodos)
    const inactiveTodos = useSelector(selectInactiveTodos)

    const [view, setView] = useState('All')

    const current = view === 'All' ? todos :
        view === 'Active' ? activeTodos :
            view === 'Inactive' && inactiveTodos

    return (
        <div className="w-11/12 md:w-8/12 lg:w-1/2 mx-auto my-10 flex justify-center flex-wrap bg-gray-800 md:p-5 rounded-xl">
            <h1>TODOS</h1>

            <Input />

            {
                Object.values(current).map(t => {
                    return <Todo key={t.id} t={t} />
                })
            }

            <FiltersActions
                view={view}
                setView={(v) => setView(v)}
            />

        </div>
    )
}

export default Todos