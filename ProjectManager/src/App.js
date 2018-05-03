import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        projects: [],
        todos: []
    }
  }

  getToDoes(){
      $.ajax({
          url: 'https://jsonplaceholder.typicode.com/todos',
          dataType: 'json',
          cache: false,
          success: function (data) {
              this.setState({todos: data}, function () {
                  console.log(this.state);
              })
          }.bind(this),
          error: function (xhr, status, err) {
              console.log(err);
              console.log(status);
              console.log(xhr);
          }
      });
  }

  getProjects(){
      this.setState({projects: [
          {
              id:uuid.v4(),
              title: "Business Website",
              category: "Web Design"
          },
          {
              id:uuid.v4(),
              title: "Social WEB",
              category: "Mobile development"
          },
          {
              id:uuid.v4(),
              title: "E-commers web development",
              category: "Web development"
          }
      ]});
  }

  componentWillMount(){
      this.getProjects();
      this.getToDoes();
  }
  componentDidMount(){
      this.getToDoes();
  }
  handleAddProject(project){
      //console.log(project);
      let projects = this.state.projects;
      projects.push(project);
      this.setState({projects:projects});
  }
  handleDeleteProject(id){
      let projects = this.state.projects;
      let index = projects.findIndex(x =>x.id === id);
      projects.splice(index, 1);
      this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <hr/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
          <hr/>
          <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
