import React, { Component } from 'react';
import Radium from 'radium';
import './Person.css';

class Person extends Component {
  render() {
    const style={
      '@media (min-width:500px)':{
        width:"500px"
      }
    }
    return (
      <div className="Person" style={style}>
        <h1 onClick={this.props.click}>Hi I am {this.props.name}</h1>
        <p>and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    );    
  }
}

export default Radium(Person);