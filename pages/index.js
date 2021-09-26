import { useState } from 'react';

import Todo from './src/Todo';
import Form from './src/Form';
import FilterButton from './src/FilterButton';

const IndexPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoContent, setNewTodoContent] = useState('');
  const [filter, setFilter] = useState('all');

  const submitHandler = e => {
    e.preventDefault();
    if (newTodoContent.trim().length === 0) {
      alert('Task can not be empty!');
      return;
    } else {
      setTodos([...todos, { id: Math.random(), content: newTodoContent, isCompleted: false }]);
    }
    setNewTodoContent('');
  };

  const handleDelete = id => {
    const remainingTodos = todos.filter(todo => id !== todo.id);
    setTodos(remainingTodos);
  };

  const handleComplete = id => {
    const updatedTask = todos.map(todo => {
      if (id === todo.id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTask);
  };

  const editTodo = (id, newContent) => {
    const editedTodo = todos.map(t => {
      if (id === t.id) {
        return { ...t, content: newContent };
      }
      return t;
    });
    setTodos(editedTodo);
  };

  const filteredTodo = todos.filter(todo => {
    if (filter === 'active') return !todo.isCompleted;
    if (filter === 'completed') return todo.isCompleted;
    if (filter === 'all') return true;
  });

  const taskNoun = todos.length > 1 ? 'tasks' : 'task';
  const taskTest = `${todos.length} ${taskNoun} remained!`;

  return (
    <>
      <Form
        submitHandler={submitHandler}
        newTodoContent={newTodoContent}
        setNewTodoContent={setNewTodoContent}
      />
      <ul>
        {taskTest}
        {filteredTodo.map(t => (
          <Todo
            id={t.id}
            content={t.content}
            isCompleted={t.isCompleted}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            editTodo={editTodo}
          />
        ))}
      </ul>
      <FilterButton setFilter={setFilter} />
    </>
  );
};

export default IndexPage;
