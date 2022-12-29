import { useState } from "react";

import {
  signInWithGooglePopup,
  logInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firestore-db.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./login-form.styles.scss";

const initialFormFields = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { email, password } = formFields;

  const logInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await logInUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Invalid credentials");
          break;
        case "auth/user-not-found":
          alert("Invalid credentials");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>have an account?</h2>
      <span>Log in with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={changeHandler}
          required
          autoFocus
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={changeHandler}
          required
        />

        <div className="buttons-container">
          <Button children="Sign In" type="submit" />
          <Button
            children="Google LogIn"
            type="button"
            buttonType="google"
            onClick={logInGoogleUser}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
