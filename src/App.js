import React, { useState } from 'react'

import Albuns from './Albuns'
import Counter from './Counter'

const pages = {
  albuns: Albuns,
  counter: Counter,
}

function App() {
  const [page, setPage] = useState()

  const handlePageChange = page => {
    setPage(page)
  }

  const Page = pages[page]

  return (
    <>
      <h2>{page}</h2>
      <button onClick={() => handlePageChange('albuns')}>Álbuns</button>
      <button onClick={() => handlePageChange('counter')}>Counter</button>
      
      { Page && <Page /> }
    </>
  )
}

export default App;
