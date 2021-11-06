import initializeFirebase from "../Login/Firebaase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  //email registration
  const emailRegistration = (email, password, name, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name
          
        })
          .then(() => {

          })
          .catch((error) => {

          });
        history.replace("/home");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // login with email
  const emailLogIn = (email, password, location, history) => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location.state.from || "/home";
        history.replace(destination);

        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };
  //sign in with google

  const signInUsingGoogle = (location, history) => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setError("");
        const user = result.user;
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  //logout
  const logOut = () => {
    setLoading(true);

    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setLoading(false));
  };

  return {
    user,
    emailRegistration,
    logOut,
    emailLogIn,
    loading,
    error,
    signInUsingGoogle,
  };
};
export default useFirebase;
