import React from 'react';
import {
   Styledbutton,
   StyledCheckout,
   StyledImage,
   StyledImageContainer,
   StyledName,
   StyledPrice,
   StyledQuantity,
} from './CheckoutItem.styled';

function CheckoutItem({ item, RemoveItem, IncrementQty, DecrementQty }) {
   return (
      <StyledCheckout>
         <StyledImageContainer>
            <StyledImage src={item.imageUrl} alt='img' />
         </StyledImageContainer>
         <StyledName> {item.name} </StyledName>
         <StyledQuantity>
            <Styledbutton onClick={() => DecrementQty(item)}>&#60;</Styledbutton>
            {item.quantity}
            <Styledbutton onClick={() => IncrementQty(item)}>&#62;</Styledbutton>
         </StyledQuantity>
         <StyledPrice>{item.price}€</StyledPrice>
         <Styledbutton onClick={() => RemoveItem(item)}>&#10005;</Styledbutton>
      </StyledCheckout>
   );
}

export default CheckoutItem;
