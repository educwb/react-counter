import React from 'react'

import './Counter.css'

const Counter = () => {

  const handleOnClick = () => {
    alert('counter')
  }

  return (
    <div className="counter">
      <span>5</span>
      <button onClick={handleOnClick}>-</button>
      <button>+</button>
    </div>
  )
}

export default Counter;
