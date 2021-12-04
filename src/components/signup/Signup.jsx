import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { auth, createUserProfileDocument } from '../../firebase/Firebase.utils';
import './Signup.scss';

function Signup({ currentUser }) {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [err, setErr] = useState(null);

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
         })
         .catch(err => setErr(err.message));
   };

   return (
      <div className='sign-up'>
         <h2 className='title'>Don't have an account yet?</h2>
         <span>Sign up with your email and password</span>
         <form onSubmit={handleSubmit}>
            <input
               className='input'
               type='email'
               placeholder='email'
               value={email}
               onChange={e => setEmail(e.target.value)}
               required
            />
            <input
               className='input'
               type='password'
               placeholder='password'
               value={password}
               onChange={e => setPassword(e.target.value)}
               required
            />
            <input
               className='input'
               type='password'
               placeholder='confirm password'
               value={confirmPassword}
               onChange={e => setConfirmPassword(e.target.value)}
               required
            />
            <p className='error'> {err ? err : null} </p>
            <button className='button' type='submit'>
               Sign up
            </button>
         </form>
         {currentUser ? <Redirect to='/' /> : null}
      </div>
   );
}

const mapStateToProps = state => {
   return {
      currentUser: state.user.currentUser,
   };
};

export default connect(mapStateToProps)(Signup);
