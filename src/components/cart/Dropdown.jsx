import React from 'react';
import { connect } from 'react-redux';
import './Dropdown.scss';

function Dropdown({ cartItems }) {
   return (
      <div className='dropdown'>
         <div className='cart-items'>{cartItems.map(item => console.log(item))}</div>
         <button>CHECKOUT</button>
      </div>
   );
}

const mapStateToProps = state => {
   return {
      cartItems: state.cart.cartItems,
   };
};

export default connect(mapStateToProps)(Dropdown);
