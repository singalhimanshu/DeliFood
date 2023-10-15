import React, { useEffect, useState } from 'react'

import { FaSearch } from 'react-icons/fa'
import '../styles/SearchBar.css'
import Card from '../shared/Card'
import { data } from '../../data/data'

export const SearchBar = () => {
  const [input, setInput] = useState('')
  return (
    <div>
      <div>
        <div>
          <input
            placeholder='Type your search...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <FaSearch id='input-icon' />
        </div>
      </div>
      <div className='search-items'>
        {data
          .filter((item) => item.category === `${input}`)
          .map((filterdItem) => (
            <Card {...filterdItem} />
          ))}
      </div>
    </div>
  )
}
