// import React from 'react'
// import './Cartitem.css'
// import removicon from '../Asscets/Assets/cart_cross_icon.png'
// import { useContext } from 'react'
// import { Shopcontext } from '../../Context/Shopcontext'
// export const Cartitem = () => {
//     const {all_product,cartItems,removeFromcart} =useContext(Shopcontext);
//   return (
//     <div className='cartitem'>
//         <div className="cartitems-format-main">
//  <p>Products</p>
//  <p>Title</p>
//  <p>Price</p>
//  <p>Quantity</p>
//  <p>Total</p>
//  <p>Remove</p>
//     </div>

//     {all_product.map((e)=>{
//     if(cartItems[e.id]>0){
//         <div>
//         <div className="cartitems-format">
//             <img src={e.image} alt="" className='carticon-product-icon'/>
//             <p>{e.name}</p>
//             <p></p>
//             <button className='cartitems-quantity'></button>
//             <p></p>
//            <img src={removicon}  alt="" onClick={()=>{removeFromcart()}} />
//         </div>
//     </div>
    
//     }

// })
    
//     }
//     </div>
    
//   )
// }

// export default Cartitem;
import React from 'react';
import './Cartitem.css';
import removicon from '../Asscets/Assets/cart_cross_icon.png';
import { useContext } from 'react';
import { Shopcontext } from '../../Context/Shopcontext';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

export const Cartitem = () => {
  const { all_product, cartItems, removeFromcart } = useContext(Shopcontext);

  return (
    <div className='cartitem'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      {Object.keys(cartItems).map((itemId) => {
        const item = all_product.find((product) => product.id === parseInt(itemId));
        console.log(itemId);
          
        console.log('item:', item);
    console.log('item.price:', item.price);
    console.log('cartItems[itemId]:', cartItems[itemId]);
    console.log('item.price * cartItems[itemId]:', item.price * cartItems[itemId]);

        if (item) {
          return (
            <div key={itemId} className="cartitems-format">
               <img src={item.image} alt="" className='carticon-product-icon'/>
              <p>{item.name}</p>
          
              <p>{item.new_price}</p>
         
              <button className='cartitems-quantity'>{cartItems[itemId]}</button>
              <p>{item.new_price * cartItems[itemId]}</p>
              <img src={removicon} alt="" onClick={() => removeFromcart(itemId)} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Cartitem;