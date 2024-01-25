import React from 'react'

function SearchField({setSearchMovie , searchMovie , setInputMovie , inputedMovie , setValidMovie , setNewFilm , newFilm}) {

    const handleSearchMovie = (e) =>{
  
        
        setSearchMovie(!searchMovie)
        
        
      }
      
      const handleInput = (e) => {
        const inputValue = e.target.value;
        setInputMovie(inputValue)
        
      }

      const validedMovie = () => {
        setValidMovie(inputedMovie)
        setNewFilm(true)
        console.log(newFilm)
        
       

      }

 

    

      
  return (

    <div className='search-container'>
    <p>Search movie : </p>
    <div className='search-inputandicon'>
    <i className="fa-solid fa-magnifying-glass" style={{color:'white'}} onClick={handleSearchMovie} ></i>
     {searchMovie ? <input placeholder='search movie' onChange={handleInput}></input> : ''}
     {searchMovie ? <button onClick={validedMovie}>Search</button> : ''}
     
    </div>
    </div>
  )
}

export default SearchField