import { Component } from 'react'

class IconList extends Component {
  static defaultProps = {
    options: [
      'angry',
      'anchor',
      'archive',
      'at',
      'archway',
      'baby',
      'bell',
      'bolt',
      'bone',
      'car',
      'city',
      'cloud',
      'couch'
    ]
  }

  constructor(props) {
    super(props)
    this.state = { icons: ['cloud', 'bone'] }
    this.addIcon = this.addIcon.bind(this)
  }

  //bad way...
  //addIcon() {
  //const idx = Math.floor(Math.random() * this.props.options.length)
  //const newIcon = this.props.options[idx]

  //const icons = this.state.icons
  //icons.push(newIcon)
  //this.setState({ icons: icons })
  //}

  //good way
  addIcon() {
    const idx = Math.floor(Math.random() * this.props.options.length)
    const newIcon = this.props.options[idx]
    this.setState({ icons: [...this.state.icons, newIcon] })
  }

  render() {
    const icons = this.state.icons.map((icon) => (
      <i className={`fas fa-${icon}`}></i>
    ))

    return (
      <div>
        <h2>IconList component</h2>
        <h3>Icons:</h3>
        <h4>{icons}</h4>
        <button onClick={this.addIcon}>Add new icon</button>
      </div>
    )
  }
}

export default IconList
