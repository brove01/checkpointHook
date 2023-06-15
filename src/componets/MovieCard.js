import React from 'react'

function MovieCard(props) {
  return (
    <>
      {props.movies.map((movie,index)=>(
       <div className='card'>
        <img src={movie.Poster} alt='movie' className='comg'></img>
        <h4>Title:<span>{movie.Title}</span></h4>
        <h4>Description:<span>{movie.Year}</span></h4>
        <h4>Rating:<span>{movie.imdbID}</span></h4>
        
          
            
        </div>
        ))}
    </>
  )
}

export default MovieCard