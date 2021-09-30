import { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import Dog from './Dog'
import Contact from './Contact'
import About from './About'
import './App.css'

const Hater = () => <h1>I absolute hate dogs!</h1>

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav className='App-nav'>
          <NavLink exact activeClassName='active-link' to='/'>
            About
          </NavLink>
          <NavLink exact activeClassName='active-link' to='/dog/c'>
            Dog(c)
          </NavLink>
          <NavLink exact activeClassName='active-link' to='/dog/r'>
            Dog(r)
          </NavLink>
          <NavLink exact activeClassName='active-link' to='/contact'>
            Contact
          </NavLink>
        </nav>
        <Switch>
          {/* 
          to pass props in component
          <Route exact path='/dog' component={() => <Dog name='Perro'/>}/>
          to reuse the component, & prevent for render over and over
          <Route exact path='/dog' render={() => <Dog name='Perro'/>}/>
          */}
          <Route exact path='/' component={About} />
          <Route
            exact
            path='/dog/c'
            component={() => <Dog name='componencio' />}
          />
          <Route
            exact
            path='/dog/r'
            render={() => <Dog name='renderencio' />}
          />
          <Route exact path='/dog/hater' component={Hater} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    )
  }
}

export default App
