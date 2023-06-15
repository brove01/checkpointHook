
import './App.css';
import Filter from './componets/Filter';
import Header from './componets/Header';
import { MovieList } from './componets/MovieList';
import MovieCard from './componets/MovieCard';
import React,{useEffect, useState} from 'react';
function App() {
  const [movies,setMovies]=useState([])
  const[searchValue,setSearchValue]=useState('')
  const getMovieRequest=async(searchValue)=>{
    const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`
    const response= await fetch(url)
    const responseJson=await response.json()
    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
    
  } 
  useEffect(()=>{
    getMovieRequest(searchValue);
  },[searchValue])
  return (
    <>
    <div className='row'>

    </div>
    <Header/>
    <Filter searchValue={searchValue} setSearchValue={setSearchValue}/>
    <div className='movie-app'>
      
      <div className='row'>
        
        <MovieCard movies={movies}/>
        
      </div>
      
    </div>
    </>
  );
}

export default App;
