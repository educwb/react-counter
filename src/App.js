import React, { useState } from 'react'

import Counter from './Counter'
import Albuns from './Albuns'

function App() {
  const [page, setPage] = useState()

  const handlePageChange = page => {
    setPage(page)
  }
  return (
    <>
      <h2>{page}</h2>
      <button onClick={() => handlePageChange('albuns')}>Álbuns</button>
      <button onClick={() => handlePageChange('contador')}>Contador</button>
      <Counter />
      <Albuns />
    </>
  )
}

export default App;
