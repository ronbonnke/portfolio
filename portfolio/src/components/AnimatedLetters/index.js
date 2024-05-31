import './index.scss'

import React from 'react'

const AnimatedLetters = ({ letterClasss, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className="={`${letterClass} _${i+idx}`}"></span>
      ))}
    </span>
  )
}

export default AnimatedLetters
