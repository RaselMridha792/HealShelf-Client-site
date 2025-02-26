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
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();
  const [changeColor, setChangeColor] = useState(true)

  const CreateUser = (email, password) => {
    setLoading(true)
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LoginUser = (email, password) => {
    setLoader(true);
    setLoading(true)
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
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const logOutUser = () => {
    setLoader(true)
    setLoading(true)
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
            setLoading(false)
          }
        });
      } else {
        setUser(null); 
        setLoader(true);
        setLoading(true)
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
    loading,
    changeColor,
    setChangeColor
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
