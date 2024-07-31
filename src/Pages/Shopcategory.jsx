// import React, { useContext } from 'react';
//import { Shopcontext } from '../Context/Shopcontext';
import { useContext } from 'react';
import dropdown_icon from '../Components/Asscets/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import { Shopcontext } from '../Context/Shopcontext';
import './CSS/Shopcategory.css'
export const Shopcategory = (props) => {
  const { all_product } =useContext(Shopcontext);
  // Filter products based on category
  const filteredProducts = all_product.filter(item => item.category === props.category);

  return (
     <div className='shopcategory'>
       <img src={props.banner} alt="" />
       <div className="shopcategory-indexsort">
         <p>
           <span>Showing 1-12</span> out of {filteredProducts.length} products
         </p>
         <div className="shopcategory-sort">
         Sort by <img src={dropdown_icon} alt="" />
         </div>
       </div>
       <div className="shopcategory-products">
        {filteredProducts.map((item, i) => (
      
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div> 
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default Shopcategory;
