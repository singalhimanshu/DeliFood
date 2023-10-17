import React from 'react'
import '../styles/Card.css'
export const Card = (props) => {
  return (
    <>
      <div className='card flex'>
        <div className='card-img-container flex'>
          <img className='card-img' src={props.img} />
        </div>
        <div className='card-title'>{props.name}</div>
        <div className='card-title'>${props.price}</div>
        <button className='btn main-btn'>
          <a href='/cart'>ADD ITEM</a>
        </button>
      </div>
    </>
  )
}

export default Card
