import Movie from './components/Movie';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data , setData] = useState();
  const [error , setError] = useState(false);


  useEffect( () => {

    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then( (response) => response.json())
    .then( (actualData) => setData(actualData))
    .then( setError(true) )
    

  }, [error])



  
  return (
    <div className="App">
     
     <Movie data={error ? data : error} error={error}></Movie>
    </div>
  );
}

export default App;
