import React, { useEffect } from 'react'

const Albuns = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      // .then(response => {
      //   console.log(response)
      // })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }, [])
  return (
    <h1>Álbuns</h1>
  )
}

export default Albuns