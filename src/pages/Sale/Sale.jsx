import React, { useEffect, useState } from 'react';
import { getAllShopItems } from '../../service';
import { nanoid } from 'nanoid';
import './Sale.scss';
import SectionItem from '../../components/section-item/SectionItem';

function Sale() {
   const [items, setItems] = useState([]);
   const [searchInput, setSearchInput] = useState('');

   useEffect(() => {
      getAllShopItems().then(response => {
         response.data.map(group =>
            group.items.filter(items => items.sale === true).map(item => setItems(prev => [...prev, item]))
         );
      });
   }, []);

   return (
      <div>
         <h1 className='sale-h1'>Items on sale</h1>
         <input
            className='sale-input'
            type='search'
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            placeholder='search'
         />
         <div className='sale-items'>
            {items
               .filter(item => item.name.toLowerCase().includes(searchInput))
               .map(item => (
                  <SectionItem key={nanoid()} item={item} />
               ))}
         </div>
      </div>
   );
}

export default Sale;
