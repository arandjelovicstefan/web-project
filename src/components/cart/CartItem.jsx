import React from 'react';
import { StyledCart, StyledDetail, StyledDetails, StyledImage } from './CartItem.styled';

function CartItem({ item }) {
   return (
      <StyledCart>
         <StyledImage src={item.imageUrl} alt='item' />
         <StyledDetails>
            <StyledDetail>{item.name}</StyledDetail>
            <StyledDetail>
               {item.quantity} x {item.price}€
            </StyledDetail>
         </StyledDetails>
      </StyledCart>
   );
}

export default CartItem;
