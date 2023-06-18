
import './App.css';
import Filter from './componets/Filter';
import Header from './componets/Header';
import { MovieList } from './componets/MovieList';
import MovieCard from './componets/MovieCard';
import React,{useEffect, useState} from 'react';
function App() {
  const [movies,setMovies]=useState([
    {
      "Title": "Enter the Anime",
      "Year": "2019",
      "imdbID": "tt10662450",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwNGI5MTAtMGJlZS00MzZlLWJjNmItZDcxYTFmY2VmMGJlXkEyXkFqcGdeQXVyMjUxMTEwNTE@._V1_SX300.jpg"
  },
  {
      "Title": "Weird Anime Excel Saga",
      "Year": "1999–2001",
      "imdbID": "tt0240493",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDM5YzVmODEtNWQ0MS00ODAwLTlkNGItMmI2MDY3ZWZkY2JiXkEyXkFqcGdeQXVyMTQ3MjMyMTYz._V1_SX300.jpg"
  },
  {
      "Title": "Tokyo Ghoul: Re - Anime",
      "Year": "2018",
      "imdbID": "tt8046356",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGU5ZDA0MDUtMDBlYS00OGIyLThjYTYtMmRkODc0MGYyNDE5XkEyXkFqcGdeQXVyMjI2ODkzODY@._V1_SX300.jpg"
  },
  {
      "Title": "Marvel Anime",
      "Year": "2010–2011",
      "imdbID": "tt1945805",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzM2M2M2MmItYjE3NS00YmNhLTkyZmItYzNkZWJiYzJmYjg0XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
  },
  {
      "Title": "Your Anime Sucks: Sword Art Online II",
      "Year": "2014–2015",
      "imdbID": "tt8183792",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDZjZWMxNjItMGI0Yy00MzA1LTg0OGMtOTc1MmEzMDQwZTk2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjg4NzY5ODc@._V1_SX300.jpg"
  },
  {
      "Title": "Anime san jushi",
      "Year": "1987–1989",
      "imdbID": "tt0294002",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BM2IzMThlNTAtNTRjZS00NzlkLThjYjgtOGU3ZmIzNGE5ZjQ3XkEyXkFqcGdeQXVyMzQ4MDczNzQ@._V1_SX300.jpg"
  },
  {
      "Title": "Anime Crimes Division",
      "Year": "2017–",
      "imdbID": "tt7700928",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTQyZWY5ZWYtNmNlZC00YTJiLWE5OTYtYjllZTc3MWQwYTAwXkEyXkFqcGdeQXVyMTQ4NDAzMDQ@._V1_SX300.jpg"
  },
  {
      "Title": "Anime Supremacy!",
      "Year": "2022",
      "imdbID": "tt16303194",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjk0Y2VhZWYtNjdkOC00MGExLWJiNjAtOTNhMGNkNWE2NTZlXkEyXkFqcGdeQXVyNjE4OTY3NTg@._V1_SX300.jpg"
  },
  {
      "Title": "Anime War",
      "Year": "2017–2019",
      "imdbID": "tt10420790",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGM5ZjJjMTgtNGQxZC00MzNiLWJiZGItMmY1ZDBiOWVhMzQ3XkEyXkFqcGdeQXVyMTE0ODI0MjY0._V1_SX300.jpg"
  },
  {
      "Title": "The SpongeBob SquarePants Anime",
      "Year": "2020–",
      "imdbID": "tt12895414",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BM2ZiY2IxZjgtNGVlMi00ZTQ5LTk4N2EtZDgwNDdkNjU0MWZhXkEyXkFqcGdeQXVyMTEzOTI1NTc1._V1_SX300.jpg"
  }
  ])
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
        
        <MovieList movies={movies}/>
        
      </div>
      
    </div>
    </>
  );
}

export default App;
