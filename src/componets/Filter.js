import React from 'react'

function Filter(title, rate) {
  return (
    <div>
        <form >
            <label for="fname">Filter</label>
            <input placeholder='Search movie here' type="text" id="fname" name="fname"/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default Filter