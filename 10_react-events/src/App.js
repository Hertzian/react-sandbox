import './App.css'
import WiseSquare from './components/WiseSquare'
import ExperimentalSquare from './components/ExperimentalSquare'
import WiseSquareWithProps from './components/WiseSquareWithProps'
import AnnoyingForm from './components/AnnoyingForm'
import CopyDemo from './components/CopyDemo'
import ButtonList from './components/ButtonList'
import NumberList from './components/NumberList'
import BetterNumberList from './components/BetterNumberList'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <WiseSquare />
        <AnnoyingForm />
        <CopyDemo />
        <WiseSquareWithProps />
        <ExperimentalSquare />
        <ButtonList />
        <NumberList />
        <BetterNumberList />
      </header>
    </div>
  )
}

export default App
