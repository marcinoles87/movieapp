import Movie from './components/Movie';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data , setData] = useState();
  const [postData , setPostdata ] = useState();
  const [error , setError] = useState(false);


  useEffect( () => {

    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then( (response) => response.json())
    .then( (actualData) => setData(actualData))
    .then( setError(true) )
    

  }, [error])

  useEffect( () => {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (response) => response.json())
    .then( (actualData) => setPostdata(actualData))
    .then( setError(true) )
    

  }, [error])

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
    <div className="App">
     
     <Movie  dataPost={error ? postData : error} data={error ? data : error} error={error}></Movie>
     <button className='movie-button' onClick={handleOnClick}> {`>`}</button>
    </div>
  );
}

export default App;
