import React from 'react';
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Lines from './components/Lins'
import About from './components/About'
import Quote from './components/Quote'
import Form from './components/Form'



export default function Chaos() {
  return (
    <>
    <div className='h-96'>
      <Navbar/>
    </div>
    <div className='grid justify-center items-center text-center'>
      <h1 className='text-8xl text-[#FF2626] col-start-1 row-start-1'>The Ocean and Us: More Connected Than We Realize</h1>
      <h1 className='text-8xl text-[#26FF79] col-start-1 row-start-1 lg:translate-x-[-0.8rem] translate-x-[-0.2rem]'>The Ocean and Us: More Connected Than We Realize</h1>
      <h1 className='text-8xl text-[#262aff] col-start-1 row-start-1 lg:translate-x-[0.8rem] translate-x-[-0.2rem]'>The Ocean and Us: More Connected Than We Realize</h1>
      <img src="./../assets/p1.png" alt=""  className='w-full h-auto -mt-8'/>
    </div>
    <Lines/>
    <About/>
      <img src="./../assets/p2.png" alt=""  className='w-full h-auto -mt-8'/>
    <Quote/>
      <img src="./../assets/p3.png" alt=""  className='w-full h-auto -mt-8'/>
    <Form/>
      <img src="./../assets/p4.png" alt=""  className='w-full h-auto -mt-8'/>
     <div id='contactus' className='text-center text-[5px]'>Bad@ui.world</div> 
    </>
  )
}

