import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {
  state = {
    userInput: ''
  }
  inputHandler = (event) => {
    this.setState({userInput: event.target.value})
  }
  deletChar = (index)=>{
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const upText = text.join('');
    this.setState({userInput: upText})
  }
  
  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index} click={()=>this.deletChar(index)}/>
    })
    return (
      <div>
        <input type="text" 
        onChange={this.inputHandler} 
        value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
