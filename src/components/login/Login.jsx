import React, { useState } from 'react';
import { auth, signInWithGoogle } from '../../firebase/Firebase.utils';
import './Login.scss';

function Login() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = e => {
      e.preventDefault();
      auth
         .signInWithEmailAndPassword(email, password)
         .then(() => {
            setEmail('');
            setPassword('');
         })
         .catch(err => console.log(err));
   };

   return (
      <div className='sign-in'>
         <h2 className='title'>You already have an account?</h2>
         <span>Sign in with your email and password</span>

         <form onSubmit={handleSubmit}>
            <input
               className='input'
               type='email'
               name='email'
               value={email}
               onChange={e => {
                  setEmail(e.target.value);
               }}
               placeholder='email'
               required
            />
            <input
               className='input'
               type='password'
               name='password'
               value={password}
               onChange={e => {
                  setPassword(e.target.value);
               }}
               placeholder='password'
               required
            />
            <div className='buttons'>
               <button type='submit' className='loginBtn'>
                  Login
               </button>
               <button className='loginBtn googleBtn' onClick={signInWithGoogle}>
                  Login with Google
               </button>
            </div>
         </form>
      </div>
   );
}

export default Login;
