import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAevuSJC0tJpnlud1snLwuvrFiOkXiNISg",
  authDomain: "project-capstone-dfbcf.firebaseapp.com",
  projectId: "project-capstone-dfbcf",
  storageBucket: "project-capstone-dfbcf.appspot.com",
  messagingSenderId: "549169365195",
  appId: "1:549169365195:web:e2708f103d56de79d25b4e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdDate,
      });
    } catch (error) {
      console.log("Error creating the User ", error.message);
    }
  }
  return userDocRef;
};
