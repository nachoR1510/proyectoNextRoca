"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "@/app/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ logged: false, email: null, uid: null });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          logged: true,
          email: firebaseUser.email,
          uid: firebaseUser.uid,
        });
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const registerUser = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  const loginUser = async (values) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      setUser({
        logged: true,
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      });
    } catch (error) {
      throw new Error("Correo o contraseña incorrectos."); // Lanzar error para capturarlo en LoginForm
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, registerUser, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
