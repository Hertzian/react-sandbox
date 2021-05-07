import React, { Component } from 'react'
import RollDice from './components/RollDice'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <RollDice />
        </header>
      </div>
    )
  }
}

export default App
