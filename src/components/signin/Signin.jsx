import React, { useState } from 'react';
import { auth, signInWithGoogle } from '../../firebase/Firebase.utils';
import './Signin.scss';

function Signin() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [err, setErr] = useState(null);

   const handleSubmit = e => {
      e.preventDefault();
      auth
         .signInWithEmailAndPassword(email, password)
         .then(() => {
            setEmail('');
            setPassword('');
            setErr(null);
         })
         .catch(err => setErr(err.message));
   };

   return (
      <div className='sign-in'>
         <h2 className='title'>You already have an account?</h2>
         <span>Sign in with your email and password</span>

         <form onSubmit={handleSubmit}>
            <input className='input' type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='email' required />
            <input className='input' type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='password' required />
            <p className='error'> {err ? err : null} </p>
            <div className='buttons'>
               <button type='submit' className='loginBtn'>
                  Sign in
               </button>
               <div className='loginBtn googleBtn' onClick={signInWithGoogle}>
                  Sign in with Google
               </div>
            </div>
         </form>
      </div>
   );
}

export default Signin;
