class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          emojis={['\u{1f605}','\u{1f606}','\u{1f607}','\u{1f608}','\u{1f609}']}
          to="Maroma"
          from="Lalo"
          num={3}
          bangs={3}
          data={[1, 2, 3, 4, 5]}
          isFunny={true}
          img="https://media.tenor.com/images/9dd9f756d3704de25874dcb354161122/tenor.gif"
        />
        <Hello to="Britney" from="Adele" bangs={10} isFunny />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
