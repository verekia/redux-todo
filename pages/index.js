import Input from './Input'
import Todos from './Todos'

const IndexPage = () => {
  return (
    <>
      <h1>My Todos</h1>
      <Input />
      <Todos />

      {/* <h1 className="count">
        {count} (double: {doubleCount})
      </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(add(5))}>Add 5</button>
      <button onClick={() => dispatch(add(10))}>Add 10</button> */}
    </>
  )
}

export default IndexPage
