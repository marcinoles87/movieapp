import React from 'react'


function Movie({data , error}) {

 console.log(data)
 
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
        
       
       <button className='movie-button'> {`>`}</button>
        
      </div>
    </div>
  )
}

export default Movie