import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      counter:0
    }
  }
  incrementCounter =() =>{
    this.setState({
      counter: this.state.counter+1
    })
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Counter count={this.state.counter}/>
      <button onClick={this.incrementCounter}>Click1</button>
    </div>
  );
}
}
export default App;
