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
    </div>
  )
}

export default Logo
