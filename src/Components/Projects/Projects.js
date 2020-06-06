import React from 'react';

import { ProjectCard } from '../ProjectCard/ProjectCard';
import {projects} from '../../Constant/Projects';

export const Projects = ({props}) => {
    return (
        <div className="projects-container">
            <div className="industry-skill-container">
                {
                    projects.projectList.map(project => <ProjectCard project={project} />)
                }
            </div>
        </div>
    )
} 