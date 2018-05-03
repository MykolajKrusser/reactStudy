/**
 * Created by Mykolaj Krusser on 01/05/2018.
 */
import React, { Component } from 'react';

class ProjectItem extends Component {
    deleteProject(id){
        //console.log("test");
        this.props.onDelete(id);
    }
    render() {
        return (
            <li className="Projects">
                <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>x</a>
            </li>
        );
    }
}

export default ProjectItem;