import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DeleteIcon from './times-solid.svg';
import { todoToggle, todoDeleted } from './todosSlice';

const selectTodoById = (state, todoId) => {
  return state.todos.find(todo => todo.id === todoId);
};

const TodoListItem = ({ id }) => {
  const todo = useSelector(state => selectTodoById(state, id));
  const dispatch = useDispatch();

  const { text, completed } = todo;

  const completedChangeHandler = () => {
    dispatch({ type: 'todos/todoToggle', payload: todo.id });
  };

  const todoDeleteHandler = () => {
    dispatch({ type: 'todos/todoDeleted', payload: todo.id });
  };

  return (
    <li className="mb-2 bg-gray-50 px-4 py-2">
      <div className="grid grid-cols-8">
        <div className="flex items-center col-start-1 col-end-8 gap-4">
          <input
            type="checkbox"
            checked={completed}
            onChange={completedChangeHandler}
            className="w-6 h-6 justify-items-center"
          />
          <div>{text}</div>
        </div>
        <button onClick={todoDeleteHandler} className="justify-self-end">
          <DeleteIcon className="w-8 h-8 self-center text-red-900" />
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
