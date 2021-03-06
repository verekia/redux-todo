import { useSelector, useDispatch } from 'react-redux'

import { add, decrement, increment, countSelector, doubleCountSelector } from '../lib/redux'

const IndexPage = () => {
  const dispatch = useDispatch()
  const count = useSelector(countSelector)
  const doubleCount = useSelector(doubleCountSelector)

  return (
    <>
      <h1 className="count">
        {count} (double: {doubleCount})
      </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(add(5))}>Add 5</button>
      <button onClick={() => dispatch(add(10))}>Add 10</button>
    </>
  )
}

export default IndexPage
