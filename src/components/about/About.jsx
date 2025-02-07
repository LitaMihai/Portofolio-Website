import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Volunteering</h5>
              <small>Alumnus volunteer within the association EESTEC LC Bucharest</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>IT</h5>
              <small>Passionate about programming, technology and game development </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>I used and learned several tehnologies +that I used in projects</small>
            </article>
          </div>
          <p>
            I have a strong enthusiasm for various aspects of software development, including Back-end, Front-end, Web and Desktop Application Development. When I embark on a learning journey or initiate a new project, my approach involves first conceptualizing the overall scope and then progressively refining the finer details. This method allows me to deliver professional and polished results.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About