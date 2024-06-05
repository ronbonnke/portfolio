import './index.scss'
import '../../../assets/images/RR.png'
import LogoS from '../../../assets/images/rblogo.png'
import React, { useRef } from 'react'

const Logo = () => {
  const bgRef = useRef()
  const outLineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoS} alt="r" />
      <svg width="559pt"
      height="897pt"
      version='1.0'
      viewBox='http://www.w3.org/2000/svg'>
        <
        className='svg-container'
        transform='translate(0 457) scale(.1 -.1)'
        fill='none'
        >
    </div>
  )
}

export default Logo
