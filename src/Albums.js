import React, { useState, useEffect } from 'react'

import Template from './Template'
import Loading from './Loading'

const Albuns = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [albums, setAlbums] = useState([]) // no vídeo foi necessário useState([]) para não dá erro

  useEffect(() => {
    setIsLoading(true)

    fetch('https://jsonplaceholder.typicode.com/albums')
      // .then(response => {
      //   console.log(response)
      // })
      .then(response => response.json())
      .then(data => {
        setAlbums(data)
        setIsLoading(false)
      })
  }, [])
  return (
    <Template title="Álbuns">
      <Loading visible={isLoading} />
      {
        albums.map(album => {
          return (
            <div>
              <spam>{album.title} - id: {album.id}</spam>
            </div>
          )
        })
      }
    </Template>
  )
}

export default Albuns