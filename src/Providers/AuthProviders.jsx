import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext(null);
import {
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase";

import { GoogleAuthProvider } from "firebase/auth";

const AuthProviders = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const googleSignIn = () => {
    // setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubSingIn = () => {
    // setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    // setLoading(true);
    return signOut(auth);
  };
  const GetProfile = (u, n, p) => {
    updateProfile(u, {
      displayName: n,
      photoURL: p,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("On State Change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    googleSignIn,
    githubSingIn,
    createUser,
    userLogin,
    logOut,
    GetProfile,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
