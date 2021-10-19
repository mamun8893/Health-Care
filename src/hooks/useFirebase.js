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
  const [isLoading, setIsloading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  // Email Password Signup

  const handleSignup = (email, password, name) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          swal("Good Job!", "Accoutn Has Been Created", "success").then(
            function () {
              window.location.reload(true);
            }
          );
        });
      })
      .catch((error) => {
        swal("Something went wrong!", `${error.message}`, "error");
      })
      .finally(() => setIsloading(false));
  };

  // Email Password Signin

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

  // Google Signin

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

  //Auth State Change

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
  }, []);

  // Signout

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

    isLoading,
  };
};

export default useFirebase;
