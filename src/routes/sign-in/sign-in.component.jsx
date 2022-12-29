import {
  signInWithGooglePopup,
  SignOut,
} from "../../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../../utils/firebase/firestore-db.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const SigningOut = async () => await SignOut();

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logInGoogleUser}>LogIn with Google</button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;
