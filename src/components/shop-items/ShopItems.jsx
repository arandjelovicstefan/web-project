import React from 'react';
import ShopItem from '../shop-item/ShopItem';
import './ShopItems.scss';

function ShopItems({ title, items }) {
   return (
      <div className='group'>
         <h1 className='title'>{title.toUpperCase()}</h1>
         <div className='items'>
            {items.map(item => {
               return <ShopItem key={item.id} item={item} />;
            })}
         </div>
      </div>
   );
}

export default ShopItems;
