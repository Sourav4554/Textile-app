import React from 'react';
import './Hero.css';
import hand_icon from '../Asscets/Assets/hand_icon.png';
import arow_icon from '../Asscets/Assets/arrow.png';
import hero_image from '../Asscets/Assets/hero_image.png';
export const Hero = () => {
  return (
    <div className='hero'>
         <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
    
    <div className="hero-hand-icon">
        <p>new</p>
        <img src={hand_icon} alt="" />
    </div>
    <p>Collections</p>
    <p>for everyone</p>
    
    <div className="hero-latest-btn">
    <div>Latest collection</div>
    <img src={arow_icon} alt="" />
    </div>
  </div>
    <div className="hero-right">
    <img src={hero_image} alt="" />
    </div>
    </div>
  )
}
export default Hero;