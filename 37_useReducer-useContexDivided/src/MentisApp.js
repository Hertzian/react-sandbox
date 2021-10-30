import { useReducer } from 'react'

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.amount }
    case 'DECREMENT':
      return { count: state.count - action.amount }
    case 'RESET':
      return { count: 0 }
    default:
      return { state }
  }
  //if (action.type === 'INCREMENT') return { count: state.count + action.amount }
  //if (action.type === 'DECREMENT') return { count: state.count - action.amount }
}

function MentisApp() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 })

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT', amount: 1 })}>
        Add 1
      </button>
      <button onClick={() => dispatch({ type: 'INCREMENT', amount: 5 })}>
        Add 5
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', amount: 1 })}>
        Subtract 1
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  )
}
export default MentisApp
