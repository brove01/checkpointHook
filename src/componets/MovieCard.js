import React from 'react'

function MovieCard({title, description, posterURL, rating}) {
  return (
    
      
        
    <div className='card'>
      <img src={posterURL} alt='movie' className='comg'></img>
      <h4>Title:<span>{title}</span></h4>
      <h4>Description:<span>{description}</span></h4>
      <h4>Rating:<span>{rating}</span></h4>
        
          
            
    </div>
       
   
  )
}

export default MovieCard