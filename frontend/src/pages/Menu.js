import React, { useEffect, useState } from 'react'
import Footer from '../components/shared/Footer'
// import { data } from '../data/data'
import Card from '../components/shared/Card'
import { FaSearch } from 'react-icons/fa'
// import { get } from 'react-hook-form'

const Menu = () => {
  const [input, setInput] = useState('')
  const [data, setData] = useState([])
  // const [foodItemCategory, setFoodItemCategory] = useState('')

  const fetchApiData = async () => {
    try {
      return await fetch('http://localhost:3000/dishes')
        .then((res) => res.json())
        .then((data) => setData(Object.values(data)))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchApiData()
  })

  const getFoodItems =
    input === ''
      ? data
      : data.filter((item) =>
          item.name
            .toLowerCase()
            .trim()
            .includes(`${input.toLowerCase().trim()}`)
        )

  const getFoodCategory = data
    .map((foodCategory) => foodCategory.category)
    .reduce((accumulator, foodCategory) => {
      if (!accumulator.includes(foodCategory)) {
        accumulator.push(foodCategory)
      }
      return accumulator
    }, [])

  // op : ['pasta', 'pizza', 'burger', 'salad']

  // const setFoodCategory = (category) =>
  //   data.filter((item) => item.category == category)

  const getCategoryCount = (category) =>
    data.reduce(
      (accumulator, val) =>
        val.category === `${category}` ? accumulator + 1 : accumulator,
      0
    )
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
            {getFoodCategory.map((foodCategory) => (
              <button
                onClick={() => setInput(foodCategory)}
                className='main-btn btn '
              >
                {foodCategory} ({getCategoryCount(foodCategory)})
              </button>
            ))}

            {/* <button onClick={() => setInput('burger')} className='btn main-btn'>
              Burger
            </button>
            <button onClick={() => setInput('pizza')} className='btn main-btn'>
              Pizza
            </button>
            <button onClick={() => setInput('pasta')} className='btn main-btn'>
              Pasta
            </button> */}
            <button onClick={() => setInput('')} className='btn main-btn'>
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
