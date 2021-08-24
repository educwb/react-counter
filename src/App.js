import React, { useState } from 'react'

import Albums from './Albums'
import Counter from './Counter'
import Users from './Users'
import Movies from './Movies'

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
  },
  movies: {
    text: 'Movies',
    component: Movies,
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
    <div className="app">
      {
        pageNames.map(page => <button onClick={() => handlePageChange(page)}>{pages[page].text}</button>)
      }
      
      { Page && <Page className="page" /> }
    </div>
  )
}

export default App;
