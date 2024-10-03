import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./Navbar"
import Home from './Home'
import About from './About'
import Product from './Product'
import Contact from './Contact'
import Context from './Context'
import Cart from './Cart'
import Footer from './Footer'
import Login from './Login'
import Register from './Register'
export default function Myroute() {
  return (
    <div>
      <Context>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Product' element={<Product />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Context>
    </div>
  )
}
