
import { useState } from 'react';
import './App.css';
import Addmovies from './Component/Addmovies';
import Movielist from './Component/Movielist';
import Navbars from './Component/Navbars';
import { MovieData } from './Component/MovieData';
function App() {
  const[namesearch,setnamesearch]=useState('')
  const[ratsesearch,setratsearch]=useState(0)
  const[movies,setmovies]=useState(MovieData)
  
  return (
    <div className="App">
      <Navbars
      namesearch={namesearch}
      setnamesearch={setnamesearch}
      ratsesearch={ratsesearch}
      setratsearch={setratsearch}
      movies={movies}
      setmovies={setmovies}
      />
      <Movielist
      movies={movies}
      namesearch={namesearch}
      ratsesearch={ratsesearch}
      />
      <Addmovies
      movies={movies}
      setmovies={setmovies}
      />

    </div>
  );
}

export default App;
