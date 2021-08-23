import React, { useState, useEffect } from 'react'

const Albuns = () => {
  const [albums, setAlbums] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      // .then(response => {
      //   console.log(response)
      // })
      .then(response => response.json())
      .then(data => {
        setAlbums(data)
      })
  }, [])
  return (
    <div>
      <h1>Álbuns</h1>
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