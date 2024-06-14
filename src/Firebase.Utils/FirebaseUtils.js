import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJtRnDkzZbck-r77WYU9zsmiFzE6EjUis",
  authDomain: "crown-clothing-14b7e.firebaseapp.com",
  projectId: "crown-clothing-14b7e",
  storageBucket: "crown-clothing-14b7e.appspot.com",
  messagingSenderId: "424373573356",
  appId: "1:424373573356:web:742d384bbc40fd8653f7c9",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentfromAuth = async (userAuth) => {
  const useDocRef = doc(db, "user", userAuth.uid);

  // console.log(useDocRef)

  const userSnapShot = await getDoc(useDocRef);
  // console.log(userSnapShot)
  console.log(userSnapShot.exists());

  // if (!userSnapShot.exists()) {
  //   const { displayName, email } = userAuth;
  //   const createdAt = new Date();

  //   try {
  //     await setDoc(useDocRef, {
  //       displayName,
  //       email,
  //       createdAt,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // check if user dtata exists
};
