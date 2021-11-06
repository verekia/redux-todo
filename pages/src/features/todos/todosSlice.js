import { nanoid } from 'nanoid';

import { createSelector } from 'reselect';

import { StatusFilters } from '../filters/filtersSlice';

const initialState = [
  { id: 0, text: 'Learn React', completed: true },
  { id: 1, text: 'Learn Redux', completed: true },
  { id: 2, text: 'Finish Jonathan homework', completed: false },
];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/todoAdded': {
      return [
        ...state,
        {
          id: nanoid(),
          text: action.payload,
          completed: false,
        },
      ];
    }

    case 'todos/todoToggle': {
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    }

    case 'todos/todoDeleted': {
      return state.filter(todo => todo.id !== action.payload);
    }

    case 'todos/allCompleted': {
      return state.map(todo => {
        return {
          ...todo,
          completed: true,
        };
      });
    }

    case 'todos/deleteCompleted': {
      return state.filter(todo => !todo.completed);
    }

    case 'todos/todoLoaded': {
      return action.payload;
    }

    default:
      return state;
  }
};

export const selectTodoIds = createSelector(
  state => state.todos,
  todos => todos.map(todo => todo.id)
);

export const selectFilteredTodos = createSelector(
  state => state.todos,
  state => state.filters.status,
  (todos, status) => {
    if (status === StatusFilters.All) {
      return todos;
    }

    const completedStatus = status === StatusFilters.Completed;
    return todos.filter(todos => todos.completed === completedStatus);
  }
);

export const selectFilteredTodoIds = createSelector(selectFilteredTodos, filteredTodos =>
  filteredTodos.map(todo => todo.id)
);

export default todosReducer;
