import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from "../firebase/firebase.config";



export const AuthContext=createContext(null)

const auth = getAuth(app);
const AuthProvider = (({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    

     // user created
     const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    }
      // user update profile
      const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
              displayName:name,
              photoURL:photo
          });
      }
       //    user Signing in
      const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    // logout
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const authinfo={
        user,
        loading,
        // error,
        // isAuthenticated,
        createUser,
        signIn,
        updateUserProfile,
        logOut,
        // googleSignin
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;