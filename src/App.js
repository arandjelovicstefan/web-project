import { Route, Switch } from 'react-router';
import React, { useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase/Firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';
import Header from './components/header/Header';
import Shop from './pages/Shop/Shop';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import './App.scss';
import SigninSignup from './pages/Signin-Signup/Signin-Signup';
import Sale from './pages/Sale/Sale';
import Profile from './pages/Profile/Profile';
import Contact from './pages/Contact/Contact';
import AllSections from './components/all-sections/AllSections';

function App({ setCurrentUser }) {
   useEffect(() => {
      auth.onAuthStateChanged(user => {
         if (user) {
            createUserProfileDocument(user).then(response => {
               response.onSnapshot(snapShot => {
                  setCurrentUser({
                     id: snapShot.id,
                     ...snapShot.data(),
                  });
               });
            });
         }
         setCurrentUser(user);
      });
   }, [setCurrentUser]);

   return (
      <div>
         <Header />
         <Switch>
            <Route path='/' component={Home} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/signin' component={SigninSignup} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/sale' component={Sale} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/shop/:sections' component={AllSections} />
         </Switch>
         <Footer />
      </div>
   );
}

const mapDispatchToProps = dispatch => {
   return {
      setCurrentUser: user => dispatch(setCurrentUser(user)),
   };
};

export default connect(null, mapDispatchToProps)(App); //prvi argument je state, drugi dispatch !!
