import React, { useState, useEffect } from 'react'

import './Counter.css'

const Counter = () => {
  // useState é um método que retorna um array
  // na 1ª posição (contador), me retorna o estado atual
  // na 2ª posição (setContador), me retorna uma função para alterar esse estado
  const [contador, setContador] = useState(0)

  // recebe dois parâmetros
  // 1º é uma função de callback que será executada antes do restante
  // 2º é um array de dependências
  // toda vez que a variável do array for alterada,
  // o callback será executado novamente
  useEffect(() => {
    console.log('renderizou')
  }, [(contador)])

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
