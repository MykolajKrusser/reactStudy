import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Nick', age: "29"},
      {name: 'Piptik', age: "18"},
      {name: 'Korki', age: "2"}
    ]
  }

  switchNameHandler = (newName)=>{
    //console.log("was clicked")
    // DON`T DO THIS this.state.persons.name[0] = "Doni";
    this.setState(
      {
        persons: [
          {name: newName, age: "24"},
          {name: 'Mira', age: "14"},
          {name: 'Jake', age: "44"}
        ]
      }
    )
  }

  nameChangeHandler = (event)=>{
    this.setState(
      {
        persons: [
          {name: "Nick", age: "29"},
          {name: event.target.value, age: "18"},
          {name: "Piptik", age: "20"}
        ]
      }
    )
  }

  render() {
    const styleBtn ={
      backgroundColor: "gray",
      border: "1px solid blue",
      padding: "3px"
    }
    return (
      <div className="App">
        <h1>Hi i am react APP</h1>
        <p>This is really working</p>
        <button style={styleBtn} className="btn" onClick={this.switchNameHandler/*does`t work coz persons[0].name = newName*/}>Switch Name</button>
        <button className="btn" onClick={()=> this.switchNameHandler("MANN")}>Switch Name 2 type</button>
        <button className="btn" onClick={this.switchNameHandler.bind(this, "Mersedes")}>Switch Name 3 type</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person click={this.switchNameHandler} name={this.state.persons[2].name} age={this.state.persons[2].age}  />
      </div>
    );
    // return React.CreateElement('div', {className: 'App'}, React.CreateElement('h1', null, 'Hi i am react APP'));
  }
}

export default App;
