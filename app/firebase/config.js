// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN6HpPyBQdgcnrx14s4AlJKN_8BATmOEQ",
  authDomain: "proyecto-nextjs-roca.firebaseapp.com",
  projectId: "proyecto-nextjs-roca",
  storageBucket: "proyecto-nextjs-roca.appspot.com",
  messagingSenderId: "647017513936",
  appId: "1:647017513936:web:e125e17307ffb3dcd9afd5",
  measurementId: "G-05PB61J5LT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
