import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { auth, createUserProfileDocument } from '../../firebase/Firebase.utils';
import './Register.scss';

function Register() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [err, setErr] = useState(null);
   const [redirect, setRedirect] = useState(false);

   const handleSubmit = e => {
      e.preventDefault();

      if (password !== confirmPassword) {
         setErr('Passwords dont match!');
         return;
      }

      auth
         .createUserWithEmailAndPassword(email, password)
         .then(response => {
            createUserProfileDocument(response.user);
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setErr(null);
            setRedirect(true);
         })
         .catch(err => setErr(err.message));
   };

   return (
      <div className='sign-up'>
         <h2 className='title'>You do not have a account yet?</h2>
         <span>Register with your email and password</span>
         <form onSubmit={handleSubmit}>
            <input className='input' type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} required />
            <input className='input' type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required />
            <input className='input' type='password' placeholder='confirm password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
            <p className='error'> {err ? err : null} </p>
            <button className='button' type='submit'>
               REGISTER
            </button>
         </form>
         {redirect ? <Redirect to='/' /> : null}
      </div>
   );
}

export default Register;
