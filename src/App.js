import Movie from './components/Movie';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data , setData] = useState();
  const [error , setError] = useState();

  
  useEffect( () => {

    async function getData(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then( (response) => response.json())
    .then( (actualData) => setData(actualData))
  
    }

    getData()
  }, [])

  
  return (
    <div className="App">
     
     <Movie data={data}></Movie>
    </div>
  );
}

export default App;
