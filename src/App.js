import Movie from './components/Movie';
import './App.css';
import { useEffect, useState } from 'react';
// import { Route, Router, Routes , Link } from 'react-router-dom';


function App() {

  const [data , setData] = useState();
  const [error , setError] = useState(false);
  const [omdbData , setOmdb] = useState([])
  const [movie , setMovie] = useState([]);

  let start = 0
  let newX = -180
  let startX = 0
  let newButtonX = 180


 

  useEffect( () => {

    const fetchData = async () => {

      const URL = `http://www.omdbapi.com/?s=ame&apikey=5217a1e0&i`;
      const response = await fetch(URL);
      const finalData = await response.json();
      
      setOmdb(finalData.Search)
    
    }

    fetchData()
    
  }, [])

  console.log(omdbData)


   useEffect( () => {

    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then( (response) => response.json())
    .then( (actualData) => setData(actualData))
    .then( setError(true) )
    console.log(data)
    

  }, [error])


  const handleGetElement = (e) => {
    const movieIndex = e.target.alt
    const activMovie = omdbData[movieIndex]
    console.log(activMovie.Poster)
    setMovie(activMovie.Poster)
    

    
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
  console.log(movie)
  movie.style.transform = "translateX(" + start + "px)"
  const button = document.querySelector('.movie-button-prev');
  button.style.transform = "translateX("+ newButtonX +" +px)"
}

  
  return (
    <div className="App">

        <div className='movie-information'>
          <div className='movie-information-head'>
            <img src={movie} className='movie-information-img'></img>
            </div>
        </div>

    
     
        <Movie getMovie={handleGetElement} dataOmdb={omdbData}  data={error ? data : error} error={error}></Movie>
        <button className='movie-button-prev' onClick={handleOnClickPrev}> {`<`}</button>
        <button className='movie-button-next' onClick={handleOnClickNext}> {`>`}</button>
    </div>
  );
}

export default App;
