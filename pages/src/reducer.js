const initialState = {
  todos: [
    { id: 0, name: 'Learn React', completed: true },
    { id: 1, name: 'Learn Redux', completed: true },
    { id: 2, name: 'Finish Jonathan homework', completed: false },
  ],
  filter: {
    status: 'All',
  },
};

const Reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default Reducer;
