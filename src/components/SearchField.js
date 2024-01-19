import React from 'react'

function SearchField({setSearchMovie , searchMovie , setInputMovie , inputedMovie , setValidMovie , setNewFilm , newFilm}) {

    const handleSearchMovie = (e) =>{
  
        
        setSearchMovie(!searchMovie)
        
        
      }
      
      const handleInput = (e) => {
        const inputValue = e.target.value;
        setInputMovie(inputValue)
        
      }

      const validMovie = () => {
        setValidMovie(inputedMovie)
        setNewFilm(true)
       

      }

    

      
  return (

    <div className='search-container'>
    <p>Search movie : </p>
    <div className='search-inputandicon'>
    <i class="fa-solid fa-magnifying-glass" style={{color:'white'}} onMouseEnter={handleSearchMovie}></i>
     {searchMovie ? <input placeholder='search movie' onChange={handleInput}></input> : ''}
     {searchMovie ? <button onClick={validMovie}>Search</button> : ''}
     
    </div>
    </div>
  )
}

export default SearchField