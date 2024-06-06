import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <p>
            I'm very ambitious Front-end Developer looking for a role in
            established and reputable IT company with the opportunity to work
            with the latest technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my designing problem at a time
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, a sports fanatic, photography enthusiast, and Tech obsessed.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJava} color="#007396" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#181717" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
