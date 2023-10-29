import React, { useState, useRef } from 'react'
import { useGlobalCartContext } from '../store/CartProvider'

const Checkout = (props) => {
  const cartContext = useGlobalCartContext()
  const cartCheckoutAmount = cartContext.totalAmount.toFixed(2)

  const isEmpty = (value) => value.trim().length === ''
  const isSixChars = (value) => value.trim().length === 6

  const [isValid, setIsValid] = useState({
    name: true,
    address: true,
    state: true,
    city: true,
    postal: true,
  })

  const nameInputRef = useRef()
  const addressInputRef = useRef()
  const stateInputRef = useRef()
  const cityInputRef = useRef()
  const postalInputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()

    console.log('checkout start...')

    const enteredName = nameInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const enteredState = stateInputRef.current.value
    const enteredPostal = postalInputRef.current.value
    const enteredCity = cityInputRef.current.value

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredAddressIsValid = !isEmpty(enteredAddress)
    const enteredStateIsValid = !isEmpty(enteredState)
    const enteredCityIsValid = !isEmpty(enteredCity)
    const enteredPostalIsValid = isSixChars(enteredPostal)

    setIsValid({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      State: enteredStateIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid,
    })

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredStateIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid

    if (!formIsValid) {
      return
    }
   

    props.onConfirm({
      name: enteredName,
      state: enteredState,
      city: enteredCity,
      postal: enteredPostal,
    })
  }

  const orderCancelHandler = () => {
    cartContext.clearCart()
  }

  return (
    <div className='checkout-container'>
      <div>
        <p>{`Your Cart Total : $ ${cartCheckoutAmount}`}</p>
        <form onSubmit={submitHandler}>
          <div>
            <label>Name</label>
            <br />
            <input type='text' ref={nameInputRef} required />
            {!isValid.name && <p>enter a valid name</p>}
          </div>
          <div>
            <label for='address'>Address</label>
            <br />
            <textarea
              name='address'
              cols='40'
              rows='4'
              ref={addressInputRef}
              required
            />
            {!isValid.address && <p>please enter address</p>}
          </div>
          <div>
            <label>State</label>
            <br />
            <input ref={stateInputRef} />
            {!isValid.state && <p>enter valid state</p>}

            <br />

            <label>City</label>
            <br />
            <input ref={cityInputRef} />
            {!isValid.city && <p>enter valid city</p>}

            <br />

            <label>Pin Code</label>
            <br />
            <input ref={postalInputRef} />
            {!isValid.postal && <p>enter valid pincode</p>}
          </div>
          <div className='flex-sb'>
            <button
              className='btn checkout-btn cancel-btn'
              type='button'
              onClick={orderCancelHandler}
            >
              Cancel Order
            </button>
            <button className='btn checkout-btn order-btn'>Place Order</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Checkout
