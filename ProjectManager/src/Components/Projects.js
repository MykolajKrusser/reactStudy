/**
 * Created by Mykolaj Krusser on 01/05/2018.
 */
import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }
    render() {
        let projectItems;
        if(this.props.projects){
            projectItems = this.props.projects.map(project => {
                return(
                    <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
                );
            });
        }
        return (
            <div className="Projects">
                <h3>Latest projects:</h3>
                {projectItems}
            </div>
        );
    }
}

export default Projects;
