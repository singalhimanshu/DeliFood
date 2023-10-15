import React from 'react'
import { serviceData } from '../../data/serviceData'

const Servicecard = () => {
  return (
    <div className='container service-container flex-sa'>
      <div className='service flex'>
        {serviceData.map((item) => (
          <div className='service-card flex-se'>
            <div className='service-img'>
              <img src={item.img} />
            </div>
            <div className='service-title'>
              <p key={item.id}>{item.title}</p>
            </div>
            <div className='service-info'>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Servicecard
