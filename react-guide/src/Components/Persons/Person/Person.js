import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
  constructor(props){
    super(props);
    this.inputElement = React.createRef();
  }
  componentDidMount(){
    if(this.props.position === 0){
      this.inputElement.current.focus();
    }
  }
  render() {
    return (
      <div className={classes.Person}>
        <h1 onClick={this.props.click}>Hi I am {this.props.name}</h1>
        <p>and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input type="text"
          onChange={this.props.changed}
          value={this.props.name}
          ref={this.inputElement} //"ref" for focus on first input element
          />
      </div>
    );    
  }
}

export default Person;