import React, { useState } from 'react'
import { contact, section5Title, social } from '../../profile'
import Resume from '../assets/images/magdalena-perry-resume.pdf'
import emailjs from '@emailjs/browser'
import { FaDownload, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Result = () => {
    return (
        <p className='pt-4'>Thanks! I'm looking forward to reading your message.</p>
    )
}

const Contact = () => {
    emailjs.init('1tvAMLy1tuXIkPkHh');

    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_80gtp7a', 'template_ukhm0xc', e.target)
            .then((result) => {
                console.log('yay', result.text);
            }, (error) => {
                console.log('oops', error.text);
            }
            );
        e.target.reset();
        showResult(true);
    };



    return (
        <div className="parallax">
            <div data-aos="zoom-in-up" data-aos-once="true" className="git-form pb-5">
                <div className="git-head-div text-center mx-auto title-box">
                    <h1 id="Contact" className="title">{section5Title}</h1>
                </div>

                <div className="container">
                    <div className="col-12 text-center">
                        <p className="lead text-center">
                            {contact.pitch}
                        </p>
                            <a
                                href={`mailto:${social.email}`}
                                className="text-muted text-center"
                                target="_blank"
                                rel="noreferrer">
                                mageltron@gmail.com
                            </a>
                        <p className="lead text-center">
                        </p>
                        <div className="text-center">
                            <div className="row text-secondary">
                                <div className="display-flex">
                                    <span>
                                        <a 
                                            className="col-12 text-decoration-none text-secondary me-4" 
                                            href={social.github} target="_blank"
                                            rel="noreferrer">
                                            <FaGithub size={48} />
                                        </a>
                                    </span>
                                    <span>
                                        <a 
                                            className="col-12 text-decoration-none text-secondary me-4" 
                                            href={social.linkedin} 
                                            target="_blank"
                                            rel="noreferrer">
                                            <FaLinkedin size={48} />
                                        </a>
                                    </span>
                                    <span>
                                        <a
                                            className="col-12 text-decoration-none text-secondary me-4"
                                            href={social.instagram}
                                            target="_blank"
                                            rel="noreferrer">

                                            <FaInstagram size={48} />
                                        </a>
                                    </span>
                                    <span>
                                        <a className="col-12 text-decoration-none text-secondary me-4" 
                                            href={`mailto:${social.email}`}
                                            target="_blank"
                                            rel="noreferrer">
                                            <FaEnvelope size={48} />
                                        </a>
                                    </span>
                                    <span>
                                        <a className="col-12 text-decoration-none text-secondary me-4" 
                                            title="Download Resume" 
                                            href={Resume} download>
                                            <FaDownload size={48} />
                                        </a>
                                    </span>
                                </div>

                            </div>
                        </div>



                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="controls">
                                <form onSubmit={sendEmail} id="contact-form">
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" id="fname" name="from_name" placeholder="Name" data-error="Name is required." required ></input>
                                    </div>
                                    <div className="form-group mt-3">
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" id="sub" name="subject" placeholder="Subject" data-error="Subject is required" required></input>
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea id="msg" rows="5" className="form-control ms-0" name="message" placeholder="Message" data-error="Message is required." required></textarea>
                                    </div>
                                    <div className='mt-3'>
                                        <button className="btn btn-secondary" type="submit">Send Message</button>
                                        {
                                            result ? <Result className="text-center"/> : null
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact





