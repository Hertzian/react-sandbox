import { useContext } from 'react'
import useToggleState from './hooks/useToggleState'
import EditTodoForm from './EditTodoForm'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import { DispatchContext } from './context/todos.context'

function Todo({ id, task, completed }) {
  const dispatch = useContext(DispatchContext)
  const [isEditing, toggle] = useToggleState(false)

  return (
    <>
      <ListItem style={{ height: '64px' }}>
        {isEditing ? (
          <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
        ) : (
          <>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              onClick={() => dispatch({ type: 'TOGGLE', id })}
            />
            <ListItemText
              style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                aria-label='Delete'
                onClick={() => dispatch({ type: 'REMOVE', id })}
              >
                <Delete />
              </IconButton>
              <IconButton aria-label='Edit' onClick={toggle}>
                <Edit />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </>
  )
}

export default Todo
