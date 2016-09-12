import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: '',
      cat: 0
    }
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    let txt = this.state.txt
    return (
      <div>
        <Widget txt={txt} update={this.update}/>
        <Widget txt={txt} update={this.update}/>
        <Widget txt={txt} update={this.update}/>
        <Widget txt={txt} update={this.update}/>
        <Widget txt={txt} update={this.update}/>
      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
    <h1>{props.txt}</h1>
    <input type="text" onChange={props.update} />
    </div>
  )
}
//const App = () => <h1>Hello Eggheads</h1>
export default App
