import React from 'react'
import women from '../../image/hero3.png'
import LocationBox from '../LocationBox/LocationBox'
import '../Hero/Hero.css'

const Hero = () => {
  return (
    <section className='PleasingBeauty'>
    <div className='left-div'>
      <h2>Make your look even <span>More Perfect</span> with your favourite beautician</h2>
      {/* <h3>You are just one step away !</h3> */}
     <LocationBox/>
    </div>
    <div className="right-div">
      <img src={women} alt="" />
    </div>
  </section>
  )
}

export default Hero