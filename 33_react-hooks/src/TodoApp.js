//import useLocalStorageState from './hooks/useLocalStorageState'
import useTodoState from './hooks/useTodoState'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

function TodoApp() {
  const initialTodos = [{ id: 1, task: 'Pet a mokey', completed: false }]
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } =
    useTodoState(initialTodos)

  //const [mood, setMood] = useLocalStorageState('mood', 'happy')

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
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
          {
            //<button onClick={() => setMood('mamalon')}>
            //Click to get angry
            //</button>
          }
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp