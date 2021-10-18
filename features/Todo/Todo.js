import { useDispatch } from 'react-redux'
import { toggle, remove } from '../Todos/todosSlice'

const Todo = ({
    t
}) => {
    const dispatch = useDispatch()

    return (
        <div key={t.id} className="w-full">
            <li key={t.id} className="list-none flex justify-evenly items-center mb-5">
                <button
                    className="
                                border-2
                                md:border-4 
                                border-white
                                w-1/12
                                md:w-10 
                                h-10 
                                mx-2
                                md:mx-5 
                                rounded-full 
                                text-white
                                hover:bg-indigo-400
                                text-xl
                                "
                    onClick={() => dispatch(toggle(t.id))}
                >
                    {t.complete && <>&#10003;</>}
                </button>
                <div
                    className="w-10/12 border-2 md:border-4 border-white p-2 text-left"
                    style={t.complete ? { textDecoration: 'line-through', color: "white" } : {}}
                >
                    {t.text}
                </div>
                <button
                    className="w-1/12 text-lg md:text-2xl"
                    onClick={() => dispatch(remove(t.id))}
                >
                    &#x2715;
                </button>
            </li>
        </div>
    )
}

export default Todo