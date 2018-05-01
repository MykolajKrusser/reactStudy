/**
 * Created by Mykolaj Krusser on 01/05/2018.
 */
import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
    render() {
        let projectItems;
        if(this.props.projects){
            projectItems = this.props.projects.map(project => {
                return(
                    <ProjectItem key={project.title} project={project} />
                );
            });
        };
        return (
            <div className="Projects">
                {projectItems}
            </div>
        );
    }
}

export default Projects;
