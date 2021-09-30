import { Component } from 'react'
import { Link } from 'react-router-dom'
import Message from './Message'

export default class Soda extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1>Soda</h1>
          <Link to='/'>Go back</Link>
        </Message>
      </div>
    )
  }
}
