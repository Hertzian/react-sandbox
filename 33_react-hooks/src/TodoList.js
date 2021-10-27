import Todo from './Todo'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map((todo, idx) => (
          <>
            <Todo
              //key={todo.id}
              key={idx}
              task={todo.task}
              completed={todo.completed}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList
