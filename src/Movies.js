import React, { useState, useEffect } from 'react'

import './Movies.css'

const Movies = () => {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([]) 

  useEffect(() => {
    setLoading(true)

    fetch('https://imdb-api.com/en/API/SearchMovie/k_26zeqhab/matrix')
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
        setLoading(false)
      })
  }, [])
  return (
    <div className="movies">
      <h1>Movies</h1>
      {
        loading === true ? 'Carregando...' : ''
      }
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
    </div>
  )
}

export default Movies