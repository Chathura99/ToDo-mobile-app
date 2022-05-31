import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN5AX0cstk2pRYbvW4ngucH0gDhY0bkik",
  authDomain: "todolist-4c881.firebaseapp.com",
  projectId: "todolist-4c881",
  storageBucket: "todolist-4c881.appspot.com",
  messagingSenderId: "604532150303",
  appId: "1:604532150303:web:495dfc64bbe1170f3ec52a",
  measurementId: "G-0JQNSK734X",
};

// Initialize Firebase
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};