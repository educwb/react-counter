import React, { useState, useEffect } from 'react'

const Albuns = () => {
  const [loading, setLoading] = useState(false)
  const [albums, setAlbums] = useState([]) // no vídeo foi necessário useState([]) para não dá erro

  useEffect(() => {
    setLoading(true)

    fetch('https://jsonplaceholder.typicode.com/albums')
      // .then(response => {
      //   console.log(response)
      // })
      .then(response => response.json())
      .then(data => {
        setAlbums(data)
        setLoading(false)
      })
  }, [])
  return (
    <div>
      <h1>Álbuns</h1>
      {
        loading === true ? 'Carregando...' : ''
      }
      {
        albums.map(album => {
          return (
            <div>
              <spam>{album.title} - id: {album.id}</spam>
            </div>
          )
        })
      }
    </div>
  )
}

export default Albuns