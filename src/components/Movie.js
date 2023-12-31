import React from 'react'

function Movie({data}) {
  console.log(data)
  return (
    <div className='movie-container'>
      <div className='movies-data'>
        {data.map( (movie , index) => {
          return(
          <div key={index} className='movie-item'>
            <h1>{index} . {movie.title}</h1>
            <img src={movie.thumbnailUrl}></img>
            </div>
       ) })}
        
      </div>
    </div>
  )
}

export default Movie