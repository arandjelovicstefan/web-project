import React from 'react';
import { connect } from 'react-redux';
import './Profile.scss';

function Profile({ currentUser }) {
   const handleSubmit = e => {
      e.preventDefault();
   };
   return currentUser ? (
      <div className='profile-page'>
         {/* <h1 style={{ fontSize: '30px', textAlign: 'center' }}>PAGE STILL IN DEVELOPMENT ! </h1> */}
         <div className='profile-options'>
            <button className='profile-option'>Address</button>
            <button className='profile-option'>Orders</button>
         </div>
         <div className='profile-form'>
            <form onSubmit={handleSubmit}>
               <h2>Address Info</h2>
               <input className='input-profile' type='text' placeholder='Name' />
               <input className='input-profile' type='text' placeholder='Surname' />
               <input className='input-profile' type='text' placeholder='Address' />
               <input className='input-profile' type='number' placeholder='Post code' />
               <input className='input-profile' type='tel' placeholder='Phone number' />
               <input className='input-profile' type='text' placeholder='City' />
               <input className='input-profile' type='text' placeholder='Country' />
               <input type='submit' value='SAVE' className='submit-profile' />
            </form>
         </div>
      </div>
   ) : null;
}

const mapStateToProps = state => {
   return {
      currentUser: state.user.currentUser,
   };
};

export default connect(mapStateToProps)(Profile);
