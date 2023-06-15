import React from 'react'

function Filter(props) {
  return (
    <div>
        <form >
            <label for="fname">Search</label>
            <input placeholder='Search movie here'value={props.value}
            onChange={(event)=>props.setSearchValue(event.target.value)}
            id="fname" name="fname"/>
            
        </form>
    </div>
  )
}

export default Filter