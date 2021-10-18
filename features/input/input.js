import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addTodo, batch, selectIsComplete } from "../Todos/todosSlice"

const Input = () => {
    const dispatch = useDispatch()
    const isComplete = useSelector(selectIsComplete)
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue !== '') {
            dispatch(addTodo(inputValue))
            setInputValue('')
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex justify-evenly items-center my-5"
        >
            <button
                type="button"
                className="w-1/12 md:w-10 h-10 mx-2 md:mx-5 text-center text-lg md:text-3xl"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(batch(isComplete))
                }}
            >
                &#8595;
            </button>
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className="w-10/12 p-3 box-border border-4 border-white text-indigo-800"
                placeholder="What needs doing?"
            />
            <button
                type="submit"
                className="w-1/12 text-lg md:text-2xl"
            >
                &#43;
            </button>
        </form>
    )
}

export default Input