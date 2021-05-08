import { Component } from 'react'
import './LotteryBall.css'

class LotteryBall extends Component {
  render() {
    console.log(this.props)

    return <div className='LotteryBall'>{this.props.num}</div>
  }
}

export default LotteryBall
