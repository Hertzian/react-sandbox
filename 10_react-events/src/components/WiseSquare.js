import { Component } from 'react'

class WiseSquare extends Component {
  dispenseWisdom() {
    const messages = [
      'A Fool thinks himself to be wise, but a wise knows himself to be a fool.',
      'Educating the mind without educating the heart is no education at all.',
      'Not everything that is facesn be changed, but nothingn be changed until it is faced.'
    ]

    const rIndex = Math.floor(Math.random() * messages.length)

    console.log(messages[rIndex])
  }

  render() {
    return (
      <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>
        <h2>WiseSquare</h2>
        😀
      </div>
    )
  }
}

export default WiseSquare
