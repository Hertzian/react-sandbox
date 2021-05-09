import { Component } from 'react'

class Coin extends Component {
  render () {
    return (
      <div className='Coin'>
        <img src={this.props.info.imgSrc} alt={this.props.info.side} />
      </div>
    )
  }
}

export default Coin
