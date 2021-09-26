import React, { useState } from 'react';

function Todo(props) {
  console.log(props);
  const [newName, setNewName] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleNewName = e => {
    setNewName(e.target.value);
  };

  const handleSubmit = () => {
    props.editTodo(props.id, newName);
    setIsEditing(false);
  };

  const viewTemplate = (
    <div>
      <button onClick={() => props.handleComplete(props.id)}>Done</button>
      <span style={{ textDecoration: props.isCompleted ? 'line-through' : 'none' }}>
        {props.content}
      </span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => props.handleDelete(props.id)}>Delete</button>
    </div>
  );

  const editTemplate = (
    <div>
      <span>{props.content}</span>
      <input onChange={handleNewName} />
      <button onClick={() => handleSubmit()}>Save</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </div>
  );

  return <li key={props.id}>{isEditing ? editTemplate : viewTemplate}</li>;
}

export default Todo;
