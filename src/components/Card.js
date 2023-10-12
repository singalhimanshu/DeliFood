import React from 'react'
import { Link } from 'react-router-dom'

export const Card = (props) => {
  return (
    <>
      <div className='card flex'>
        <img className='card-img' src={props.image} />
        <div className='card-title'>{props.name}</div>
        <div className='card-title'>${props.price}</div>
        <button className='btn main-btn'>
          <Link to='/cart'>+</Link>
        </button>
      </div>
    </>
  )
}

export default Card
