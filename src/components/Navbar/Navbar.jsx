import React from 'react';

import './Navbar.css'
import NavItem from './NavItem'

const Navbar = () => {
  return (
    <div className='flex justify-evenly gap-12 pt-8'>
    <NavItem title={"HoMe"} link={"/"} BoxClasses={"bg-[#C8FF15] p-5 text-5xl border-b-[50px] border-b-black absolute top-[200px] left-[50px] w-[200px]"}
     NavItemClasses={"text-[#77E2FF] absolute bottom-[-15px]"}/>  
    <NavItem title={"ABout"} link={"#about"} BoxClasses={"bg-[#3FB891] p-5 text-5xl absolute top-[140px] left-[200px]  w-[150px] h-[50px]"}
     NavItemClasses={"text-[#FF0000] absolute top-[-25px]"}/>  
    <NavItem title={"Quote"} link={"#quote"} BoxClasses={"bg-[#FF03A3] p-5 text-5xl border-[25px] border-black absolute top-[220px] left-[1000px]  w-[150px]"}
     NavItemClasses={"text-[#DF67A9]"}/>  
     <NavItem title={"COntACT us"} link={"#contactus"} BoxClasses={"bg-[#A09300] p-5 text-5xl border-[20px] border-black absolute top-[140px] left-[600px]   w-[300px] h-[80px]"}
     NavItemClasses={"text-[#DF67A9]"}/>  
    </div>
  )
}

export default Navbar
