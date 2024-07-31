import React from 'react'
import Hero from '../Components/Hero/Hero';
import { Popular } from '../Components/Popular/Popular';
import Offer from '../Components/Offer/Offer';
import Newcollections from '../Components/Newcollections/Newcollections';
import Newsletter from '../Components/Newsletter/Newsletter';
import Footer from '../Components/Footer/Footer';

export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <Newcollections/>
        <Newsletter/>
    </div>
  )
}
export default Shop;