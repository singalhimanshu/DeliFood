import React, { useState, useEffect } from 'react'
// import salad from '../img/salad-1.png'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Footer from '../components/Footer'
import { data } from '../data/data'

function Home() {
  const [dish, setDish] = useState('salad')

  // const [value, setValue] = useState([])

  // useEffect(() => {
  //   // Import the JSON value using a relative path
  //   import('../dat/value')
  //     .then((value) => setValue(value.default))
  //     .catch((error) => console.error('Error importing value:', error))
  //   console.log(value)
  // }, [value])

  return (
    <div className='home-page'>
      <p>This is home Page</p>
      <div className='header-container'>
        <div className='main-header-container'>
          <div className='header-text'>
            <h1>
              Fresh & <br /> Healthy Food
            </h1>
            <p>
              At your door step
              <br /> lorem epsium mfalana food at your convineince price
            </p>

            <button>
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
      <div className='popular-container'>
        <h2 className='popular-hdr-text'>Popular {dish} </h2>
        <div className='popular-btn'>
          <button onClick={() => setDish('salad')} className='btn main-btn'>
            salad
          </button>
          <button onClick={() => setDish('burger')} className='btn main-btn'>
            Burger
          </button>
          <button onClick={() => setDish('pizza')} className='btn main-btn'>
            Pizza
          </button>
          <button onClick={() => setDish('pasta')} className='btn main-btn'>
            Pasta
          </button>
        </div>
      </div>
      <div className='card-container flex'>
        {data
          .filter((item) => item.category === `${dish}`)
          .map((filterdItem) => (
            <Card
              key={filterdItem.id}
              name={filterdItem.name}
              category={filterdItem.category}
              price={filterdItem.price}
              image={filterdItem.img}
            />
          ))}
      </div>
      <Footer />
    </div>
  )
}

export default Home
