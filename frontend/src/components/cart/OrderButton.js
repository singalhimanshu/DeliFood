import React from 'react'
import { Link } from 'react-router-dom'
import Checkout from '../../pages/Checkout'
import { useGlobalCartContext } from '../../store/CartProvider'

const OrderButton = (props) => {
  const cartContext = useGlobalCartContext()
  const submitOrderHandler = async (userData) => {
    await fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: userData,
        orderedItems: cartContext.items,
      }),
    })
    cartContext.clearCart()
  }
  return (
    <div>
      <div>
        {/* <Link to='/cart/checkout'>Proceed To Checkout</Link> */}
        <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler} />
      </div>
    </div>
  )
}

export default OrderButton
