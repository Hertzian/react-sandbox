import { Component } from 'react'
import BetterNumberItem from './BetterNumberItem'

class BetterNumberList extends Component {
  constructor(props) {
    super(props)
    this.state = { nums: [1, 2, 3, 4, 5] }
    this.remove = this.remove.bind(this)
  }

  remove(num) {
    console.log('Removing!')
    console.log(num)

    this.setState((st) => ({
      nums: st.nums.filter((n) => n !== num)
    }))
  }

  render() {
    //dont use indexes for key if item order may change or items can be deleted
    const nums = this.state.nums.map((n, idx) => (
      <BetterNumberItem key={idx} value={n} remove={this.remove} />
    ))

    return (
      <div>
        <h2>Better Number LIst</h2>
        <ul>{nums}</ul>
      </div>
    )
  }
}

export default BetterNumberList
