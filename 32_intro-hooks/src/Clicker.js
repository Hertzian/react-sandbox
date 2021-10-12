import { useState, useEffect } from 'react'

function Clicker() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <h1>Clicker {count}</h1>
      <button onClick={() => setCount(count + 1)}>Clicke me {count}</button>
    </div>
  )
}

export default Clicker
