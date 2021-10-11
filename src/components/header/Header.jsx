import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSale } from '../../assets/sale/sale-tag.svg';
import { ReactComponent as LogoHome } from '../../assets/home/home.svg';
import './Header.scss';
import { auth } from '../../firebase/Firebase.utils';

function Header({ user }) {
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
            {user ? (
               <div className='option' onClick={() => auth.signOut()}>
                  LOGOUT
               </div>
            ) : (
               <Link className='option' to='/login'>
                  LOGIN
               </Link>
            )}
         </div>
      </div>
   );
}

export default Header;
