import React, { useState } from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { DecrementQty, IncrementQty, RemoveAllItems, RemoveItem } from '../../redux/cart/Cart.actions';
import './Checkout.scss';

function Checkout({ cartItems, RemoveItem, currentUser, RemoveAllItems, IncrementQty, DecrementQty }) {
   const [orderInfo, setOrderInfo] = useState(null);
   return (
      <div className='page'>
         <span className='title'>shopping details</span>
         <div className='header'>
            <div className='first'>
               <span>Product</span>
            </div>
            <div className='first'>
               <span>Description</span>
            </div>
            <div className='third'>
               <span>Quantity</span>
            </div>
            <div className='third'>
               <span>Price</span>
            </div>
            <div className='last'>
               <span>Remove</span>
            </div>
         </div>
         {cartItems.map(item => (
            <CheckoutItem key={item.id} item={item} RemoveItem={RemoveItem} IncrementQty={IncrementQty} DecrementQty={DecrementQty} />
         ))}
         <p className={currentUser ? 'infoMsg' : ''}> {orderInfo} </p>
         <div className='total'>
            <span>Total: {cartItems.reduce((a, b) => a + b.quantity * b.price, 0)} €</span>
         </div>
         <button
            className='orderBtn'
            onClick={() => {
               if (cartItems.length === 0) {
                  return setOrderInfo('Add items to cart!');
               } else {
                  return currentUser ? setOrderInfo('Order successfully placed!') & RemoveAllItems() : setOrderInfo('You need to be Signed in to order items!');
               }
            }}
         >
            ORDER
         </button>
      </div>
   );
}

const mapStateToProps = state => {
   return {
      cartItems: state.cart.cartItems,
      currentUser: state.user.currentUser,
   };
};

const mapDispatchToProps = dispatch => {
   return {
      RemoveItem: item => dispatch(RemoveItem(item)),
      RemoveAllItems: () => dispatch(RemoveAllItems()),
      IncrementQty: item => dispatch(IncrementQty(item)),
      DecrementQty: item => dispatch(DecrementQty(item)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
