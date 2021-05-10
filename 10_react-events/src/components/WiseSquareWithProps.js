import { Component } from 'react'

class WiseSquareWithProps extends Component {
  static defaultProps = {
    messages: [
      'A Fool thinks himself to be wise, but a wise knows himself to be a fool.',
      'Educating the mind without educating the heart is no education at all.',
      'Not everything that is facesn be changed, but nothingn be changed until it is faced.'
    ]
  }

  //other way of binding
  constructor(props) {
    super(props)
    this.dispenseWisdom = this.dispenseWisdom.bind(this)
  }

  dispenseWisdom() {
    //console.log('this is... ', this)

    const { messages } = this.props
    const rIndex = Math.floor(Math.random() * messages.length)

    console.log(messages[rIndex])
  }

  render() {
    //binding inline example this makes a new function every time
    //return (
    //<div className='WiseSquare' onMouseEnter={this.dispenseWisdom.bind(this)}>
    //😀
    //</div>
    //)

    //binding with arrow function
    //return (
    //<div className='WiseSquare' onMouseEnter={() => this.dispenseWisdom()}>
    //😀
    //</div>
    //)

    return (
      <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>
        <h2>WiseSquareWithProps</h2>
        😀
      </div>
    )
  }
}

export default WiseSquareWithProps
