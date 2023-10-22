import React, { useState } from 'react'
import './App.css'
import './Util.css'
import Navbar from './components/shared/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Cart from './pages/Cart'

function App() {
  // const [token, setToken] = useState()

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/about' Component={About}></Route>
        <Route exact path='/menu' Component={Menu}></Route>
        <Route exact path='/signin' Component={Signin}></Route>
        <Route exact path='/signup' Component={Signup}></Route>
        {/* <Route
          exact
          path='/signin'
          element={<Signin token={token} setToken={setToken} />}
        ></Route>
        <Route
          element={
            <PrivateRoute isAuthenticated={!!token} redirectTo='/signin' />
          }
        >
          <Route path='/menu' element={<Menu />} />
        </Route> */}

        <Route exact path='/contact' Component={Contact}></Route>
        <Route exact path='/cart' Component={Cart}></Route>
      </Routes>
    </Router>
  )
}

// function PrivateRoute({ isAuthenticated, redirectTo }) {
//   return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
// }

export default App
