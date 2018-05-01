/**
 * Created by Mykolaj Krusser on 01/05/2018.
 */
import React, { Component } from 'react';

class ProjectItem extends Component {
    render() {
        return (
            <li className="Projects">
               <strong>{this.props.project.title}</strong>: {this.props.project.category}
            </li>
        );
    }
}

export default ProjectItem;