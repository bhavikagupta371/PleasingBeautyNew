import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './ParlourList.css'
import { useParams } from 'react-router-dom'
import List from './List'
import Footer from '../Footer/Footer'

const ParlourList = () => {
  
    const { city } = useParams()
    
  return (
    <>
    <Navbar/>
    <div className='ParlourHeaderWrap'>
    <div className='ParlourHeader'>
    <i class="fa-sharp fa-solid fa-location-dot"></i>
        <h2>
            {city}
        </h2>
    </div>
    </div>
    <List />
    <Footer/>
    </>
  )
}

export default ParlourList