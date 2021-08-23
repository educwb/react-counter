import React, { useState } from 'react'

import Albums from './Albums'
import Counter from './Counter'
import Users from './Users'

const defaultPage = 'albums'

const pages = {
  albums: {
    text: 'Álbuns',
    component: Albums,
  },
  counter: {
    text: 'Contador',
    component: Counter,
  },
  users: {
    text: 'Usuários',
    component: Users,
  }
  
}

function App() {
  const [page, setPage] = useState(defaultPage)

  const handlePageChange = page => {
    setPage(page)
  }

  const Page = pages[page].component

  const pageNames = Object.keys(pages)

  return (
    <>
      {
        pageNames.map(page => <button onClick={() => handlePageChange(page)}>{pages[page].text}</button>)
      }
      
      { Page && <Page /> }
    </>
  )
}

export default App;
