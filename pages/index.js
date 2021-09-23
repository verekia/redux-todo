import { useState } from 'react'

const IndexPage = () => {
  const [count, setCount] = useState(0)

  const doubleCount = count * 2

  const handleIncrementClick = () => {
    setCount(count + 1)
  }
  const handleDecrementClick = () => {
    setCount(count - 1)
  }
  const handleAdd = num => {
    setCount(count + num)
  }

  return (
    <>
      <h1 className="count">
        {count} (double: {doubleCount})
      </h1>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={() => handleAdd(5)}>Add 5</button>
      <button onClick={() => handleAdd(10)}>Add 10</button>
    </>
  )
}

export default IndexPage
