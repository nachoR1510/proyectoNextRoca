// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBN6HpPyBQdgcnrx14s4AlJKN_8BATmOEQ",
  authDomain: "proyecto-nextjs-roca.firebaseapp.com",
  projectId: "proyecto-nextjs-roca",
  storageBucket: "proyecto-nextjs-roca.appspot.com",
  messagingSenderId: "647017513936",
  appId: "1:647017513936:web:e125e17307ffb3dcd9afd5",
  measurementId: "G-05PB61J5LT",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, db, storage, auth, provider };
