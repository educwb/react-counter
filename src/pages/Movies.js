import React, { useState, useEffect } from 'react'

import '../pages/Movies.css'
import Loading from '../components/Loading'

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState([]) 

  useEffect(() => {
    setIsLoading(true)

    fetch('https://imdb-api.com/en/API/SearchMovie/k_26zeqhab/matrix')
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
        setIsLoading(false)
      })
  }, [])
  return (
    <>
      <Loading visible={isLoading} />
      {
        // console.log(movies)
        movies.map(movie => {
          return (
            <div className="card">
              <b>Título:</b> {movie.title} <br />
              <b>Ano:</b> {movie.description} <br />
              <img src={movie.image} alt="Filme"/> <br /> 
            </div>
          )
        })
      }
    </>
  )
}

export default Movies