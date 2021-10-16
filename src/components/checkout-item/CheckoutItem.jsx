import React from 'react';
import { Styledbutton, StyledCheckout, StyledImage, StyledImageContainer, StyledName, StyledPrice, StyledQuantity } from './CheckoutItem.styled';

function CheckoutItem({ item, RemoveItem }) {
   return (
      <StyledCheckout>
         <StyledImageContainer>
            <StyledImage src={item.imageUrl} alt='img' />
         </StyledImageContainer>
         <StyledName> {item.name} </StyledName>
         <StyledQuantity>{item.quantity}</StyledQuantity>
         <StyledPrice>{item.price}€</StyledPrice>
         <Styledbutton onClick={() => RemoveItem(item)}>&#10005;</Styledbutton>
      </StyledCheckout>
   );
}

export default CheckoutItem;
