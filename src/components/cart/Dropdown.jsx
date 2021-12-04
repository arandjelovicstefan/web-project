import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import CartItem from './CartItem';
import { StyledButton, StyledCartItems, StyledDropdown, StyledEmptyCart } from './Dropdown.styled';

function Dropdown({ cartItems, setDropTrigger }) {
   const history = useHistory();
   return (
      <StyledDropdown>
         <StyledCartItems>
            {cartItems.length !== 0 ? (
               cartItems.map(item => <CartItem key={item.id} item={item} />)
            ) : (
               <StyledEmptyCart>Add items to cart</StyledEmptyCart>
            )}
         </StyledCartItems>
         <StyledButton onClick={() => history.push('/checkout') & setDropTrigger(false)}>CHECKOUT</StyledButton>
      </StyledDropdown>
   );
}

const mapStateToProps = state => {
   return {
      cartItems: state.cart.cartItems,
   };
};

export default connect(mapStateToProps)(Dropdown);
