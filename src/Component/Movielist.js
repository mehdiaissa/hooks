import React from 'react'
import MovieCard from './moviecard'
import "../Component/Movielist.css";


const  Movielist = ({movies,namesearch,ratsesearch}) => {
  const search =()=>{
    return movies.filter((film)=>{
      return (
        ratsesearch===0 ?
        film.name.toLowerCase().includes(namesearch.toLowerCase()):
        Number(film.rating) === ratsesearch && film.name.toLowerCase().includes(namesearch.toLowerCase())
      )
    })
  }
  return (
       
    <div className='movielist'>
     {search().map((movie) => <MovieCard  movie={movie} key={movie.id}/>)};
    
    </div>
  )
}

export default Movielist