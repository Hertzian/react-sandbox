import { Component } from 'react'

export default class SimpleFormClass extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', name: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <h1>Forms with classes</h1>
        <h2>You entered: {this.state.email}</h2>
        <input
          name='email'
          type='text'
          value={this.state.email}
          onChange={this.handleChange}
        />
        <h2>name: {this.state.name}</h2>
        <input
          name='name'
          type='text'
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
