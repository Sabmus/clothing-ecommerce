import {
  signInWithGooglePopup,
  SignOut,
} from "../../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../../utils/firebase/firestore-db.utils";

const SignIn = () => {
  const loginGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const SigningOut = async () => await SignOut();

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={loginGoogleUser}>LogIn with Google</button>
      <button onClick={SigningOut}>LogOut with Google</button>
    </div>
  );
};

export default SignIn;
