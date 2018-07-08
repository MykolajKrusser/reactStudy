import React from 'react';
import classesApp from './Cockpit.css';

const cockpit = (props)=>{
    let btnClass = '';
    
    const classes =[]
    if(props.showPersons){
        btnClass = classesApp.Red;
    }
    if(props.persons.length <=2){
      classes.push(classesApp.red);
    }
    if(props.persons.length <=1){
      classes.push(classesApp.bold);
    }
    if(props.persons.length <=0){
      classes.splice(0, classes.length)
    }
    return(
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
            className={btnClass}
            onClick={props.togglePersonsHandler}>Toggle Persons
            </button>
            <button onClick={props.login}>Login</button>
        </div>
    );
    
}
export default cockpit;