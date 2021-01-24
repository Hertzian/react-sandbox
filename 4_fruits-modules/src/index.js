import React from 'react'
import ReactDOM from 'react-dom'
import { choice, remove } from './helpers'
import fruits from './foods'

class App extends React.Component {
  render() {
    const select = choice(fruits)
    const fruitsLeft = remove(fruits, select)

    console.log(select)
    console.log(`I'd linke one ${select}, please.`)
    console.log(`Here you go: ${select}`)
    console.log(`Delicious! May I have another?`)
    console.log(`I'm sorry, we're all out. We have ${fruitsLeft} left.`)

    return (
      <div>
        <p>{select}</p>
        <p>I'd linke one {select}, please.</p>
        <p>Here you go: {select}</p>
        <p>Delicious! May I have another?</p>
        <p>I'm sorry, we're all out. We have {fruitsLeft} other fruits left.</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
