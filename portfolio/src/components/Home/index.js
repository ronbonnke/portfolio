import React from 'react'
import { Link } from 'react-router-dom'
// import LogoTitle from '../../assets/images/rblogo.png'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi there, <br />
          I'm Ron Bonnke
          {/* <img src={LogoTitle} alt="developer" /> */}
          <br />
          Fullstack Webdeveloper
        </h1>
        <h2>Frontend Developer / Java / JavaScript </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
