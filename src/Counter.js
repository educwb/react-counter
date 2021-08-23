import React from 'react'

import './Counter.css'

const Counter = () => {

  const handleOnClick = operador => {
    alert(operador)
  }

  return (
    <div className="counter">
      <span>5</span>
      <button onClick={() => handleOnClick('-')}>-</button>
      <button onClick={() => handleOnClick('+')}>+</button>
    </div>
  )
}

export default Counter
