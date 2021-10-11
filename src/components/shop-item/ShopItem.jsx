import React from 'react';
import './ShopItem.scss';
import { ReactComponent as ShopLogo } from '../../assets/shop/shop.svg';

function ShopItem({ item }) {
   return (
      <div className='item'>
         <div className='image' style={{ backgroundImage: `url(${item.imageUrl})` }} />
         <div className='footer'>
            <span className='name'> {item.name} </span>
            <span className='price'> {item.price} </span>
         </div>
         <ShopLogo className='logo' />
      </div>
   );
}

export default ShopItem;
