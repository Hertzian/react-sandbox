class App extends React.Component {
  render() {
    
    return (
      <div>
        <Hello to="Maroma" from="Lalo" />
        <Hello to="Ringo" from="Sonny" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
