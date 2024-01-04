import React from 'react'


function Movie({dataPost , data , error}) {


 
  return (
    <div className='movie-container'>
      <div className='movies-data'>

        { data && dataPost ?  data.map( (movie , index) => {
          return(
          <div key={index} className='movie-item'>
            <img src={movie.thumbnailUrl} alt={movie.title}></img>
            <h1>{movie.title}</h1>
            </div>
       ) })  : error }

     
        
       
      
        
      </div>
    </div>
  )
}

export default Movie