import React, { useState, useEffect } from 'react'

import Template from './Template'
import Loading from './Loading'

const Albuns = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState([]) // no vídeo foi necessário useState([]) para não dá erro

  useEffect(() => {
    setIsLoading(true)

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setIsLoading(false)
      })
  }, [])
  return (
    <Template title="Usuários">
      <Loading visible={isLoading} />
      {
        users.map(user => {
          return (
            <div style={{margin:'10px'}}>
              <b>Nome:</b> {user.name} <br />
              <b>Email:</b> {user.email} <br />
              <b>Telefone:</b> {user.phone} <br />
              <b>Site:</b> {user.website} <br />
            </div>
          )
        })
      }
    </Template>
  )
}

export default Albuns