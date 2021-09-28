import './App.css'
import Timer from './Timer'
import ZenQuote from './ZenQuote'
import GithubUserInfo from './GithubUserInfo'

function App() {
  return (
    <div className='App'>
      <Timer />
      <ZenQuote />
      <GithubUserInfo username='Hertzian' />
      <GithubUserInfo username='facebook' />
      <GithubUserInfo username='Colt' />
    </div>
  )
}

export default App
