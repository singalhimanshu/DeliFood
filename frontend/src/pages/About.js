import React from 'react'
import Footer from '../components/shared/Footer'
import AboutHeader from '../components/about/AboutHeader'
import AboutMain from '../components/about/AboutMain'
import AboutImages from '../components/about/AboutImages'

const About = () => {
  return (
    <div>
      <AboutHeader />
      <AboutMain />
      <AboutImages />
      <div className='container'>
        <p>container-4</p>
      </div>
      <Footer />
    </div>
  )
}

export default About
