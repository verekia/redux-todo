import store from './src/store';

import Header from './src/features/header/Header';
import Footer from './src/features/footer/Footer';
import TodoList from './src/features/todos/TodoList';

const IndexPage = () => {
  return (
    <div className="container mx-auto max-w-3xl bg-gradient-to-r from-green-400 to-blue-500 my-8 p-9 rounded-3xl font-poppins">
      <h1 className="text-center text-8xl font-bold text-white">ToDooo</h1>
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
};

export default IndexPage;
