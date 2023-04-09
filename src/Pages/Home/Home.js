import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'
import WhyUs from '../../Components/WhyUs/WhyUs'
const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <WhyUs/>
        <Footer/>
    </>
  )
}

export default Home