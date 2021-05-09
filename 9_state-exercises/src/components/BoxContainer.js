import { Component } from 'react'
import Box from './Box'
import './BoxContainer.css'

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18
    //allColors: ['purple', 'violet', 'pink', 'magenta']
  }

  render() {
    //console.log('boxContainer', this.props.allColors)

    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      //<Box colors={this.props.allColors} />
      <Box />
    ))
    return <div className='BoxContainer'>{boxes}</div>
  }
}

export default BoxContainer
