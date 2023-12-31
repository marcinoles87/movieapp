import Movie from './components/Movie';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data , setData] = useState();
  const [error , setError] = useState(false);


  useEffect( () => {

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then( (response) => response.json())
    .then( (actualData) => setData(actualData))
    .then( setError(true) )
    
 
  }, [])


  
  return (
    <div className="App">
     
     <Movie data={error ? data : error}></Movie>
    </div>
  );
}

export default App;
