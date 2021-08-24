import React from 'react'
import Header from './Header'

const Template = ({ children, title }) => {
  return (
    <div>
      <Header title={title} />
      {children}
    </div>
  )
}

export default Template