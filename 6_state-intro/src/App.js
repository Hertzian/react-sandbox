import './App.css'
import Game from './components/Game'
import Demo from './components/Demo'
import Rando from './components/Rando'
import Button from './components/Button'
import BrokenClick from './components/BrokenClick'
import BrokenClick2 from './components/BrokenClick2'
import RandoNum from './components/RandoNum'

function App() {
  return (
    <div className='App'>
      <Game />
      <Demo animal='Perrito' food='Pineaple' />
      <Rando maxNum={7} />
      <Button />
      <BrokenClick />
      <BrokenClick2 />
      <RandoNum />
    </div>
  )
}

export default App
