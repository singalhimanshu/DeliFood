import React, { useState } from 'react'
import Card from '../shared/Card'
import { data } from '../../data/data'

const SearchFilter = () => {
  const [filter, setFilter] = useState('')

  const filter_category = [...new Set(data.map((item) => item.category))]
  const filter_rating = [...new Set(data.map((item) => Math.ceil(item.rating)))]

  return (
    <div>
      <div>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value=''>Filter Items</option>

          {filter_category.map((item) => (
            <option value={item}>Filter by {item}</option>
          ))}

          {filter_rating.map((item) => (
            <option value={item}>Filter by {item} Star Ratings</option>
          ))}
        </select>
      </div>

      <div className='flex'>
        {data
          .filter((item) => item.category === `${filter}`)
          .map((filterdItem) => (
            <Card {...filterdItem} />
          ))}
      </div>
    </div>
  )
}

export default SearchFilter
