import React from 'react'


function Movie({data , error}) {

 
 
  return (
    <div className='movie-container'>
      <div className='movies-data'>

        { data ?  data.map( (movie , index) => {
          return(
          <div key={index} className='movie-item'>
            <h1>{index} . {movie.title}</h1>
            <img src={movie.thumbnailUrl}></img>
            </div>
       ) })  : error }
        
       
        
      </div>
    </div>
  )
}

export default Movie