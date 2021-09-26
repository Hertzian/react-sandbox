import { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { isEditing: false, task: this.props.task }
    this.handleRemove = this.handleRemove.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleChange(e) {
    this.setState({ task: e.target.value })
  }

  handleRemove() {
    this.props.removeTodo(this.props.id)
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleUpdate(e) {
    e.preventDefault()
    //take new task data and pass up to parent
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({ isEditing: false })
  }

  handleToggle(e) {
    this.props.toggleTodo(this.props.id)
  }

  render() {
    let result
    if (this.state.isEditing) {
      result = (
        <form onSubmit={this.handleUpdate}>
          <input
            type='text'
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Save</button>
        </form>
      )
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li
            className={this.props.completed ? 'completed' : ''}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
        </div>
      )
    }

    return result
  }
}
