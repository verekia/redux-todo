import React from 'react';

function FilterButton(props) {
  return (
    <>
      <button onClick={() => props.setFilter('all')}>All</button>
      <button onClick={() => props.setFilter('active')}>Active</button>
      <button onClick={() => props.setFilter('completed')}>Completed</button>
    </>
  );
}

export default FilterButton;
