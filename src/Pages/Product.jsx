import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import Productdisplay from '../Components/Productdisplay/Productdisplay';

const Product = () => {
    const {all_product}= useContext(Shopcontext);
   
    const {productid}=useParams();
    console.log('productid',typeof productid);
    const product=all_product.find((e)=>e.id===Number(productid))
    console.log('product',product);
  return (
    <div>
   <Breadcrums product={product}/>
   <Productdisplay product={product}/>
    </div>
  )
}

export default Product
