import { useState } from 'react'

const CounterFn = () => {
  const [count, setCount] = useState(0)

  const handleCount = () => setCount(count + 1)

  return (
    <div>
      <h1>CounterFn</h1>
      <h2>The count is: {count}</h2>
      <button onClick={handleCount}>+1</button>
    </div>
  )
}

export default CounterFn
