import React from 'react'


function Movie({data , error}) {

 
 
  return (
    <div className='movie-container'>
      <div className='movies-data'>

        { data ?  data.map( (movie , index) => {
          return(
          <div key={index} className='movie-item'>
            <img src={movie.thumbnailUrl}></img>
            <h1>{movie.title}</h1>
            </div>
       ) })  : error }
        
       
        
      </div>
    </div>
  )
}

export default Movie