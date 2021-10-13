import React from 'react';
import './CheckoutItem.scss';

function CheckoutItem({ item, RemoveItem }) {
   return (
      <div className='checkout-item'>
         <div className='image-container'>
            <img src={item.imageUrl} alt='img' />
         </div>
         <span className='name'> {item.name} </span>
         <span className='quantity'>{item.quantity}</span>
         <span className='price'>{item.price}€</span>
         <div className='remove-button' onClick={() => RemoveItem(item)}>
            &#10005;
         </div>
      </div>
   );
}

export default CheckoutItem;
