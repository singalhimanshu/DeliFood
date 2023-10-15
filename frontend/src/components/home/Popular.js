import React, { useState } from 'react'
import Card from '../shared/Card'
import { data } from '../../data/data.js'

const Popular = () => {
  const [dish, setDish] = useState('salad')
  return (
    <div className='container flex-center'>
      <div className='popular-container flex-center'>
        <h2 className='popular-hdr-text'>Popular {dish} </h2>
        <div className='popular-btn flex-se'>
          <button onClick={() => setDish('salad')} className='main-btn btn '>
            salad
          </button>
          <button onClick={() => setDish('burger')} className='btn main-btn'>
            Burger
          </button>
          <button onClick={() => setDish('pizza')} className='btn main-btn'>
            Pizza
          </button>
          <button onClick={() => setDish('pasta')} className='btn main-btn'>
            Pasta
          </button>
        </div>

        <div className='popular-dish flex-sb'>
          {data
            .filter((item) => item.category === `${dish}`)
            .map((filterdItem) => (
              <Card {...filterdItem} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Popular
