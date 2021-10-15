import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { auth, signInWithGoogle } from '../../firebase/Firebase.utils';
import './Signin.scss';

function Signin({ currentUser }) {
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
            <input className='input' type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='email' />
            <input className='input' type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='password' />
            <p className='error'> {err ? err : null} </p>
            <div className='buttons'>
               <button type='submit' className='loginBtn'>
                  Sign in
               </button>
               <button className='loginBtn googleBtn' onClick={signInWithGoogle}>
                  Sign in with Google
               </button>
               {currentUser ? <Redirect to='/' /> : null}
            </div>
         </form>
      </div>
   );
}

const mapStateToProps = state => {
   return {
      currentUser: state.user.currentUser,
   };
};

export default connect(mapStateToProps)(Signin);
