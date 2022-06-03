import React from 'react'
import Skills from '../layouts/Skills'
import { skillsBar, section2title } from '../../profile'
// import Headshot from '../assets/images/mp-headshot.png'

const About = () => {
    return (
        <div id="about" className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
                <div className="col-12 about">
                    <div className="git-head-div text-center mx-auto title-box">
                        <h1 id="About" className="title">{section2title}</h1>
                    </div>
                    <p className="lead about-text text-center">
                        I am a <strong>full stack</strong> web developer with bachelor’s degrees in <strong>Biology and Political Science</strong>. I completed a certificate in full stack development from the University of North Carolina in Charlotte and have developed skills in <em>HTML5, CSS, JavaScript, React, restful APIs, MongoDB, MYSQL, styling frameworks,</em> and <em>responsive web design</em>. I am meticulous, <strong>self-motivated</strong> and enjoy solving real world problems. With each line of code, I aim to create applications that are <strong><em>parsimonious</em></strong> and <strong><em>aesthetic</em></strong>. In recent projects, I have collaborated with other junior developers and applied skills in full stack development to provide <strong>mobile-first</strong>, <strong>user-friendly</strong> applications. I am currently working with two senior developers and using front-end skills to create an application that allows users to create mailing labels and pay with cryptocurrency.
                    </p>
                </div>
            </div>
            
            <div id="Skills">
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((x) =>
                        <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name} />
                    )}̀
                </div>
            </div>
        </div>
    )
}

export default About
