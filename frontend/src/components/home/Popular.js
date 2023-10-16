import React, { useEffect, useState } from 'react'
import Card from '../shared/Card'
// import { data } from '../../data/data.js'

const Popular = () => {
  const [query, setQuery] = useState('salad')
  const [data, setData] = useState([])

  const getFoodCategory = data
    .map((foodCategory) => foodCategory.category)
    .reduce((accumulator, foodCategory) => {
      if (!accumulator.includes(foodCategory)) {
        accumulator.push(foodCategory)
      }
      return accumulator
    }, [])

  const fetchInfo = async () => {
    try {
      return await fetch(`http://localhost:3000/popular`)
        .then((res) => res.json())
        .then((d) => setData(Object.values(d)))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchInfo()
  })

  return (
    <div className='container flex-center'>
      <div className='popular-container flex-center'>
        <h2 className='popular-hdr-text'>Popular {query} </h2>
        <div className='popular-btn flex-se'>
          {getFoodCategory.map((foodCategory) => (
            <button
              onClick={() => setQuery(foodCategory)}
              className='main-btn btn '
            >
              {foodCategory}
            </button>
          ))}

          {/* <button onClick={() => setQuery('salad')} className='main-btn btn '>
            salad
          </button>
          <button onClick={() => setQuery('burger')} className='btn main-btn'>
            Burger
          </button>
          <button onClick={() => setQuery('pizza')} className='btn main-btn'>
            Pizza
          </button>
          <button onClick={() => setQuery('pasta')} className='btn main-btn'>
            Pasta
          </button> */}
        </div>

        <div className='popular-query flex-sb'>
          {data
            .filter((item) => item.category === `${query}`)
            .map((filterdItem) => (
              <Card {...filterdItem} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Popular
