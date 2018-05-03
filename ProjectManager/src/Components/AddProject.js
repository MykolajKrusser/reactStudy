import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }
    static defaultProps = {
        categories: ["Web-Design", "Web-Development", "Mobile Development"]
    };
    handleSubmit(e){
        if(this.refs.title.value === ''){
            alert("This field is required")
        } else{
            this.setState({newProject:{
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function() {
                //console.log(this.state);
                this.props.addProject(this.state.newProject);
                this.refs.title.value = '';
            })
        }
        e.preventDefault();
    };

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return<option key={category} value={category}>{category}</option>
        });
        return (
            <div>
                <h3>Add project:</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>Title </label>
                        <input type="text" ref="title"/>
                        <label>Category </label>
                        <select type="text" ref="category">{categoryOptions}</select>
                    <input type="submit" value='Add Project'/>
                </form>
            </div>
        );
    }
}

export default AddProject;
