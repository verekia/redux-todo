import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { todoAdded } from '../todos/todosSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const changeHandler = e => setText(e.target.value);
  const keydownHandler = e => {
    const trimmedText = e.target.value.trim();
    if (e.key === 'Enter' && trimmedText) {
      dispatch({ type: 'todos/todoAdded', payload: trimmedText });
      setText('');
    }
  };

  return (
    <header className="text-center mt-5">
      <input
        placeholder="What need to get done?"
        value={text}
        onChange={changeHandler}
        onKeyDown={keydownHandler}
        className="px-4 py-2 rounded-md text-xl"
      />
    </header>
  );
};

export default Header;
