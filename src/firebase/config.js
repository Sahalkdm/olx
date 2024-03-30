import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyBhRapKcT5zgVHb97jqp6jmIlBmQgwNCxs",
    authDomain: "fir-e71ae.firebaseapp.com",
    projectId: "fir-e71ae",
    storageBucket: "fir-e71ae.appspot.com",
    messagingSenderId: "463496486700",
    appId: "1:463496486700:web:65bb7b10a6f2f5c7f55689",
    measurementId: "G-PC767WK828"
  };
  
  export default firebase.initializeApp(firebaseConfig)
  