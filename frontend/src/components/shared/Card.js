import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Card.css'

import CartContext from '../../store/CartContext'
// import { useGlobalCartContext } from '../../store/CartProvider'

export const Card = (props) => {
  // const { addItem } = useGlobalCartContext()

  const cartContext = useContext(CartContext)
  const price = `${props.price.toFixed(2)}`

  const addItemtoCart = () => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      quantity: 1,
      price: props.price,
      image: props.img,
    })
  }
  return (
    <>
      <div className='card flex'>
        <div className='card-img-container flex'>
          <img className='card-img' src={props.img} />
        </div>
        <div className='card-title'>{props.name}</div>
        <div className='card-title'>${price}</div>
        <button className='btn main-btn' onClick={addItemtoCart}>
          ADD ITEM
        </button>
      </div>
    </>
  )
}

export default Card
