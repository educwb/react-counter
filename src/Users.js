import React, { useState, useEffect } from 'react'

const Albuns = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([]) // no vídeo foi necessário useState([]) para não dá erro

  useEffect(() => {
    setLoading(true)

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])
  return (
    <div>
      <h1>Usuários</h1>
      {
        loading === true ? 'Carregando...' : ''
      }
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
    </div>
  )
}

export default Albuns