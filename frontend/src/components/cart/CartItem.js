import React, { useContext } from 'react'
import CartContext from '../../store/CartContext'

const CartItem = (props) => {
  const cartContext = useContext(CartContext)

  const increaseItemQuantity = () => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      quantity: 1,
      price: props.price,
      image: props.img,
    })
  }

  const decreaseItemQuantity = () => {
    cartContext.removeItem(props.id)
  }
  return (
    <div className='flex-center'>
      {/* add image  */}
      <div className='cartItem-container flex-sb '>
        <div className='cartItem-details'>
          <div>{`Item : ${props.name}`}</div>
          <div>{`price $${props.price} `}</div>
        </div>
        <div className='flex-center'>
          <button onClick={decreaseItemQuantity}> - </button>
          {props.quantity}
          <button onClick={increaseItemQuantity}> + </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
