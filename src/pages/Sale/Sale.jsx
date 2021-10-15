import React, { useEffect, useState } from 'react';
import { getAllShopItems } from '../../service';
import { nanoid } from 'nanoid';
import './Sale.scss';
import SectionItem from '../../components/section-item/SectionItem';

function Sale() {
   const [items, setItems] = useState([]);

   useEffect(() => {
      getAllShopItems().then(response => {
         response.data.map(group => group.items.filter(items => items.sale === true).map(item => setItems(prev => [...prev, item])));
      });
   }, []);

   return (
      <div>
         <h1 className='sale-h1'>Items on sale</h1>
         <div className='sale-items'>
            {items.map(item => (
               <SectionItem key={nanoid()} item={item} />
            ))}
         </div>
      </div>
   );
}

export default Sale;
