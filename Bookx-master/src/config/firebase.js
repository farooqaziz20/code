import firebase from 'firebase';
import 'firebase/storage'


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