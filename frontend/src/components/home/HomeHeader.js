import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <div>
      <div className='container flex-center'>
        <div className='main-header-container flex-sa'>
          <div className='header-text flex-se'>
            <h1>
              Fresh & <br /> Healthy Food
            </h1>
            <p>
              Realx please, we've got you
              <br />
              covered every day of the week
            </p>

            <button className='btn'>
              <Link to='/menu' className='link'>
                Discover menu
              </Link>
            </button>
          </div>
          <div className='header-img'>
            <img src='/img/salad-1.png' width='500' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
