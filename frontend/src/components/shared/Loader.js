import React from 'react'
import '../styles/Loader.scss'

const Loader = () => {
  return (
    <>
      <div className='loader-overlay'></div>
      <div className='loading-dots'>
        <div>Loading</div>
        <div className='loading-dots--dot'></div>
        <div className='loading-dots--dot'></div>
        <div className='loading-dots--dot'></div>
      </div>
    </>
  )
}

export default Loader
