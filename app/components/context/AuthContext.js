"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "@/app/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ logged: false, email: null, uid: null });

  const registerUser = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;

      setUser({
        logged: true,
        email: user.email,
        uid: user.uid,
      });
    } catch (error) {}
  };

  const loginUser = async (values) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );

    const user = userCredential.user;

    setUser({
      logged: true,
      email: user.email,
      uid: user.uid,
    });
  };

  const logout = async () => {
    await signOut(auth);

    setUser({
      logged: false,
      email: null,
      uid: null,
    });
  };

  const googleLogin = async () => {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    setUser({
      logged: true,
      email: user.email,
      uid: user.uid,
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, registerUser, loginUser, logout, googleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
