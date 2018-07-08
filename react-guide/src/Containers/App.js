import React, { Component } from 'react';
import classesApp from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
export const AuthContext = React.createContext(false); //react 16 feature

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Nick', age: 29 },
      { id: 'vasdf1', name: 'Oksana', age: 25 },
      { id: 'asdf11', name: 'Maluk', age: 18 }
    ],
    showPersons: false,
    authenticated: false
  }

  loginHandler = ()=>{
    this.setState({authenticated: true})
    console.log(this.state.authenticated)
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    let persons = null;
    if ( this.state.showPersons ) {
      persons = <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonHandler} 
        changed={this.nameChangedHandler}
        />
    }
    return (
      <div className={classesApp.App}>
          <Cockpit
          persons={this.state.persons} 
          togglePersonsHandler={this.togglePersonsHandler}
          login={this.loginHandler}
          />
        <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
      </div>
    );
  }
}

export default App;