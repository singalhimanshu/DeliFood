import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Signin from './pages/Signin'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Signup from './pages/Signup'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/about' Component={About}></Route>
        <Route exact path='/signin' Component={Signin}></Route>
        <Route exact path='/signup' Component={Signup}></Route>
        <Route exact path='/menu' Component={Menu}></Route>
        <Route exact path='/contact' Component={Contact}></Route>
        <Route exact path='/cart' Component={Cart}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
