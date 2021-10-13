import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import CartItem from './CartItem';
import './Dropdown.scss';

function Dropdown({ cartItems, setDropTrigger }) {
   const history = useHistory();
   return (
      <div className='dropdown'>
         <div className='cart-items'>{cartItems.length !== 0 ? cartItems.map(item => <CartItem key={item.id} item={item} />) : <div className='empty'>Add items to cart</div>}</div>
         <button onClick={() => history.push('/checkout') & setDropTrigger(false)}>CHECKOUT</button>
      </div>
   );
}

const mapStateToProps = state => {
   return {
      cartItems: state.cart.cartItems,
   };
};

export default connect(mapStateToProps)(Dropdown);
