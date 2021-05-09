import { Component } from 'react'
import { choice } from '../helpers'
import './Box.css'

class Box extends Component {
  static defaultProps = {
    allColors: ['purple', 'violet', 'pink', 'magenta']
  }

  constructor(props) {
    super(props)
    this.state = { color: choice(this.props.allColors) }
    this.handleClick = this.handleClick.bind(this)
  }

  pickColor() {
    let newColor

    do {
      newColor = choice(this.props.allColors)
    } while (newColor === this.state.color)

    this.setState({ color: newColor })
  }

  handleClick() {
    this.pickColor()
  }

  render() {
    //console.log(choice(this.props.colors))

    return (
      <div
        className='Box'
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      >
        <h2>BoxComponent</h2>
      </div>
    )
  }
}

export default Box
