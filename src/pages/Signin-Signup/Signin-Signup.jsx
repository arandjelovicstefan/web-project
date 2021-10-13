import React from 'react';
import Signin from '../../components/signin/Signin';
import Signup from '../../components/signup/Signup';
import './Signin-Signup.scss';

function SigninSignup() {
   return (
      <div className='signin-signup'>
         <Signin />
         <Signup />
      </div>
   );
}

export default SigninSignup;
