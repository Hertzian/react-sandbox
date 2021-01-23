class Hello extends React.Component {
  render() {
    // props are read only!
    // are inmutable
    // this.props.from = 'blue'

    return (
      <p>
        Hi {to} from {from}
      </p>
    )
  }
}
