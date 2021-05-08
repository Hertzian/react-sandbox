import { Component } from 'react'

class Multikill extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0
    }
    this.oneKill = this.oneKill.bind(this)
    this.multiKill = this.multiKill.bind(this)
  }

  oneKill() {
    //not a good idea to update state like this
    //if it relies on existing state values
    this.setState({ score: this.state.score + 1 })
  }

  //wrong way
  //multiKill() {
  //this.setState({ score: this.state.score + 1 })
  //this.setState({ score: this.state.score + 1 })
  //this.setState({ score: this.state.score + 1 })
  //}

  //correct way
  //multiKill() {
  //this.setState((oldState) => {
  //return { score: oldState.score + 1 }
  //})
  //this.setState((oldState) => {
  //return { score: oldState.score + 1 }
  //})
  //this.setState((oldState) => {
  //return { score: oldState.score + 1 }
  //})
  //}

  //better way
  multiKill() {
    this.setState(this.updateState)
    this.setState(this.updateState)
    this.setState(this.updateState)
    this.setState(this.updateState)
    this.setState(this.updateState)
  }

  updateState(oldState) {
    return { score: oldState.score + 1 }
  }

  render() {
    return (
      <>
        <h2>Multikill Component</h2>
        <h3>Score: {this.state.score}</h3>
        <button onClick={this.oneKill}>oneKill</button>
        <hr />

        <button onClick={this.multiKill}>multiKill</button>
      </>
    )
  }
}

export default Multikill
