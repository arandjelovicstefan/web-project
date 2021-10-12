import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: 'AIzaSyAXZXkma3pHs5OoQz9Iqlx_vUp4QGddU5s',
   authDomain: 'login-test-65c5d.firebaseapp.com',
   projectId: 'login-test-65c5d',
   storageBucket: 'login-test-65c5d.appspot.com',
   messagingSenderId: '237418089165',
   appId: '1:237418089165:web:d68f7cc3e601c9ccd1b784',
};

export const createUserProfileDocument = async user => {
   if (!user) return;

   const userRef = firestore.doc(`users/${user.uid}`);
   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { email } = user;
      const createdAt = new Date();

      try {
         await userRef.set({
            email,
            createdAt,
         });
      } catch (error) {
         console.log('error creating user', error.message);
      }
   }
   return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
