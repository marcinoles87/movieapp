import Movie from './components/Movie';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data , setData] = useState();
  const [error , setError] = useState(false);

  
  useEffect( () => {

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then( (response) => response.json())
    .then( (actualData) => console.log(actualData))
    .then( setError(true) )
 



  }, [])


  
  return (
    <div className="App">
     
     {/* <Movie data={data ? !error : error}></Movie> */}
    </div>
  );
}

export default App;
