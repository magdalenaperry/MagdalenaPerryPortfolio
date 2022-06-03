import React from 'react'
import { FaCode } from 'react-icons/fa'

const Project = ({id, name, url, deployUrl, skills, description}) => {
    console.log(Project.id)
    return (
        <div className="col-12 col-lg-4 project-card">
            <div className="image-project">
            <a title={deployUrl} href={deployUrl}>
                <div className={`img-pro ${id}`}></div>
                </a>
            </div>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}>
                <h2 className='text-center h3'><FaCode className="faCode" /> {name}</h2>
                <p className='text-center text-muted emphasis'>{description}</p>
                </a>
            
            {skills && <h3 className='text-center'>  {skills.map(skill => skill) }</h3> }
        </div>
    )
}

export default Project
