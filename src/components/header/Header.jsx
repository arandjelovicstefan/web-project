import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSale } from '../../assets/sale-tag.svg';
import { ReactComponent as Cart } from '../../assets/cart-icon.svg';
import home from '../../assets/computer.png';
import './Header.scss';
import { auth } from '../../firebase/Firebase.utils';
import { connect } from 'react-redux';
import Dropdown from '../cart/Dropdown';

function Header({ currentUser, cartItems }) {
   const [dropTrigger, setDropTrigger] = useState(false);
   return (
      <div className='header'>
         <Link to='/'>
            <img src={home} alt='img' className='logo-home' />
         </Link>
         <span className='home-text'>TECH STORE</span>
         <div className='options'>
            <Link className='logo-sale' to='/sale'>
               <LogoSale />
            </Link>
            <Link className='option' to='/shop'>
               SHOP
            </Link>
            <Link className='option' to='/about'>
               ABOUT
            </Link>
            {currentUser ? (
               <div className='option' onClick={() => auth.signOut()}>
                  SIGN OUT
               </div>
            ) : (
               <Link className='option' to='/signin'>
                  SIGN IN
               </Link>
            )}
            <div className='logo-cart' onClick={() => setDropTrigger(!dropTrigger)}>
               <Cart className='icon' />
               <span className='counter'> {cartItems.reduce((a, b) => a + b.quantity, 0)} </span>
            </div>
         </div>
         {dropTrigger ? <Dropdown setDropTrigger={setDropTrigger} /> : null}
      </div>
   );
}

const mapStateToProps = state => {
   return {
      currentUser: state.user.currentUser,
      cartItems: state.cart.cartItems,
   };
};

export default connect(mapStateToProps)(Header);
