class Hello extends React.Component {
  render() {
    console.log(this.props.to)
    const { to, from } = this.props


    return <p>Hi {to} from {from}</p>
  }
}
