import { useState,useEffect } from "react";
import {  getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({});
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
        
 }

   const loginWithEmailAndPassword=(email,password)=>{
    //    console.log(email,password)
    return signInWithEmailAndPassword(auth,email,password);
   }

   const createAccount = (email,password) => {
      
        return createUserWithEmailAndPassword(auth,email,password)

     
    }

    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName:name
          })
          .then(() =>{
              window.location.reload();
          })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => { setIsLoading(false) });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setUser(user);
              // ...
            } else {
              // User is signed out
              setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    }, [auth])

    return {
        user,
        auth,
        isLoading,
        createAccount,
        signInWithGoogle,
        loginWithEmailAndPassword,
        updateName,
        logOut

    }
}

export default useFirebase;