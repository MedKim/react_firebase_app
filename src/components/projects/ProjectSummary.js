import React from 'react'

const ProjectSummary = ()=>{
	return (
			<div className="card z-depth-0 project-summary">
				<div className="card-content grey-text text-darken-3">
				<span className="card-title">Project Title</span>
				<p>posted by NN</p>
				<p className="grey-text">3rd August</p>
				</div>
			</div>
	)
}

export default ProjectSummary
import React from 'react';

const ProjectSummary = ({project}) =>{
	return(
		<div className="card z-depth-0 project-summary">
			<div className="card-content grey-text text-darken-3">
				<span className="card-title">{project.title}</span>
				<p className="grey-text">3rd August</p>
			</div>
		</div>
	)
}

export default ProjectSummary