"use client";

import { createContext, useEffect, useState, type ReactNode } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  type User,
  type UserCredential,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublick from "../Hooks/useAxiosPublick";

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  updateUserProfile: (name: string, photo: string) => Promise<void>;
  logOut: () => Promise<void>;
  googleSignin: () => Promise<UserCredential>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const auth = getAuth(app);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublick();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [axiosPublic]);

  // Log in with Google
  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // user created
  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user signing in
  const signIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user update profile
  const updateUserProfile = (name: string, photo: string) => {
    if (!auth.currentUser) return Promise.resolve();
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // user signing out
  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  const authinfo: AuthContextType = {
    user,
    loading,
    createUser,
    signIn,
    updateUserProfile,
    logOut,
    googleSignin,
  };

  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
