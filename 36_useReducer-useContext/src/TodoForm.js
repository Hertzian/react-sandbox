import { useContext } from 'react'
import useInputState from './hooks/useInputState'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import { TodosContext } from './context/todos.context'

function TodoForm() {
  const [value, handleChange, reset] = useInputState('')
  const { dispatch } = useContext(TodosContext)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD', task: value })
    reset()
  }

  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form onSubmit={submitHandler}>
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add new todo'
          fullWidth
        />
      </form>
    </Paper>
  )
}

export default TodoForm
