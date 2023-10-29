import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../store/CartContext'
import CartItem from '../components/cart/CartItem'
import Checkout from './Checkout'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/shared/Modal'
import Footer from '../components/shared/Footer'

const Cart = (props) => {
  const cartContext = useContext(CartContext)
  const navigate = useNavigate()

  const [isEmpty, setIsEmpty] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [isCheckout, setIsCheckout] = useState(false)

  const hasItems = cartContext.items.length > 0
  const cartItems = cartContext.items

  const checkIsEmpty = () => {
    console.log('checking empty ...')
    try {
      if (cartItems.length === 0) {
        setIsEmpty(true)
        setIsCheckout(false)
        console.log('cart is empty')
      } else {
        setIsEmpty(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const submitOrderHandler = async (userData) => {
    await fetch('http://localhost:8080/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: userData,
        ordereditems: cartContext.items,
      }),
    })
    setShowModal(true)
    cartContext.clearCart()
  }

  useEffect(() => {
    checkIsEmpty()
  }, [cartItems.length])

  const closeModal = () => {
    setShowModal(false)
    navigate('/')
  }

  const orderStatus = <p>order placed successfully!!</p>
  return (
    <div>
      <div className='cart-container container flex-center'>
        <h2>Your Cart Items</h2>
        {isEmpty && <p>your cart is empty</p>}
        <div>
          {cartItems.map((item) => (
            <CartItem {...item} />
          ))}
        </div>

        {isCheckout && <Checkout onConfirm={submitOrderHandler} />}
        {!isCheckout && (
          <div>
            {hasItems && (
              <div className='amount-box flex-se'>
                <p>{`Your Total Amount : $ ${cartContext.totalAmount.toFixed(
                  2
                )}`}</p>
                <button onClick={orderHandler} clas>
                  Order
                </button>
              </div>
            )}
          </div>
        )}
        {showModal && <Modal onClose={closeModal}>{orderStatus}</Modal>}
      </div>
      <Footer />
    </div>
  )
}

export default Cart
