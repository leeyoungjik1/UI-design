import logo from './logo.svg';
import './App.css';
import NameTag from './NameTag';
import Counter from './Counter';
import { Component } from 'react';

class App extends Component {
  state = {
    name: 'parent'
  }
  changeName = () => {
    this.setState({name: "parent changed"})
  }
  render(){
    console.log("parent")
    const {name} = this.state
    return (
      <div className="App">
        <h1>{name}</h1>
        <button onClick={this.changeName}>이름 변경</button>
        {/* <NameTag></NameTag> */}
        <Counter></Counter>
      </div>
    );
  }

}

export default App;
