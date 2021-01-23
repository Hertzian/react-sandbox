class Friend extends React.Component {
  render() {
    const {name, hobbies} = this.props
    const lis = hobbies.map((hob, idx) => <li key={idx}>{idx}.-{hob}</li>)

    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {lis}
        </ul>
      </div>
    )
  }
}