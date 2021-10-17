import React, { useEffect, useState } from "react";
import swal from "sweetalert";

import initializeAuth from "../firebase/firebase.init";
import {
  getAuth,
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
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  const handleSignup = (email, password, name) => {
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
        switch (error.code) {
          case "auth/email-already-in-use":
            setError("Email Alredy Used");
            break;
          default:
        }
      });
  };
  const handleSignin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      setUser(user);
      swal("Good Job!", "Login Successfully", "success");
    });
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return { handleSignin, handleSignup, handleLogout, user, error };
};

export default useFirebase;
