import './App.css'
import Multikill from './components/Multikill'
import IconList from './components/IconList'
import Lottery from './components/Lottery'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Multikill />
        <IconList />
        <Lottery title='Johny' numBalls={3} maxNum={80} />
        <Lottery title='Emma' numBalls={8} maxNum={45} />
      </header>
    </div>
  )
}

export default App
