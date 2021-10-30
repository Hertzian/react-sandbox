import { v4 } from 'uuid'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: v4(), task: action.task, completed: false }]
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id)
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    case 'EDIT':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      )
    default:
      return state
  }
}
export default reducer

//type: 'ADD', task: 'Walk the fish'}
//{type: 'REMOVE', id: 222}
//{type: 'TOGGLE', toggleId: 222}
//{type: 'EDIT', toggleId: 222, newTask: 'Walk Maroma'}
