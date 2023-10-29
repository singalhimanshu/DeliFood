import React from 'react'
import { SearchBar } from './SearchBar'
import SearchFilter from './SearchFilter'

const Search = () => {
  return (
    <>
      <div className='wrapper'>
        <SearchBar />
        <SearchFilter />
      </div>
    </>
  )
}

export default Search
