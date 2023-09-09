import React from 'react'
import { GlobalState } from '../ContextAPI'



const Search = () => {

  const {searchFilter} = GlobalState();

  return (
    <div>
      <input id="search" type='text' placeholder='Search...' onChange={(e)=>searchFilter(e.target.value)}/>
    </div>
  )
}

export default Search