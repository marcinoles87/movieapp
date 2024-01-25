import Movie from './components/Movie';
import './App.css';
import { useEffect, useState } from 'react';
import SearchField from './components/SearchField';
// import { Route, Router, Routes , Link } from 'react-router-dom';


function App() {

  const [data , setData] = useState();
  const [error , setError] = useState('error');
  const [omdbData , setOmdb] = useState([])
  const [movie , setMovie] = useState([]);
  const [movieInfoTitle , setMovieInfo] = useState();
  const [movieYear , setMovieYear] = useState();
  const [movieId , setMovieId] = useState();
  const [searchMovie , setSearchMovie] = useState(false);
  const [inputedMovie , setInputMovie] =  useState('');
  const [validMovie , setValidMovie] = useState('')
  const [newFilm , setNewFilm] = useState(false)
  const [movieType , setMovieType] = useState();


  let start = 0
  let newX = -180
  let startX = 0
  let newButtonX = 180


 

  useEffect( () => {

    const fetchData = async () => {

      

        console.log('dalej data bez ')
      const URL = `http://www.omdbapi.com/?s=spider&page=2&apikey=5217a1e0&i`;
      const response = await fetch(URL);
      const finalData = await response.json();
      
      setOmdb(finalData.Search)
      console.log(finalData)

      

      if(newFilm === true){
        
        console.log('jestem w srodku dziala')
        const URL = `http://www.omdbapi.com/?s=${validMovie}&page=2&apikey=5217a1e0&i`;
      const response = await fetch(URL);
      const finalData = await response.json();
      console.log(finalData.Search)
      
      setOmdb(finalData.Search)
      

      if(finalData.Search === undefined){
        alert('no movie in our data to display , please search another film')
      }



      }
    
    }

    fetchData()
    
  }, [validMovie])

  console.log(omdbData)


   useEffect( () => {

    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then( (response) => response.json())
    .then( (actualData) => setData(actualData))
    .then( setError(true) )
    console.log(data)
    

  }, [error])


  const handleGetElement = (e) => {
    const movieIndex = e.target.alt;
    const activMovie = omdbData[movieIndex];
    const movieTitle = activMovie.Title;
    const movieYear = activMovie.Year;
    const movieId = activMovie.imdbID;
    const movieType = activMovie.Type;
    
    setMovie(activMovie.Poster)
    setMovieInfo(movieTitle)
    setMovieYear(movieYear)
    setMovieId(movieId)
    setMovieType(movieType)
    

    
  }

 

 const handleOnClickNext = () => {
  
    start+=newX
    startX+=newButtonX
    const movie = document.querySelector('.movies-data');
    console.log(movie)
    movie.style.transform = "translateX(" + start + "px)"
    const button = document.querySelector('.movie-button-next');
    button.style.transform = "translateX("+ newButtonX +" +px)"
 }

 const handleOnClickPrev = () => {
  
  start-=newX
  startX-=newButtonX
  const movie = document.querySelector('.movies-data');
  movie.style.transform = "translateX(" + start + "px)"
  const button = document.querySelector('.movie-button-prev');
  button.style.transform = "translateX("+ newButtonX +" +px)"
}



  
  return (
    <div className="App">

     
       

      <SearchField setSearchMovie={setSearchMovie} searchMovie={searchMovie} setInputMovie={setInputMovie} inputedMovie={inputedMovie} setValidMovie={setValidMovie} setNewFilm={setNewFilm} newFilm={newFilm}></SearchField>
        
        
          <div className='movie-information-head'>
            <h1>Title : {movieInfoTitle} valid movie : {validMovie}</h1>
            <p>Movie year : {movieYear}</p>
            <p>Movie imdbID : {movieId}</p>
            <p>Type : {movieType}</p>
            { movie ? movie : 'no Poster'}<img src={movie} className='movie-information-img' alt={movieInfoTitle}></img>
            
            
            </div>
      

    
     
        <Movie getMovie={handleGetElement} dataOmdb={omdbData}  data={error ? data : error} error={error}></Movie>
        <button className='movie-button-prev' onClick={handleOnClickPrev}> {`<`}</button>
        <button className='movie-button-next' onClick={handleOnClickNext}> {`>`}</button>
    </div>
  );
}

export default App;
