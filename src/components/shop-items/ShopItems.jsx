import React from 'react';
import { useHistory } from 'react-router';
import ShopItem from '../shop-item/ShopItem';
import './ShopItems.scss';

function ShopItems({ title, items }) {
   const history = useHistory();
   return (
      <div className='group'>
         <h1 className='title' onClick={() => history.push(`/shop/${title}`)}>
            {title.toUpperCase()}
         </h1>
         <div className='items'>
            {items.slice(0, 5).map(item => {
               return <ShopItem key={item.id} item={item} />;
            })}
         </div>
      </div>
   );
}

export default ShopItems;
