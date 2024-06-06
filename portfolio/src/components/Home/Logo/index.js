import React, { useEffect, useRef } from 'react'
import './index.scss'
import myImage from '../../../assets/images/ron.jpeg'

const Logo = () => {
  const circleRef = useRef(null)

  useEffect(() => {
    const circle = circleRef.current

    setTimeout(() => {
      circle.style.opacity = '1'
      circle.style.transform = 'scale(1)'
    }, 3000)
  }, [])

  return (
    <div className="logo-container">
      <div className="circle" ref={circleRef}>
        <img src={myImage} alt="Logo" className="logo-image" />
      </div>
    </div>
  )
}

export default Logo
