import React from 'react'
import Footer from '../components/shared/Footer'

const Contact = () => {
  return (
    <div>
      <div className='contact-container container flex-center'>
        {/* <div className='contact-img flex-center'>
          <img src='https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80' />
        </div> */}
        <div className='contact-info flex-center'>
          <div className='contact-div'>
            <h2>Contact Us</h2>
            <p>
              Customer support available 24x7.
              <br />
              Always looking for Customer Feedback.
            </p>
            <p>
              Ph no : +91 1234 5678
              <br />
              Email : support@delifood.com
            </p>
            <div className='contact-btn flex-center'>
              <button className='btn'>
                <a href='#' target='_blank'>
                  Send Mail
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
