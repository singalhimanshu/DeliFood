import React from 'react'

import { useGlobalCartContext } from '../../store/CartProvider'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CartButton = () => {
  const cartContext = useGlobalCartContext()
  const { items } = cartContext
  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0)
  return (
    <Link to='/cart'>
      <button className=' btn btn-primary'>
        Cart ({cartItemCount}) <FaShoppingCart />
      </button>
    </Link>
  )
}

export default CartButton
