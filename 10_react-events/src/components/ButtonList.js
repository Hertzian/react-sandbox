import { Component } from 'react'
import './ButtonList.css'

class ButtonList extends Component {
  constructor(props) {
    super(props)
    this.state = { color: 'cyan' }
  }

  static defaultProps = {
    colors: ['#e056fd', '#eb4d4b', '#badc58', '#f0932b']
  }

  changeColor(newColor) {
    console.log(`newColor is: ${newColor}`)
    this.setState({ color: newColor })
  }

  render() {
    return (
      <>
        <h2>ButtonList</h2>
        <div
          className='ButtonList'
          style={{ backgroundColor: this.state.color }}
        >
          {this.props.colors.map((color) => {
            const colorObj = { backgroundColor: color }

            //one way to bind
            //return (
            //<button style={colorObj} onClick={() => this.changeColor(color)}>
            //Click on me!
            //</button>
            //)

            //another way to bind
            return (
              <button
                style={colorObj}
                onClick={this.changeColor.bind(this, color)}
              >
                Click on me!
              </button>
            )
          })}
        </div>
      </>
    )
  }
}

export default ButtonList
