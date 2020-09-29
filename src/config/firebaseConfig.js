import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDcFMbvXC-tw93DEWhGSSXMt2JZgDxTCF0",
  authDomain: "marioplan-53.firebaseapp.com",
  databaseURL: "https://marioplan-53.firebaseio.com",
  projectId: "marioplan-53",
  storageBucket: "marioplan-53.appspot.com",
  messagingSenderId: "363696731343",
  appId: "1:363696731343:web:533c9e026d0e39875e73ba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;