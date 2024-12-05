import React from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='title text-white-100'> WHY OCEAN IS SO SALTY </h1>
      <nav>
      <a href="#">HOME</a>
      <a href="#">ABOUT</a>
      <a href="#">Files</a>
      <a href="#">CONTACT US</a>
    </nav>  
    </div>
  )
}

export default Navbar
