import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className='footer-container flex'>
      <div className='flex footer'>
        <div className='footer-1'>
          <span>Important Links</span>
          <Link to='/' className='link' onClick={scrollToTop}>
            Home
          </Link>
          <Link to='/about' className='link'>
            About Us
          </Link>
          <Link to='/menu' className='link'>
            Menu
          </Link>
          <Link to='/contact' className='link'>
            Contact
          </Link>
        </div>
        <div className='footer-list'>
          <span>Our Services </span>
          <li>Fast Delivery</li>
          <li>Best Quality Food</li>
          <li>Discount Offers</li>
          <li>Customer Support</li>
        </div>
        <div className='footer-list'>
          <span>Connect & Follow us</span>
          <li>facebook</li>
          <li>instagram</li>
          <li>twiiter</li>
          <li>github</li>
        </div>
        <div>
          <span>Address</span>
          <p>
            Some random Street no. <br />
            Random City - pincode <br />
            Random Country
            <br />
            Random Text
          </p>
        </div>
      </div>
      <div className='footer-subscribe flex'>
        <p>Subscribe our Newsletter</p>
        <div className='footer-email flex'>
          <label>Email</label>
          <input type='text' placeholder=' type your email...'></input>
          <button>Subscribe</button>
        </div>
      </div>
      <p>Made By Deepti &#x2764; {new Date().getFullYear()} </p>
    </footer>
  )
}

export default Footer
