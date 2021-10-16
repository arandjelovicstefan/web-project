import React from 'react';
import { useHistory } from 'react-router';
import ShopItem from '../shop-item/ShopItem';
import { StyledGroup, StyledItems, StyledTitle } from './ShopItems.styled';

function ShopItems({ title, items }) {
   const history = useHistory();
   return (
      <StyledGroup>
         <StyledTitle onClick={() => history.push(`/shop/${title}`)}>{title.toUpperCase()}</StyledTitle>
         <StyledItems>
            {items.slice(0, 5).map(item => {
               return <ShopItem key={item.id} item={item} />;
            })}
         </StyledItems>
      </StyledGroup>
   );
}

export default ShopItems;
