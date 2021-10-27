import { useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Clean fishtank', completed: false },
    { id: 2, task: 'Washr', completed: true },
    { id: 3, task: 'Grow beard', completed: true }
  ]
  const [todos, setTodos] = useState(initialTodos)

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }])
  }

  return (
    <Paper
      style={{
        padding: 0,
        marging: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <ToolBar>
          <Typography color='inherit'>todos with hoooks</Typography>
        </ToolBar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp
