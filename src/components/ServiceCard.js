import React from 'react'
import { serviceData } from '../data/serviceData'

const Servicecard = () => {
  return (
    <div className='service-container'>
      {/* ServiceCard */}
      <div className='flex'>
        {serviceData.map((item) => (
          <p key={item.id} className='card'>
            {item.title}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Servicecard
