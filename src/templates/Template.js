import React from 'react'
import Header from '../partials/Header'
import Nav from '../partials/Nav'

const Template = ({ children, pages, activePage, onChangePage }) => {
  const title = pages[activePage].text

  return (
    <div>
      <Header title={title} />
      <Nav pages={pages} onChangePage={onChangePage} />
      {children}
    </div>
  )
}

export default Template