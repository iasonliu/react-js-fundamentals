import React from 'react';
import ReactDOM from 'react-dom'
class App extends React.Component {
  render(){
    let txt = this.props.txt
    return (
      <div>
        <h1>Hello World</h1>
        <b>Blold</b>
        <h1>{txt}</h1>
      </div>
    );
  }
}
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}
App.defaultProps = {
  txt: "this is the default txt"
}
ReactDOM.render(
  <App cat={5} />,
  document.getElementById('app')
)
//const App = () => <h1>Hello Eggheads</h1>
// export default App
