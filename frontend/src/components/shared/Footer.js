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
      <div className='footer-subscribe flex'>
        <p>Subscribe our Newsletter</p>
        <div className='footer-email flex'>
          <label>Email</label>
          <input type='text' placeholder=' type your email...'></input>
          <button className='btn'>Subscribe</button>
        </div>
      </div>
      <div className='flex footer'>
        <div className='wrapper footer-main'>
          <span>Company</span>
          <a href='/' onClick={scrollToTop}>
            Home
          </a>
          <a href='/about' onClick={scrollToTop}>
            About Us
          </a>
          <a href='/menu' onClick={scrollToTop}>
            Menu
          </a>
          <a href='/contact' onClick={scrollToTop}>
            Contact
          </a>
        </div>
        <div className='wrapper '>
          <span>Services</span>
          <ul className='footer-list'>
            <li>Fast Delivery</li>
            <li>Best Quality Food</li>
            <li>Discount Offers</li>
            <li>Customer Support</li>
          </ul>
        </div>
        <div className='wrapper'>
          <span>Follow us</span>
          <ul className='footer-list'>
            <li>instagram</li>
            <li>twiiter</li>
            <li>github</li>
            <li>facebook</li>
          </ul>
        </div>
        <div className='wrapper footer-address flex-sb'>
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
      <p>Made By Deepti &#x2764; {new Date().getFullYear()} </p>
    </footer>
  )
}

export default Footer
