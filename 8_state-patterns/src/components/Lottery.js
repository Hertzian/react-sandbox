import { Component } from 'react'
import LotteryBall from '../components/LotteryBall'
import './Lottery.css'

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  }

  constructor(props) {
    super(props)
    this.state = { nums: Array.from({ length: this.props.numBalls }) }
    this.handleClick = this.handleClick.bind(this)
  }

  gen() {
    this.setState((curState) => ({
      nums: curState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }))
  }

  handleClick() {
    this.gen()
  }

  render() {
    console.log(this.props)

    return (
      <section className='Lottery'>
        <h2>Lottery: {this.props.title}</h2>
        <div>
          {this.state.nums.map((nu) => (
            <LotteryBall num={nu} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    )
  }
}

export default Lottery
