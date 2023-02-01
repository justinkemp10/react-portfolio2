import './ProjectCard.css';
import ProjectCard from './ProjectCard';
import ProjectData from './ProjectData';
import React from 'react'


const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {ProjectData.map((val, ind) => {
                return (
                    <ProjectCard 
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work;