import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase.init";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  const CreateUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LoginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const upDateUser = (displayName, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoUrl,
    });
  };

  const signInGoogle = () => {
    setLoader(true)
    return signInWithPopup(auth, provider);
  };

  const logOutUser = () => {
    setLoader(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // get token and store to local storage
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoader(false);
          }
        });
      } else {
        setUser(null); 
        setLoader(true);
        localStorage.removeItem('access-token')
      }
    });

    return () => {
      unSubcribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    CreateUser,
    loader,
    LoginUser,
    user,
    upDateUser,
    logOutUser,
    signInGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
