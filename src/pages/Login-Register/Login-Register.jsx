import React from 'react';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';
import './Login-Register.scss';

function LoginRegister() {
   return (
      <div className='login-register'>
         <Login />
         <Register />
      </div>
   );
}

export default LoginRegister;
