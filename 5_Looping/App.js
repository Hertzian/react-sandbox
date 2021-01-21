class App extends React.Component {
  render() {
    const msgs = [
      { id: 1, text: 'Grettings!' },
      { id: 2, text: 'Goodbye!' },
    ]
    return (
      <div>
        <Friend name='Elton' hobbies={['Piano', 'Singing', 'Dancing']} />
        <Friend name='Frida' hobbies={['Drawing', 'Painting']} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
