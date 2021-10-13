import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
   return (
      <footer className='footer-bottom'>
         <span className='component'>
            Don't have an account yet?{' '}
            <Link to='/signin' className='btn'>
               Sign up
            </Link>
         </span>
         <div className='component'>© 2021 Copyright TECH STORE</div>
      </footer>
   );
}

export default Footer;
