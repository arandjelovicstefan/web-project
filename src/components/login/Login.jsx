import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { auth, signInWithGoogle } from '../../firebase/Firebase.utils';
import './Login.scss';

function Login() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [err, setErr] = useState(null);
   const [redirect, setRedirect] = useState(false);

   const handleSubmit = e => {
      e.preventDefault();
      auth
         .signInWithEmailAndPassword(email, password)
         .then(() => {
            setEmail('');
            setPassword('');
            setErr(null);
            setRedirect(true);
         })
         .catch(err => setErr(err.message));
   };

   return (
      <div className='sign-in'>
         <h2 className='title'>You already have an account?</h2>
         <span>Login with your email and password</span>

         <form onSubmit={handleSubmit}>
            <input className='input' type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='email' required />
            <input className='input' type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='password' required />
            <p className='error'> {err ? err : null} </p>
            <div className='buttons'>
               <button type='submit' className='loginBtn'>
                  Login
               </button>
               <button className='loginBtn googleBtn' onClick={signInWithGoogle}>
                  Login with Google
               </button>
               {redirect ? <Redirect to='/' /> : null}
            </div>
         </form>
      </div>
   );
}

export default Login;
