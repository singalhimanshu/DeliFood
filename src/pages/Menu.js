import React from 'react'
import { data } from '../data/data'
import Card from '../components/Card'

const Menu = () => {
  return (
    <div>
      Menu
      <div className='menu-container'>
        {data.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            image={item.img}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu
