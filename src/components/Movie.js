import React from 'react';

function Movie({getMovie , dataOmdb ,  data , error}) {

 
  return (
    <div className='movie-container'>
      <div className='movies-data'>

        

        {dataOmdb ? dataOmdb.map ( (data , index) => {
          return(
            <div className='movie-item' key={index}>
              <img src={data.Poster} alt={index} onClick={getMovie}></img>
              <h1>{data.Title}</h1>
              
              </div>
          )
        }): error } 
          

        { data ? data.map( (movie , index) => {
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