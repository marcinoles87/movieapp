import React from 'react'

function Movie({data}) {
  return (
    <div className='movie-container'>
      <div className='movies-data'>
        {data.map( (movie) => {
          return(
          <div className='movie-item'>
            <h1>{movie.title}</h1>
            <img src={movie.Url}></img>
            </div>
       ) })}
        
      </div>
    </div>
  )
}

export default Movie