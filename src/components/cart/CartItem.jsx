import React from 'react';
import './CartItem.scss';

function CartItem({ item }) {
   return (
      <div className='cart'>
         <img src={item.imageUrl} alt='item' />
         <div className='details'>
            <span className='name'>{item.name}</span>
            <span className='price'>
               {item.quantity} x {item.price}€
            </span>
         </div>
      </div>
   );
}

export default CartItem;
