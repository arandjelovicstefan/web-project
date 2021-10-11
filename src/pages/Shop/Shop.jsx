import React, { useEffect, useState } from 'react';
import ShopItems from '../../components/shop-items/ShopItems';
import { getAllShopItems } from '../../service';

function Shop() {
   const [items, setItems] = useState([]);

   useEffect(() => {
      getAllShopItems().then(response => {
         setItems(response.data);
      });
   }, []);
   return (
      <div>
         {items.map(item => {
            return <ShopItems key={item.id} title={item.title} items={item.items} />;
         })}
      </div>
   );
}

export default Shop;
