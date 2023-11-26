/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublick from "../Hooks/useAxiosPublick";


export const AuthContext=createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const googleProvider= new GoogleAuthProvider();
    const axiosPublic=useAxiosPublick();

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,curretnUser=>{
            setUser(curretnUser)
            console.log(curretnUser);
            // if (curretnUser) {
            //     console.log('get token');
            //     const userInfo={
            //         email: curretnUser.email
            //     }
            //     axiosPublic.post('/jwt', userInfo)
            //     .then(res=>{
            //         if (res.data.token) {
            //            localStorage.setItem('access-token', res.data.token); 
            //         }
            //     })
            // }
            // else{
            // console.log('remove token');
            // localStorage.removeItem('access-token');
            // }
            setLoading(false)
        })
        return()=>{
            return unsubscribe();
        }
    },[axiosPublic])
    
    //Log in with Google
    const googleSignin=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

     // user created
    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    }
    //    user Signing in
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    // user update profile
    const updateUserProfile=(name,photo)=>{
      return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        });
    }

    // User Signing out
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const authinfo={
        user,
        loading,
        createUser,
        signIn,
        updateUserProfile,
        logOut,
        googleSignin
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;