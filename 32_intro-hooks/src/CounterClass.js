import { Component } from 'react'

export default class CounterClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleCount = this.handleCount.bind(this)
  }

  handleCount() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <h1>CounterClass</h1>
        <h2>The count is: {this.state.count}</h2>
        <button onClick={this.handleCount}>+1</button>
      </div>
    )
  }
}
