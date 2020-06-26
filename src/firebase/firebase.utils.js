// set up firebase utility methods
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBpNoRv-PFwjPLt_zcz_fLSaq8x0rIQyXY",
  authDomain: "e-commerce-app-92e5f.firebaseapp.com",
  databaseURL: "https://e-commerce-app-92e5f.firebaseio.com",
  projectId: "e-commerce-app-92e5f",
  storageBucket: "e-commerce-app-92e5f.appspot.com",
  messagingSenderId: "358498045236",
  appId: "1:358498045236:web:e8cb55cda6c7f457f3a961",
  measurementId: "G-YKL0MS5GCY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
