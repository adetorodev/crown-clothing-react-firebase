import {
    signInWithGooglePopup,
    createUserProfileDocument
  } from '../../Firebase.Utils/FirebaseUtils';

  const SignIn = () => {
    const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserProfileDocument(user)
    //   createUserProfileDocument(user);
    };

    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      </div>
    );
  };

  export default SignIn;