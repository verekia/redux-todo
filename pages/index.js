import { useSelector, useDispatch } from 'react-redux';

import { add, decrement, increment, countSelector, doubleCountSelector } from '../lib/redux';

const IndexPage = () => {
  const dispatch = useDispatch();
  const count = useSelector(countSelector);
  const doubleCount = useSelector(doubleCountSelector);

  return (
    <>
      <h1>Redux Todo App</h1>
    </>
  );
};

export default IndexPage;
