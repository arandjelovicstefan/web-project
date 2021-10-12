import { Route, Switch } from 'react-router';
import React, { useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase/Firebase.utils';
import LoginRegister from './pages/Login-Register/Login-Register';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';
import Header from './components/header/Header';
import Shop from './pages/Shop/Shop';
import Home from './pages/Home/Home';
import './App.css';

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
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={Shop} />
            <Route exact path='/login' component={LoginRegister} />
         </Switch>
      </div>
   );
}

const mapDispatchToProps = dispatch => {
   return {
      setCurrentUser: user => dispatch(setCurrentUser(user)),
   };
};

export default connect(null, mapDispatchToProps)(App); //prvi argument je state, drugi dispatch !!
