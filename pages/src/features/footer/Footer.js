import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StatusFilters, statusFilterChanged } from '../filters/filtersSlice';
import { deleteCompleted, todoAllCompleted } from '../todos/todosSlice';

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's';

  return (
    <div>
      <h5 className="text-xl font-bold">Remaining Todos</h5>
      <div className="mt-2 text-lg">
        <strong>{count}</strong> task{suffix} left
      </div>
    </div>
  );
};

const StatusFilter = ({ value: status, onChange }) => {
  const renderedFilters = Object.keys(StatusFilters).map(key => {
    const value = StatusFilters[key];

    const clickHandler = () => onChange(value);
    const classActive = value === status ? 'bg-gray-300' : '';

    return (
      <li key="value">
        <button
          className={`${classActive}  hover:bg-white w-1/2 mt-0.5 rounded`}
          onClick={clickHandler}
        >
          {key}
        </button>
      </li>
    );
  });

  return (
    <div>
      <h5 className="text-xl font-bold">Filter</h5>
      <ul className="mt-2">{renderedFilters}</ul>
    </div>
  );
};

function Footer() {
  const dispatch = useDispatch();

  const todosRemaining = useSelector(state => {
    const uncompletedTodo = state.todos.filter(todo => !todo.completed);
    return uncompletedTodo.length;
  });

  const { status } = useSelector(state => state.filters);

  const onStatusChange = status => {
    dispatch({ type: 'filter/statusFilterChanged', payload: status });
  };

  const markAllCompletedHandler = () => {
    dispatch({ type: 'todos/allCompleted' });
  };

  const clearCompletedHandler = () => {
    dispatch({ type: 'todos/deleteCompleted' });
  };

  return (
    <footer className="grid grid-cols-3 mt-10 text-center">
      <div className="text-center">
        <h5 className="text-xl font-bold">Actions</h5>
        <div className="mt-3">
          <button className="bg-white px-2 py-1 rounded-md w-4/5" onClick={markAllCompletedHandler}>
            Mark all completed
          </button>
          <button
            className="bg-white px-2 py-1 rounded-md w-4/5 mt-3"
            onClick={clearCompletedHandler}
          >
            Clear Completed
          </button>
        </div>
      </div>

      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
    </footer>
  );
}

export default Footer;
