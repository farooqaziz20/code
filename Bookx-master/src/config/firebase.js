import firebase from 'firebase';
import 'firebase/storage'




// var firebaseConfig = {
//   apiKey: "AIzaSyDQXGM-DhS4kdjlT9rcafXMrKvEhfmvJDI",
//   authDomain: "bookx-fyp.firebaseapp.com",
//   projectId: "bookx-fyp",
//   storageBucket: "bookx-fyp.appspot.com",
//   messagingSenderId: "275074606985",
//   appId: "1:275074606985:web:c7fde122d6df036277a358",
//   measurementId: "G-YT18WXKWVG"
// };

var firebaseConfig = {
    apiKey: "AIzaSyD0tiKEIYWNGTl4wIdQuxC1YgscPIsWnR0",
    authDomain: "smtp-firebase-reactjs-learning.firebaseapp.com",
    projectId: "smtp-firebase-reactjs-learning",
    storageBucket: "smtp-firebase-reactjs-learning.appspot.com",
    messagingSenderId: "133252675320",
    appId: "1:133252675320:web:8ae638f07092b85d49ad0d",
    measurementId: "G-HRV7PSRPYS"
  };

  // Initialize Firebase
  export const app=firebase.initializeApp(firebaseConfig);
  export const db=firebase.firestore();



//   export const db=firebase.firestore();
//   export const storage=firebase.storage();


//   export default firebase;