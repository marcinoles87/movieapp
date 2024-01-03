import React from 'react'


function Movie({dataPost , data , error}) {

  let start = 0
  let newX = -150
  let startX = 0
  let newButtonX = 150

 const handleOnClick = () => {
  
  start+=newX
  startX+=newButtonX
  const movie = document.querySelector('.movies-data');
  console.log(movie)
  movie.style.transform = "translateX(" + start + "px)"
  const button = document.querySelector('.movie-button');
  button.style.transform = "translateX("+ newButtonX +" +px)"


 
 }
 
  return (
    <div className='movie-container'>
      <div className='movies-data'>

        { data && dataPost ?  data.map( (movie , index) => {
          return(
          <div key={index} className='movie-item'>
            <img src={movie.thumbnailUrl}></img>
            <h1>{movie.title}</h1>
            </div>
       ) })  : error }

     
        
       
       <button className='movie-button' onClick={handleOnClick}> {`>`}</button>
        
      </div>
    </div>
  )
}

export default Movie