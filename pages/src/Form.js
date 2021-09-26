import React from 'React';

function Form(props) {
  console.log(props);
  return (
    <form onSubmit={props.submitHandler}>
      <input value={props.newTodoContent} onChange={e => props.setNewTodoContent(e.target.value)} />
      <button type="submit">Add todo</button>
    </form>
  );
}

export default Form;
