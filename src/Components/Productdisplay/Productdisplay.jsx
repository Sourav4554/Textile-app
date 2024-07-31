import React, { useContext } from 'react'
import './productdisplay.css'
import staricon from '../Asscets/Assets/star_icon.png';
import star_dull_icon from '../Asscets/Assets/star_dull_icon.png';
import { Shopcontext } from '../../Context/Shopcontext';
const Productdisplay = ({product}) => {
    // const product=props;
    const {addTocart}=useContext(Shopcontext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                 <img src={product.image} alt="" /> 
            </div>
            <div className="product-display-img">
              <img className ='productdisplay-main-img'src={product.image} alt="" />

            </div>
        </div>
        <div className="product-display-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-stars">
            <img src={staricon} alt="" />
            <img src={staricon} alt="" />
            <img src={staricon} alt="" />
            <img src={staricon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>{122}</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-old">${product.old_price}</div>
            <div className="productdisplay-price-new">${product.new_price}</div>
          </div>
          <div className="productdisplay-right-description">
           {product.name}
          </div>
          <div className="productdisplay-right-size">
            {/* <h1>Select size</h1> */}
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        <button  onClick={() => addTocart(product.id)}>Add Cart</button>
        </div>
    </div>
  )
      }
export default Productdisplay;