import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
   return (
      <footer className='footer-bottom'>
         <span className='component'>
            Don't have an account yet?{' '}
            <Link to='/signin' className='signupBtn'>
               Sign up
            </Link>
         </span>
         <div className='component'>©2021 TECH STORE</div>
         <p className='credit'>final it bootcamp project done by stefan arandjelovic</p>
      </footer>
   );
}

export default Footer;
