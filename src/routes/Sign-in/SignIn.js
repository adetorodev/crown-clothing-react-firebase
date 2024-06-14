import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../Firebase.Utils/FirebaseUtils";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  useEffect( () => {
    async function redirect() {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    redirect()
  }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    //   createUserProfileDocument(user);
  };

  // const logGoogleRedirect = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //     console.log(user)
  //     // const userDocRef = await createUserDocumentFromAuth(user)
  //   //   createUserProfileDocument(user);
  //   };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
