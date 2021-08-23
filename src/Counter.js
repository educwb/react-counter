import React, { useState} from 'react'

import './Counter.css'

const Counter = () => {
  // useState é um método que retorna um array
  // na 1ª posição (contador), me retorna o estado atual
  // na 2ª posição (setContador), me retorna uma função para alterar esse estado
  const [contador, setContador] = useState(0)

  const handleOnClick = operador => {
    let novoValor = operador === '+' ? contador + 1 : contador -1
    setContador(novoValor)
  }

  return (
    <div className="counter">
      <span>{contador}</span>
      <button onClick={() => handleOnClick('-')}>-</button>
      <button onClick={() => handleOnClick('+')}>+</button>
    </div>
  )
}

export default Counter
