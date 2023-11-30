import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from "firebase/auth"
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };
  const updatePass = (newPassword) => {
    return updatePassword(auth.currentUser, newPassword);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
          setUser(auth.currentUser);
          const userInfo = { email: auth.currentUser?.email };
          axiosPublic.post('/jwt',userInfo)
              .then(res => {
                  if (res.data?.token) {
                      localStorage.setItem("access-token", res.data.token);
              }
            })
        setLoading(false);
      } else {
          setUser(null);
          localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, [axiosPublic, user?.email]);

  const AuthInfo = {
    user,
    setUser,
    loading,
    googleLogin,
    signUp,
    auth,
    updateUser,
    updatePass,
    loginUser,
    logOut,
    setLoading,
  };
  return (
    <>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}