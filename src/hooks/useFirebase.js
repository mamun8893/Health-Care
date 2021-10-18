import React, { useEffect, useState } from "react";
import swal from "sweetalert";

import initializeAuth from "../firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

initializeAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
  }, []);

  const handleSignup = (email, password, name) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          swal("Good Job!", "Accoutn Has Been Created", "success");
        });
      })
      .catch((error) => {
        swal("Something went wrong!", `${error.message}`, "error");
      })
      .finally(() => setIsloading(false));
  };
  const handleSignin = (email, password) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        swal("Good Job!", "Login Successfully", "success");
      })
      .catch((error) => {
        swal("Something went wrong!", `${error.message}`, "error");
      })
      .finally(() => setIsloading(false));
  };

  const handleGoogleSignin = () => {
    setIsloading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        swal("Good Job!", "Login Successfully", "success");
      })
      .catch((error) => {
        swal("Something went wrong!", `${error.message}`, "error");
      })
      .finally(() => setIsloading(false));
  };

  const handleLogout = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsloading(false));
  };

  return {
    handleSignin,
    handleSignup,
    handleGoogleSignin,
    handleLogout,
    user,
    error,
    isLoading,
  };
};

export default useFirebase;
