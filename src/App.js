import React, { useState } from 'react'

import Albums from './pages/Albums'
import Counter from './pages/Counter'
import Users from './pages/Users'
import Movies from './pages/Movies'
import Template from './templates/Template'

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
    text: 'Filmes',
    component: Movies,
  }
}

function App() {
  const [page, setPage] = useState(defaultPage)

  const handlePageChange = page => {
    setPage(page)
  }

  const Page = pages[page].component

  return (
    <Template pages={pages} activePage={page} onChangePage={handlePageChange}>
      { Page && <Page className="page" /> }
    </Template>
  )
}

export default App;
