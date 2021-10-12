import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSale } from '../../assets/sale/sale-tag.svg';
import { ReactComponent as LogoHome } from '../../assets/home/home.svg';
import { ReactComponent as Cart } from '../../assets/shop/cart-icon.svg';
import './Header.scss';
import { auth } from '../../firebase/Firebase.utils';
import { connect } from 'react-redux';
import Dropdown from '../cart/Dropdown';

function Header({ currentUser }) {
   const [dropTrigger, setDropTrigger] = useState(false);
   return (
      <div className='header'>
         <Link to='/'>
            <LogoHome className='logo-home' />
         </Link>
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
                  LOGOUT
               </div>
            ) : (
               <Link className='option' to='/login'>
                  LOGIN
               </Link>
            )}
            <div className='logo-cart' onClick={() => setDropTrigger(!dropTrigger)}>
               <Cart className='icon' />
               <span className='counter'>0</span>
            </div>
         </div>
         {dropTrigger ? <Dropdown /> : null}
      </div>
   );
}

const mapStateToProps = state => {
   return {
      currentUser: state.user.currentUser,
   };
};

export default connect(mapStateToProps)(Header);
