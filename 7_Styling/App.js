class App extends React.Component {
  render() {
    const arr = ['\u{1F352}', '\u{1F34A}', '\u{1F347}']
    return (
      <div>
        <h1>Slot Machines! {'\u{1F352}'}</h1>
        <Machine s1={arr[0]} s2={arr[1]} s3={arr[2]} />
        <Machine s1={arr[2]} s2={arr[2]} s3={arr[1]} />
        <Machine s1={arr[0]} s2={arr[0]} s3={arr[0]} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
