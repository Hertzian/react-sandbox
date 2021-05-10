import { Component } from 'react'

class AnnoyingForm extends Component {
  handleKeyUp(e) {
    //alert('You press something')

    if (e.keyCode === 106) {
      alert(`********** I really love the * character **********`)
    } else {
      alert('Boo')
    }
  }

  render() {
    return (
      <div>
        <h3>Try typing in here:</h3>
        <textarea onKeyUp={this.handleKeyUp} />
      </div>
    )
  }
}

export default AnnoyingForm
