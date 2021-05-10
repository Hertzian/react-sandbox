import { Component } from 'react'

class CopyDemo extends Component {
  handleCopy() {
    alert('Stop stealing from me!')
  }
  render() {
    return (
      <div>
        <h3>Try copying some of this text</h3>
        <section onCopy={this.handleCopy}>
          Ipsum minus eius atque ipsum beatae. Facilis qui adipisci qui
          veritatis officia aliquid repellendus? Obcaecati fugit autem eius
          aspernatur eum! Tenetur mollitia in numquam dolorum repellat cumque
          Adipisci aperiam distinctio?
        </section>
      </div>
    )
  }
}

export default CopyDemo
