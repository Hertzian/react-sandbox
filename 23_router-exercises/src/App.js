import { Component } from 'react'
import Routes from './Routes'
import Navbar from './Navbar'
import whiskey from './images/dog1.jpg'
import hazel from './images/dog3.jpg'
import tubby from './images/dog6.jpg'
import './App.css'

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: 'Whiskey',
        age: 5,
        src: whiskey,
        facts: [
          'Whiskey loves eating popcorn',
          'Whiskey is a terrible guard dog',
          'Whiskey wants cuddle with you'
        ]
      },
      {
        name: 'Hazel',
        age: 5,
        src: hazel,
        facts: [
          'Hazel has soooo much energy!',
          'Hazel is hghly inteligent',
          'Hazel loves people more than dogs'
        ]
      },
      {
        name: 'Tubby',
        age: 5,
        src: tubby,
        facts: [
          'Tubby is not the brightest dog',
          'Tubby does not like walks or exercise',
          'Tubby loves eating food'
        ]
      }
    ]
  }
  render() {
    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <div className='container'>
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    )
  }
}

export default App
