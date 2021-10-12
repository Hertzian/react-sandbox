import CounterClass from './CounterClass'
import CounterFn from './CounterFn'
import Toggler from './Toggler'
import SimpleFormClass from './SimpleFormClass'
import SimpleFormHooks from './SimpleFormHooks'
import SimpleFormInputHook from './SimpleFormInputHook'
import Clicker from './Clicker'
import SWMovies from './SWMovies'
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>app</h1>
      <SWMovies />
      <Clicker />
      <SimpleFormInputHook />
      <SimpleFormClass />
      <SimpleFormHooks />
      <CounterClass />
      <CounterFn />
      <Toggler />
    </div>
  )
}

export default App
