import './ProjectCard.css';
import React from 'react'
import { NavLink } from 'react-router-dom';


const ProjectCard = (props) => {
  return (
    <div className='project-card'>
        <img src={props.imgsrc} alt='project' />
        <h2 className='project-title'>{props.title}</h2>
        <div className='project-details'>
            <p>{props.text}</p>
            <div className='project-btns'>
                <NavLink to={props.view} target='_blank' rel='noreferrer' className='btn btn-view'>View</NavLink>
                <NavLink to='https://github.com/justinkemp10' target='_blank' rel='noreferrer' className='btn btn-source'>Source</NavLink>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;