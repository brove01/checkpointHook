import React from 'react'
import MovieCard from './MovieCard'
export const MovieList = (props) => {
  return (
    <>
        {props.movies.map((movie,index)=>(
          <div className='d-flex justify-content-start m-3'>
            <MovieCard title={movie.Title} description={movie.Type} posterURL={movie.Poster} rating={movie.imdbID}/>
          </div>
        ))}
    </>
    
  )
}
