import React, { useState } from 'react'
import Footer from '../components/shared/Footer'
import { data } from '../data/data'
import Card from '../components/shared/Card'
import { FaSearch } from 'react-icons/fa'

const Menu = () => {
  const [input, setInput] = useState('ALL')

  const getFoodItems =
    input === 'ALL' ? data : data.filter((item) => item.category === `${input}`)

  return (
    <>
      <div>
        <div className='search-bar flex-center'>
          <div className='search-input'>
            <input
              placeholder='Type your search...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <FaSearch id='input-icon' />
          </div>
        </div>
        <div className='menu-header flex-center'>
          <h2 className='popular-hdr-text'>Popular Cuisines </h2>
          <div className='popular-btn flex-se'>
            <button onClick={() => setInput('salad')} className='main-btn btn '>
              salad
            </button>
            <button onClick={() => setInput('burger')} className='btn main-btn'>
              Burger
            </button>
            <button onClick={() => setInput('pizza')} className='btn main-btn'>
              Pizza
            </button>
            <button onClick={() => setInput('pasta')} className='btn main-btn'>
              Pasta
            </button>
            <button onClick={() => setInput('ALL')} className='btn main-btn'>
              All
            </button>
          </div>
        </div>

        <div className='menu-container'>
          {getFoodItems.map((filterItems) => (
            <Card {...filterItems} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Menu
