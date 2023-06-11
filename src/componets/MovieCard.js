import React from 'react'

function MovieCard( title, description, posterURL, rating) {
  return (
    <div className='card'>
        <img src="https://www.scifinow.co.uk/wp-content/uploads/2021/05/DSMT_QUAD_POSTER-616x463.png"className='comg'  alt="..."/>
        
        <h4>Title:<span></span></h4>
        <h4>Description:<span></span></h4>
        <h4>Rating:<span></span></h4>
    </div>
  )
}

export default MovieCard