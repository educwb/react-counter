import React from 'react'
import Header from './Header'
import Nav from './Nav'

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