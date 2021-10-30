import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import useInputState from './hooks/useInputState'

function EditTodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        addTodo(value)
        reset()
      }}
      style={{ marginLeft: '1rem', width: '50%' }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        label='Add new todo'
        margin='normal'
        fullWidth
        autoFocus
      />
    </form>
  )
}

export default EditTodoForm
