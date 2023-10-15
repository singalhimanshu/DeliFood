import React from 'react'
import Footer from '../components/shared/Footer'
import Servicecard from '../components/home/ServiceCard'
import Popular from '../components/home/Popular'
import HomeHeader from '../components/home/HomeHeader'

function Home() {
  return (
    <div>
      <HomeHeader />
      <Popular />
      <Servicecard />
      <Footer />
    </div>
  )
}

export default Home
