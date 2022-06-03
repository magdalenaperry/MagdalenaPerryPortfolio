import React from 'react'
import Project from '../layouts/Project'
import { projects, miscellaneous, section3Title, section4Title } from '../../profile'

const Works = () => {
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="git-head-div text-center mx-auto title-box">
                        <h1 id="Projects" className="title">
                            {section3Title}</h1>
                    </div>
                </>
                <div className="row">
                {projects && projects.map((x) => 
                <Project key={x.id} id={x.id} url={x.url} name={x.name} skills={x.skills} deployUrl={x.deployUrl} description={x.description}/>
                )}
                </div>
            </div>

            <div className="third">
                <>
                    <div className="git-head-div text-center mx-auto title-box">
                        <h1 id="Projects" className="title">{section4Title}</h1>
                    </div>
                </>
                <div className="row text-center">
                    {miscellaneous && miscellaneous.map((x) => 
                        <Project key={x.id} id={x.id} url={x.url} name={x.name}  skills={x.skills} description={x.description}/>
                    )}
                </div>
            </div>
        </>
    )
}

export default Works
