import { Route, Switch } from 'react-router';
import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import './App.css';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import LoginRegister from './pages/Login-Register/Login-Register';
import { auth, createUserProfileDocument } from './firebase/Firebase.utils';

function App() {
   const [user, setUser] = useState('');

   useEffect(() => {
      auth.onAuthStateChanged(async user => {
         if (user) {
            const userRef = await createUserProfileDocument(user);
            console.log(userRef);
            userRef.onSnapshot(snapShot => {
               console.log(snapShot);
               setUser({
                  id: snapShot.id,
                  ...snapShot.data(),
               });
            });
         }
         setUser(user);
      });

      return () => {
         setUser(null);
      };
   }, []);

   return (
      <div>
         <Header user={user} />
         <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={Shop} />
            <Route exact path='/login' component={LoginRegister} />
         </Switch>
      </div>
   );
}

export default App;
