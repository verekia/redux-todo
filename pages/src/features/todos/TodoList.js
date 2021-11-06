import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { selectFilteredTodoIds } from './todosSlice';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todoIds = useSelector(selectFilteredTodoIds);

  const renderedListItems = todoIds.map(todoId => {
    return <TodoListItem key={todoId} id={todoId} />;
  });

  return <ul className="text-2xl mt-5">{renderedListItems}</ul>;
};

export default TodoList;
